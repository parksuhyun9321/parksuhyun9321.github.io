if(!self.define){let i,e={};const n=(n,s)=>(n=new URL(n+".js",s).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(s,r)=>{const o=i||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let l={};const c=i=>n(i,o),a={module:{uri:o},exports:l,require:c};e[o]=Promise.all(s.map((i=>a[i]||c(i)))).then((i=>(r(...i),l)))}}define(["./workbox-4f586afe"],(function(i){"use strict";i.setCacheNameDetails({prefix:"portfolio"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/app.2614328e.css",revision:null},{url:"/fonts/BlackHanSans-Regular.eb1728dd.ttf",revision:null},{url:"/img/btn_back.d2844124.svg",revision:null},{url:"/img/clapPortfolio.80dd7b17.png",revision:null},{url:"/img/css3.a933609e.svg",revision:null},{url:"/img/edaeri.44194f70.png",revision:null},{url:"/img/hmaid.14a23a56.png",revision:null},{url:"/img/html5.23921075.svg",revision:null},{url:"/img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"/img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"/img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"/img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"/img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"/img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"/img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"/img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"/img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"/img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"/img/icons/favicon.png",revision:"3d2f2256c463bcca482c8c76196c035d"},{url:"/img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"/img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"/img/icons/safari-pinned-tab.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"/img/javascript.61d68671.svg",revision:null},{url:"/img/jbro.4d2a15df.png",revision:null},{url:"/img/jquery.92d17bcf.svg",revision:null},{url:"/img/logo.8f45b412.svg",revision:null},{url:"/img/no_image.0cc157e6.svg",revision:null},{url:"/img/php.24f3756c.svg",revision:null},{url:"/img/sass.d0344357.svg",revision:null},{url:"/img/setting.923a5ab2.svg",revision:null},{url:"/img/setting_close.b351be9d.svg",revision:null},{url:"/img/steam.5f011250.png",revision:null},{url:"/img/vue.12f8c2e0.svg",revision:null},{url:"/js/app.5cfe7a51.js",revision:null},{url:"/js/chunk-vendors.017caf93.js",revision:null},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
