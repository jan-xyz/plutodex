if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const d=e=>n(e,r),b={module:{uri:r},exports:s,require:d};i[r]=Promise.all(c.map((e=>b[e]||d(e)))).then((e=>(o(...e),s)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.45680401.css",revision:null},{url:"assets/index.cc4aa95f.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"index.html",revision:"43e4671274b069f2d4102f847d9b0486"},{url:"favicon.ico",revision:"2ef8166aac0e215a02fab0da39319c73"},{url:"seen.wav",revision:"818a33be3080ce87cbe274294f7278d2"},{url:"icons/icon-72x72.png",revision:"76ce6de6595467686a23bc9d0568524a"},{url:"icons/icon-96x96.png",revision:"707fb61d5e2ab281908d868462b2666b"},{url:"icons/icon-128x128.png",revision:"847a057cf77c70d6ccf42e70d637448c"},{url:"icons/icon-144x144.png",revision:"ae94dbdf7e84bf324d9e2b634d62eb59"},{url:"icons/icon-152x152.png",revision:"b068128614009d33efa65df8e3451d81"},{url:"icons/icon-192x192.png",revision:"5c3e5f44da3955c983aa093b71f3d43d"},{url:"icons/icon-384x384.png",revision:"df6b39fdc2058bd91f4dab0cb3fecd77"},{url:"icons/icon-512x512.png",revision:"b81a144e3924aa82d17fb4d36d856572"},{url:"apple-touch-icon.png",revision:"457a3e4b8a0a60efb78ccb019698339b"},{url:"christmas_bg.png",revision:"3cc347bfbca451943eabe62b699dc3a1"},{url:"harry_potter_bg.png",revision:"ce3afc7d9314c1ec9586b3773c3dd597"},{url:"lock.png",revision:"7678281deeb3eb8c60903ccaccc8d1dc"},{url:"pluto.png",revision:"72f1c3b403dbd07cbe8c43ce74949a92"},{url:"pride_bg.png",revision:"e3ffc9451f746363ab9fb9509ef50ce8"},{url:"manifest.webmanifest",revision:"7caae618f14fbb05cdb90c4114534fa4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
