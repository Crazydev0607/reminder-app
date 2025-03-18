self.addEventListener('install', function(event) {
    console.log('Service Worker Installed');
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker Activated');
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/') 
    );
});
