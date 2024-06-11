(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("button{color:#fff;background:#00f;border:0;cursor:pointer;padding:5px 10px;border-radius:5px}button:hover{color:#fff;background:navy;border:0;cursor:pointer;padding:5px 10px;border-radius:5px}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { defineComponent as a, ref as u, openBlock as l, createElementBlock as p, createElementVNode as c, toDisplayString as o, unref as _ } from "vue";
async function d(e, t = "https://your-restful-endpoint") {
  console.log("pending"), e.value = "pending", await fetch(t).then((n) => (n.ok ? e.value = "success" : e.value = "error", console.log(e.value), n)).catch(() => {
    e.value = "error", console.log(e.value);
  });
}
const f = { "data-testid": "span" }, m = { "data-testid": "state" }, g = /* @__PURE__ */ a({
  __name: "TestComponent",
  props: {
    text: { type: String, default: "State" }
  },
  setup(e) {
    const t = u("idle"), n = () => d(t);
    return (r, s) => (l(), p("button", {
      onClick: n,
      "data-testid": "TestComponent"
    }, [
      c(
        "span",
        f,
        o(e.text) + ": ",
        1
        /* TEXT */
      ),
      c(
        "span",
        m,
        o(t.value),
        1
        /* TEXT */
      )
    ]));
  }
}), i = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, y = /* @__PURE__ */ i(g, [["__file", "/app/lib/components/TestComponent.vue"]]);
function v(e) {
  return e === void 0 ? "Hello!" : `Hello ${e}!`;
}
const h = /* @__PURE__ */ a({
  __name: "TestGreeting",
  props: {
    name: { type: String, required: !1 }
  },
  setup(e) {
    return (t, n) => (l(), p(
      "h1",
      null,
      o(_(v)(t.name)),
      1
      /* TEXT */
    ));
  }
}), C = /* @__PURE__ */ i(h, [["__file", "/app/lib/components/TestGreeting.vue"]]);
export {
  y as TestComponent,
  C as TestGreeting
};
