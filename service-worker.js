const CACHE="versatil-v2-09-hospitais-upa";
const APP_SHELL=[
  './',
  './index.html',
  './style.css?v=2090',
  './app.js?v=2090',
  './manifest.json',
  './data.json',
  './logo-versatil.jpg',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(cache=>cache.addAll(APP_SHELL))
  );
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

  // Navegação: tenta rede primeiro; se estiver sem internet, abre o app salvo.
  if(event.request.mode==='navigate'){
    event.respondWith(
      fetch(event.request,{cache:'no-store'})
        .then(response=>{
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put('./index.html',copy));
          return response;
        })
        .catch(()=>caches.match('./index.html'))
    );
    return;
  }


  if(sameOrigin && url.pathname.endsWith('/data.json')){
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

  if(sameOrigin){
    event.respondWith(
      caches.match(event.request).then(cached=>{
        const network=fetch(event.request,{cache:'no-store'})
          .then(response=>{
            if(response && response.ok){
              const copy=response.clone();
              caches.open(CACHE).then(cache=>cache.put(event.request,copy));
            }
            return response;
          })
          .catch(()=>cached);
        return cached||network;
      })
    );
  }
});
