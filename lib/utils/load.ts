import type { Ref } from "vue";
import type { State } from "../types/states";

export async function load(state: Ref<State>, endpoint: string | URL | Request = 'https://your-restful-endpoint') {
    console.log("pending")
    state.value = "pending";
    await fetch(endpoint)
        .then((res) => {
            if (res.ok) {
                state.value = "success";
            } else {
                state.value = "error";
            }
            console.log(state.value)
            return res;
        })
        .catch(() => {
            state.value = 'error';
            console.log(state.value)
        });
}