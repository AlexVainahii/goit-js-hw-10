var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,a=c||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,p=function(){return a.Date.now()};function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var c=r.test(t);return c||i.test(t)?u(t.slice(2),c?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var o,r,i,u,c,f,a=0,l=!1,b=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=o,i=r;return o=r=void 0,a=e,u=t.apply(i,n)}function g(t){return a=t,c=setTimeout(w,e),l?m(t):u}function j(t){var n=t-f;return void 0===f||n>=e||n<0||b&&t-a>=i}function w(){var t=p();if(j(t))return T(t);c=setTimeout(w,function(t){var n=e-(t-f);return b?d(n,i-(t-a)):n}(t))}function T(t){return c=void 0,h&&o?m(t):(o=r=void 0,u)}function x(){var t=p(),n=j(t);if(o=arguments,r=this,f=t,n){if(void 0===c)return g(f);if(b)return c=setTimeout(w,e),m(f)}return void 0===c&&(c=setTimeout(w,e)),u}return e=y(e)||0,v(n)&&(l=!!n.leading,i=(b="maxWait"in n)?s(y(n.maxWait)||0,e):i,h="trailing"in n?!!n.trailing:h),x.cancel=function(){void 0!==c&&clearTimeout(c),a=0,o=f=r=c=void 0},x.flush=function(){return void 0===c?u:T(p())},x};const b={inputSearchRef:document.querySelector("#search-box"),listCountryRef:document.querySelector(".country-list"),infoCountryBoxRef:document.querySelector(".country-info")};b.inputSearchRef.addEventListener("input",e((t=>{var e;(e=t.target.value,fetch(`https://restcountries.com/v3.1/name/${e}`).then((t=>{if(!t.ok)throw new Error(t.status);return console.log("object"),t.json()})).then((t=>{console.log("object1"),console.log(t)}))).then(console.log(" succes")).catch((()=>{console.log(" erorr")}))}),300));
//# sourceMappingURL=index.437d686e.js.map