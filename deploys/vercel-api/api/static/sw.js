if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const d=e=>i(e,a),o={module:{uri:a},exports:c,require:d};s[a]=Promise.all(r.map((e=>o[e]||d(e)))).then((e=>(n(...e),c)))}}define(["./workbox-aea68b17"],(function(e){"use strict";e.setCacheNameDetails({prefix:"1719071942187"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/ImgManage-77057876.css",revision:"32e213d1b244844e16700192b25a8c44"},{url:"css/index-98b8f8e3.css",revision:"e8a0821022f15f53543d32093be35164"},{url:"index.html",revision:"132be397a2205c2a262aaac9d61ea195"},{url:"js/ImgManage-10bca973.js",revision:"ec155dd0ddb21a75c439d95090b4fdb5"},{url:"js/ImgManage-legacy-10aa7338.js",revision:"6aeaf576fe8f263cb1557dca7a0c1d9b"},{url:"js/index-2cb70613.js",revision:"667186c621496e8797004c8ea532e5e3"},{url:"js/index-legacy-dfdaebc5.js",revision:"a740a3789b73bc3634d0e2e38331bfbe"},{url:"js/polyfills-legacy-479b38d6.js",revision:"84e8e46e779e0bd1fdb5a0f0fd16aebf"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches()}));
