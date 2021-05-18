importScripts("./workbox.js")

workbox.routing.registerRoute(
    /\.(?:css|js)$/,
        new workbox.strategies.StaleWhileRevalidate({
            "cacheName":"assets",
            plugins:[
                new workbox.expiration.ExpirationPlugin({
                    maxEntries:1000,
                    maxAgeSeconds:3156000
                })
            ]
        })
)

workbox.routing.registerRoute(
    /\.(?:png|jpg|gif|svg|ttf|ico)$/,
        new workbox.strategies.CacheFirst({
            "cacheName":"images",
            plugins:[
                new workbox.expiration.ExpirationPlugin({
                    maxEntries:1000,
                    maxAgeSeconds:3156000
                })
            ]
        })
)

workbox.routing.registerRoute(
    "/",
        new workbox.strategies.StaleWhileRevalidate({
            "cacheName":"root",
            plugins:[
                new workbox.expiration.ExpirationPlugin({
                    maxEntries:1000,
                    maxAgeSeconds:3156000
                })
            ]
        })
)

