if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>n(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/958UM3NsHay0BsdPAlIX0/_buildManifest.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/958UM3NsHay0BsdPAlIX0/_middlewareManifest.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/958UM3NsHay0BsdPAlIX0/_ssgManifest.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/chunks/165-7adb3b43e6b1b826.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/chunks/171.e9208ef84f4ddc07.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/chunks/75fc9c18-4d2f0a9f494a9dad.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/chunks/855-f3944a5c4e3280e1.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/chunks/framework-8957c350a55da097.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/chunks/main-a1935d2e4fcfff50.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/chunks/pages/404-cccfca171cb7b1d1.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/chunks/pages/_app-02e0433b2cb4abc6.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/chunks/pages/about-us-8b533638ef825b1f.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/chunks/pages/blog-2fcd60d0d3ba6916.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/chunks/pages/blog/%5B...post%5D-8d72ebc09e4212c7.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/chunks/pages/contact-us-4e4bdee303aa6308.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/chunks/pages/index-bdb73f609f5cf917.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/chunks/webpack-df59bcc8d30beb89.js",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/_next/static/css/a703bf8501070586.css",revision:"958UM3NsHay0BsdPAlIX0"},{url:"/contentstack-readme-logo.png",revision:"b876b33d59cbf5ce3ec7d9242745a7de"},{url:"/copy.svg",revision:"b6ed71ceabe5e24a1ae9d3b964c92404"},{url:"/favicon.ico",revision:"9a6e4aaa6e90b763a122b06b12417091"},{url:"/icon/icon-192x192.png",revision:"ca9d675a868e5e2ef3389bf8e9e41ef6"},{url:"/icon/icon-256x256.png",revision:"4f4eed8bd6c5ce7c92ab25bc0f6d6319"},{url:"/icon/icon-384x384.png",revision:"d20f17d829aa3f2a136a2e20c3cd566f"},{url:"/icon/icon-512x512.png",revision:"9e5e8e7e2f879b75d304f2214fd46ac1"},{url:"/json.svg",revision:"7b433b4965ec8546087482b1d0cc21c1"},{url:"/manifest.json",revision:"46cbd3b8d736e5caa98d8c92129b1d87"},{url:"/starter-app.png",revision:"62f77101c523dba1194a95219bc41e25"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
