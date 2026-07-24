const CACHE_NAME = "exchange-now-v5";
const ASSETS = [
  "./",
  "./index.html",
  "./index.css?v=5",
  "./manifest.json",
  "./icon-512.png",
  "https://cdn.jsdelivr.net/npm/chart.js"
];

// Install Event - skipWaiting to force immediate activation
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Event - claim clients immediately and clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Network-First for HTML & CSS so updates are served instantly
self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("open.er-api.com")) {
    return;
  }

  const isHtmlOrCss = event.request.mode === "navigate" || 
                      event.request.url.includes("index.html") || 
                      event.request.url.includes("index.css");

  if (isHtmlOrCss) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache-First for static assets (images, scripts)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
