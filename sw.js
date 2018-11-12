this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        './js/dbhelper.js',
        './js/main.js',
        './js/restaurant_info.js',
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg',
        './data/restaurants.json',
        './css/styles.css',
        './index.html',
        './restaurant.html'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(res=> {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      }).catch(err=> {
      	console.log(err)
      })
  );
});