!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequire7bc7=n);var r=n("6JpON"),i={formInputEl:document.querySelector(".form")},a=null;function l(e,t){var o=Math.random()>.3;return new Promise((function(n,r){a=setTimeout((function(){o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}i.formInputEl.addEventListener("submit",(function(e){e.preventDefault(),clearTimeout(a);var t=e.target.elements,o=t.delay,n=t.step,i=t.amount,u=Number(o.value);if(o.value<1||n.value<1||i.value<1)return void r.Notify.failure("All fields must be more than zero");r.Notify.success("Please observe the promises appear below");for(var s=1;s<=i.value;s+=1)l(s,u).then((function(e){var t=e.position,o=e.delay;r.Notify.success("✅ Fulfilled promise #".concat(t," in ").concat(o,"ms"))})).catch((function(e){var t=e.position,o=e.delay;r.Notify.failure("❌ Rejected promise #".concat(t," in ").concat(o,"ms"))})),u+=Number(n.value);e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.a515e296.js.map
