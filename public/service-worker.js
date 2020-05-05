
var cacheName = "sgtoilet-cache-" + Date.now();
var filesToCache = [
  "/",
  "/index.html",
  "/build/bundle.css",
  "/global.css",
  "/build/bundle.js",
  "faVcon.png",
  "https://rsms.me/inter/inter.css",
  "https://rsms.me/inter/font-files/Inter-roman.var.woff2?3.13"
];
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(thisCacheName) {
          if (thisCacheName !== cacheName) {
            return caches.delete(thisCacheName);
          }
        })
      );
    })
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    (async function() {
      const response = await caches.match(e.request);
      return response || fetch(e.request);
    })()
  );
});
