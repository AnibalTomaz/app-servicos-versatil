const CACHE="versatil-v1-39";
const ASSETS=['./','./index.html','./style.css?v=139','./app.js?v=139','./manifest.json','./logo-versatil.jpg'];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
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
  const isAppAsset=url.origin===self.location.origin &&
    (url.pathname.endsWith('/index.html') ||
     url.pathname.endsWith('/app.js') ||
     url.pathname.endsWith('/style.css') ||
     url.pathname.endsWith('/'));

  if(isAppAsset){
    event.respondWith(
      fetch(event.request,{cache:'no-store'})
        .then(response=>{
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put(event.request,copy));
          return response;
        })
        .catch(()=>caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached=>cached||fetch(event.request))
  );
});
