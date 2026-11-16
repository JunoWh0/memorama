const CACHE_NAME = 'mi-pwa-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './icons/brain.png',
    './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((Cache) => {
            return caches.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith (
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});