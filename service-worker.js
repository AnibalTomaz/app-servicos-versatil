const CACHE="versatil-v2-45-cache-controlado";
const APP_SHELL=[
  './',
  './index.html',
  './style.css?v=2450',
  './app.js?v=2450',
  './manifest.json',
  './logo-versatil.jpg',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP_SHELL)));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  const sameOrigin=url.origin===self.location.origin;

  if(event.request.mode==='navigate'){
    event.respondWith(
      fetch(event.request,{cache:'no-store'})
        .then(response=>{
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put('./index.html',copy)).catch(()=>{});
          return response;
        })
        .catch(()=>caches.match('./index.html'))
    );
    return;
  }

  // v2.45: data.json is always network-only. Cache-busting query strings previously
  // created hundreds of multi-megabyte copies and exhausted browser quota.
  if(sameOrigin && url.pathname.endsWith('/data.json')){
    event.respondWith(fetch(event.request,{cache:'no-store'}));
    return;
  }

  if(sameOrigin){
    event.respondWith(
      fetch(event.request,{cache:'no-store'})
        .then(response=>{
          if(response && response.ok){
            const normalized=new Request(url.origin+url.pathname,{method:'GET'});
            const copy=response.clone();
            caches.open(CACHE).then(cache=>cache.put(normalized,copy)).catch(()=>{});
          }
          return response;
        })
        .catch(()=>caches.match(new Request(url.origin+url.pathname,{method:'GET'})))
    );
  }
});
