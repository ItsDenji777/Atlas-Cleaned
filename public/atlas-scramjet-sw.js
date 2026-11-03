importScripts('/vendor/scramjet/scramjet.all.js');
const {ScramjetServiceWorker}=$scramjetLoadWorker();
const engine=new ScramjetServiceWorker();
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{
  event.respondWith((async()=>{
    await engine.loadConfig();
    // Only proxied referrers can be decoded with the engine's URL codec.
    // Atlas UI/query URLs and blob launchers are not encrypted proxy addresses.
    let request=event.request;
    if(request.referrer && !request.referrer.startsWith(self.location.origin+'/engine/scramjet/')) {
      request=new Request(request,{referrer:''});
      // Request cloning clears navigation metadata; engines need it to rewrite HTML.
      for(const name of ['destination','mode'])Object.defineProperty(request,name,{value:event.request[name]});
    }
    const response=await (engine.route(event) ? engine.fetch({request,clientId:event.clientId}) : fetch(event.request));
    const headers=new Headers(response.headers);headers.set('Cross-Origin-Embedder-Policy','credentialless');headers.set('Cross-Origin-Resource-Policy','same-origin');
    return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
  })());
});
