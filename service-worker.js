if(!self.define){let i,n={};const e=(e,o)=>(e=new URL(e+".js",o).href,n[e]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=n,document.head.appendChild(i)}else i=e,importScripts(e),n()})).then((()=>{let i=n[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(o,s)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let l={};const c=i=>e(i,r),a={module:{uri:r},exports:l,require:c};n[r]=Promise.all(o.map((i=>a[i]||c(i)))).then((i=>(s(...i),l)))}}define(["./workbox-4f586afe"],(function(i){"use strict";i.setCacheNameDetails({prefix:"portfolio"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/app.0a896fb4.css",revision:null},{url:"/favicon.png",revision:"3d2f2256c463bcca482c8c76196c035d"},{url:"/fonts/BlackHanSans-Regular.eb1728dd.ttf",revision:null},{url:"/img/btn_back.d2844124.svg",revision:null},{url:"/img/clapPortfolio.80dd7b17.png",revision:null},{url:"/img/css3.a933609e.svg",revision:null},{url:"/img/hmaid.14a23a56.png",revision:null},{url:"/img/html5.23921075.svg",revision:null},{url:"/img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"/img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"/img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"/img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"/img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"/img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"/img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"/img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"/img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"/img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"/img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"/img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"/img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"/img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"/img/icons/safari-pinned-tab.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"/img/javascript.61d68671.svg",revision:null},{url:"/img/jbro.4d2a15df.png",revision:null},{url:"/img/jquery.92d17bcf.svg",revision:null},{url:"/img/logo.8f45b412.svg",revision:null},{url:"/img/no_image.0cc157e6.svg",revision:null},{url:"/img/php.24f3756c.svg",revision:null},{url:"/img/sass.d0344357.svg",revision:null},{url:"/img/setting.923a5ab2.svg",revision:null},{url:"/img/setting_close.b351be9d.svg",revision:null},{url:"/img/vue.12f8c2e0.svg",revision:null},{url:"/js/app.ac6984cc.js",revision:null},{url:"/js/chunk-vendors.017caf93.js",revision:null},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
