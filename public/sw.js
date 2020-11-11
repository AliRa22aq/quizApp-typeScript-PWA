var urlsToCache = [
  '/static/js/bundle.js',
  '/static/js/0.chunk.js',
  '/static/js/main.chunk.js',
  '/',
  '/index.html',
  '/bg.jpg',
  '/manifest.json',
  '/logo192.png',
  '/favicon.ico',

];

self.addEventListener("activate", function(e){
    console.log("[servicworker] Activate")
})

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open("QuizAppV1")
      .then(function(cache) {
        cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });