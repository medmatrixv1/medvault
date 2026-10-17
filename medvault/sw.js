const V="medvault-v1.3.0";
const ASSETS=["./","index.html","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png",
"fonts/sora-latin-400-normal.woff2","fonts/sora-latin-600-normal.woff2","fonts/manrope-latin-400-normal.woff2","fonts/manrope-latin-500-normal.woff2","fonts/manrope-latin-600-normal.woff2","fonts/jetbrains-mono-latin-400-normal.woff2","fonts/jetbrains-mono-latin-500-normal.woff2"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
 e.respondWith(caches.match(r).then(h=>h||fetch(r).then(n=>{const c=n.clone();caches.open(V).then(x=>x.put(r,c));return n}).catch(()=>caches.match("index.html"))))});
