import { describe, expect, it } from "vitest"
import { createGreeting } from "./createGreeting"

describe("createGreeting", () => {
    it("creates a generic greeting when no name is provided", () => {
        expect(createGreeting()).toBe("Hello!")
    })
    it("creates a specific greeting when a name is provided", () => {
        expect(createGreeting("World")).toBe("Hello World!")
    })
})
