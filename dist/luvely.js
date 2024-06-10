import { defineComponent as a, openBlock as c, createElementBlock as p, toDisplayString as o, unref as u, ref as _, createElementVNode as l } from "vue";
function d(e) {
  return e === void 0 ? "Hello!" : `Hello ${e}!`;
}
const f = /* @__PURE__ */ a({
  __name: "TestGreeting",
  props: {
    name: { type: String, required: !1 }
  },
  setup(e) {
    return (t, n) => (c(), p(
      "h1",
      null,
      o(u(d)(t.name)),
      1
      /* TEXT */
    ));
  }
}), i = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, g = /* @__PURE__ */ i(f, [["__file", "/app/lib/components/TestGreeting.vue"]]), C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: g
}, Symbol.toStringTag, { value: "Module" }));
async function m(e, t = "https://your-restful-endpoint") {
  console.log("pending"), e.value = "pending", await fetch(t).then((n) => (n.ok ? e.value = "success" : e.value = "error", console.log(e.value), n)).catch(() => {
    e.value = "error", console.log(e.value);
  });
}
const v = { "data-testid": "span" }, T = { "data-testid": "state" }, y = /* @__PURE__ */ a({
  __name: "TestComponent",
  props: {
    text: { type: String, default: "State" }
  },
  setup(e) {
    const t = _("idle"), n = () => m(t);
    return (r, s) => (c(), p("button", {
      onClick: n,
      "data-testid": "TestComponent"
    }, [
      l(
        "span",
        v,
        o(e.text) + ": ",
        1
        /* TEXT */
      ),
      l(
        "span",
        T,
        o(t.value),
        1
        /* TEXT */
      )
    ]));
  }
}), b = /* @__PURE__ */ i(y, [["__file", "/app/lib/components/TestComponent.vue"]]), S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: b
}, Symbol.toStringTag, { value: "Module" }));
export {
  S as TestComponent,
  C as TestGreeting
};
