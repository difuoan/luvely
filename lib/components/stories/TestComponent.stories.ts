import type { Meta, StoryObj } from '@storybook/vue3';
import { http, HttpResponse, delay } from 'msw';
import TestComponent from '../TestComponent.vue';
import { expect, within } from '@storybook/test';
import type { PlayFunctionContext } from "@storybook/types";
import type { VueRenderer } from '@storybook/vue3';

// CONFIGURATION
const meta = {
    title: 'components/TestComponent',
    component: TestComponent,
    tags: ['autodocs'],
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

async function test(context: PlayFunctionContext<VueRenderer>, finalText: string) {
    let canvas = within(context.canvasElement)
    let span = canvas.getByTestId("span")
    await expect(span.innerText).toBe(`${context.args.text}: `)
    let button = canvas.getByTestId("state")
    await expect(button.innerText).toBe(`idle`)
    await button.click()
    await expect(button.innerText).toBe(`pending`)
    await delay(1000);
    await expect(button.innerText).toBe(`${finalText}`)
}

// STORIES
export const Success: Story = {
    args: { text: "State" },
    parameters: {
        msw: {
            handlers: [
                http.get('https://your-restful-endpoint/', async () => {
                    let response: HttpResponse = new HttpResponse("Hello World!", { status: 200 })
                    await delay(500);
                    return response
                }),
            ],
        },
    },
};
Success.play = async (context) => test(context, "success")

export const Error: Story = {
    args: { text: "State" },
    parameters: {
        msw: {
            handlers: [
                http.get('https://your-restful-endpoint/', async () => {
                    let response: HttpResponse = new HttpResponse("Goodbye World!", { status: 500 })
                    await delay(500);
                    return response
                }),
            ],
        },
    },
};
Error.play = async (context) => test(context, "error")

export const Text: Story = {
    args: { text: "Test" },
    parameters: {
        msw: {
            handlers: [
                http.get('https://your-restful-endpoint/', async () => {
                    let response: HttpResponse = new HttpResponse("Goodbye World!", { status: 200 })
                    await delay(500);
                    return response
                }),
            ],
        },
    },
};
Text.play = async (context) => test(context, "success")