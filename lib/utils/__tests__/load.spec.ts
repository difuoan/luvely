import { describe, expect, it, vi } from "vitest"
import { load } from "../load"
import type { State } from "../../types/states"
import { ref } from "vue"
import { flushPromises } from '@vue/test-utils'

const fetchSpy = vi.spyOn(global, "fetch")
const logSpy = vi.spyOn(console, "log")

type States = {
    initial: State
    during: State
    final: State
}
function getState(states?: Partial<States>) {
    return {
        initial: "idle",
        during: "pending",
        final: "success",
        ...states
    } as States
}
type FetchSpyKey = keyof Pick<typeof fetchSpy, "mockResolvedValueOnce" | "mockRejectedValueOnce">

async function test(states: States, fetchFunction: FetchSpyKey, responseOptions?: ResponseInit) {
    fetchSpy[fetchFunction](new Response(null, responseOptions))

    let state = ref<State>(states.initial)
    load(state)

    expect(state.value).toBe(states.during)
    expect(logSpy).lastCalledWith(states.during);

    await flushPromises()

    expect(state.value).toBe(states.final)
    expect(logSpy).lastCalledWith(states.final);
}

describe("load", () => {
    describe("changes state acording to request result", () => {
        it("success", () => test(getState(), "mockResolvedValueOnce"))
        it("error", () => test(getState({ final: "error" }), "mockResolvedValueOnce", { status: 500 }))
        it("catch error", () => test(getState({ final: "error" }), "mockRejectedValueOnce"))
    })
})