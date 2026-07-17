const CACHE_NAME = "exchange-now-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./index.css",
  "./manifest.json",
  "./icon-512.png",
  "https://cdn.jsdelivr.net/npm/chart.js"
];

// Install Event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// Fetch Event
self.addEventListener("fetch", (event) => {
  // Let the browser handle standard API requests dynamically without static caching
  if (event.request.url.includes("open.er-api.com")) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
