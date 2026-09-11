import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getDatabase, ref, set, get, update, remove, onValue, onDisconnect, runTransaction, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

const firebaseConfig={
  apiKey:"AIzaSyBhPwBFWgqeSfN8zSM4Pu6Dg-8suzeqHus",
  authDomain:"versatil-sala-de-jogos.firebaseapp.com",
  databaseURL:"https://versatil-sala-de-jogos-default-rtdb.firebaseio.com",
  projectId:"versatil-sala-de-jogos",
  storageBucket:"versatil-sala-de-jogos.firebasestorage.app",
  messagingSenderId:"345907094201",
  appId:"1:345907094201:web:ef4dff6b6084fecc197168"
};

const fb=initializeApp(firebaseConfig),auth=getAuth(fb),db=getDatabase(fb);
const $=s=>document.querySelector(s);

const BANNER_KEY='versatil_game_banners_v020';
function loadBanners(){
  try{return (JSON.parse(localStorage.getItem(BANNER_KEY)||'[]')||[]).filter(Boolean).slice(0,6)}
  catch{return []}
}
function saveBanners(arr){localStorage.setItem(BANNER_KEY,JSON.stringify(arr.slice(0,6)))}
async function syncBannersFromFirebase(){
  try{
    const snap=await get(ref(db,'gameConfig/banners'));
    const value=snap.val();
    const arr=Array.isArray(value)?value:Object.keys(value||{}).sort((x,y)=>Number(x)-Number(y)).map(k=>value[k]);
    if(Array.isArray(arr)){saveBanners(arr.slice(0,6));showAccessBanner();renderBannerAdmin()}
  }catch(e){console.warn('Banners remotos:',e)}
}
async function saveBannersRemote(arr){
  const six=Array.from({length:6},(_,i)=>String(arr[i]||''));
  saveBanners(six);
  await set(ref(db,'gameConfig/banners'),six);
}
async function prepareBannerFile(file){
  const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file)});
  const img=await new Promise((resolve,reject)=>{const i=new Image();i.onload=()=>resolve(i);i.onerror=reject;i.src=data});
  const canvas=document.createElement('canvas');canvas.width=1200;canvas.height=340;
  const ctx=canvas.getContext('2d');
  const scale=Math.max(1200/img.width,340/img.height),w=img.width*scale,h=img.height*scale;
  ctx.drawImage(img,(1200-w)/2,(340-h)/2,w,h);
  return canvas.toDataURL('image/jpeg',0.78);
}
function pickBannerIndex(forceDifferent=true){
  const arr=loadBanners();if(!arr.length)return -1;
  if(arr.length===1)return 0;
  let idx=Math.floor(Math.random()*arr.length);
  if(forceDifferent&&idx===currentBannerIndex)idx=(idx+1+Math.floor(Math.random()*(arr.length-1)))%arr.length;
  return idx;
}
function ensureBannerLayers(el){
  if(!el)return [];
  let layers=[...el.querySelectorAll('.gameBannerLayer')];
  while(layers.length<2){
    const layer=document.createElement('div');
    layer.className='gameBannerLayer';
    el.appendChild(layer);
    layers.push(layer);
  }
  return layers.slice(0,2);
}

function preloadBannerV028(src){
  return new Promise(resolve=>{const im=new Image();im.onload=()=>resolve(true);im.onerror=()=>resolve(false);im.src=src});
}
function applyBanner(el,idx,{instant=false}={}){
  const arr=loadBanners();if(!el)return;
  const token=String(Number(el.dataset.bannerToken||0)+1);el.dataset.bannerToken=token;
  if(idx<0||!arr[idx]){
    el.classList.remove('hidden','hasImage','isCrossfading');el.classList.add('bannerPlaceholder');
    ensureBannerLayers(el).forEach(layer=>{layer.classList.remove('active');layer.style.backgroundImage=''});return;
  }
  const src=arr[idx];
  preloadBannerV028(src).then(ok=>{
    if(!ok||el.dataset.bannerToken!==token)return;
    el.classList.remove('hidden','bannerPlaceholder');el.classList.add('hasImage');
    const layers=ensureBannerLayers(el),current=layers.find(l=>l.classList.contains('active'))||layers[0],next=layers.find(l=>l!==current)||layers[1],targetUrl=`url("${src}")`;
    if(!current.style.backgroundImage){current.style.backgroundImage=targetUrl;current.classList.add('active');next.classList.remove('active');next.style.backgroundImage='';return}
    if(current.style.backgroundImage===targetUrl)return;
    next.style.backgroundImage=targetUrl;
    if(instant){current.classList.remove('active');next.classList.add('active');current.style.backgroundImage='';return}
    el.classList.add('isCrossfading');
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      if(el.dataset.bannerToken!==token)return;
      next.classList.add('active');current.classList.remove('active');
      setTimeout(()=>{if(el.dataset.bannerToken===token&&!current.classList.contains('active')){current.style.backgroundImage='';el.classList.remove('isCrossfading')}},1350);
    }));
  });
}
function showAccessBanner(){
  currentBannerIndex=pickBannerIndex(true);
  applyBanner($('#homeBanner'),currentBannerIndex,{instant:true});
  applyBanner($('#gameBanner'),currentBannerIndex,{instant:true});
}
function startGameBannerRotation(){
  clearInterval(bannerRotateTimer);
  applyBanner($('#gameBanner'),currentBannerIndex,{instant:true});
  if(loadBanners().length>1)bannerRotateTimer=setInterval(()=>{
    currentBannerIndex=pickBannerIndex(true);
    applyBanner($('#gameBanner'),currentBannerIndex);
  },25000);
}
function stopGameBannerRotation(){clearInterval(bannerRotateTimer);bannerRotateTimer=null}
function renderBannerAdmin(){
  const root=$('#bannerSlots');if(!root)return;
  const stored=loadBanners(),six=Array.from({length:6},(_,i)=>stored[i]||'');
  root.innerHTML='';
  six.forEach((src,i)=>{
    const box=document.createElement('div');box.className='bannerSlot';
    box.innerHTML=`<div class="bannerSlotTop"><strong>Banner ${i+1}</strong><span>1200 × 340 px</span></div>
      <div class="bannerPreview" id="bannerPreview${i}">${src?'':'Nenhuma imagem carregada'}</div>
      <input type="file" accept="image/*" data-banner="${i}">
      <button type="button" class="secondary" data-remove-banner="${i}">Remover</button>`;
    root.appendChild(box);
    if(src)$('#bannerPreview'+i).style.backgroundImage=`url("${src}")`;
  });
  root.querySelectorAll('input[type=file]').forEach(inp=>inp.onchange=async e=>{
    const file=e.target.files?.[0];if(!file)return;
    try{
      inp.disabled=true;
      const prepared=await prepareBannerFile(file);
      const arr=Array.from({length:6},(_,j)=>loadBanners()[j]||'');arr[Number(inp.dataset.banner)]=prepared;
      await saveBannersRemote(arr);renderBannerAdmin();showAccessBanner();
    }catch(err){console.error(err);alert('Não foi possível processar o banner.')}
    finally{inp.disabled=false;inp.value=''}
  });
  root.querySelectorAll('[data-remove-banner]').forEach(btn=>btn.onclick=async()=>{
    const idx=Number(btn.dataset.removeBanner),arr=Array.from({length:6},(_,j)=>loadBanners()[j]||'');
    arr[idx]='';await saveBannersRemote(arr);renderBannerAdmin();showAccessBanner();
  });
}
function startQueueCountdown(){
  clearInterval(queueCountdownTimer);
  const el=$('#queueCountdown');if(!el)return;
  const started=Date.now(),total=Math.ceil(BOT_WAIT_MS/1000);
  el.textContent=total;
  queueCountdownTimer=setInterval(()=>{
    const left=Math.max(0,total-Math.floor((Date.now()-started)/1000));
    el.textContent=left;
    if(left<=0)clearInterval(queueCountdownTimer);
  },250);
}
function stopQueueCountdown(){clearInterval(queueCountdownTimer);queueCountdownTimer=null}

const BOT_WAIT_MS=15000,QUEUE_MAX_AGE_MS=45000;
const GAME_NAMES={tictactoe:'Jogo da Velha',connect4:'Quatro em Linha',battleship:'Batalha Naval',chess:'Xadrez',poker:'Poker — Texas Hold’em (+18)'};
const GAME_ICONS={
  tictactoe:'✕○',
  connect4:'●●',
  battleship:'⚓',
  chess:'♟',
  poker:'♠'
};
const GAME_DESCRIPTIONS={
  tictactoe:'Clique nos quadrados e tente fazer 3 em linha.',
  connect4:'Clique nas colunas e tente fazer 4 em linha.',
  battleship:'Clique nas posições do oponente e tente afundar seus navios.',
  chess:'Movimente suas peças para atacar a rainha do oponente.',
  poker:'Busque montar a melhor mão de cartas e quebrar a banca.'
};

let uid=null,nick='',nickKey='',sessionId='',gameKey='',roomId=null,room=null;
let matching=false,enteringRoom=false,botTimer=null,seekTimer=null,roomUnsub=null,assignUnsub=null;
let roomWatchdogTimer=null,lastRoomEventAt=0,botBusySince=0;
let statsPageSession='',statsDisconnectHandle=null,statsRoundSeen='';
let queueCountdownTimer=null,bannerRotateTimer=null,currentBannerIndex=-1;
let chessSelected=null,pokerAgeApproved=false;
let endAnimationKey='',endAnimationPending=false,endAnimationTimer=null;

const views=[$('#homeView'),$('#queueView'),$('#gameView')];
function show(v){views.forEach(x=>x.classList.add('hidden'));v.classList.remove('hidden')}
function makeSession(){return Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,10)}
function makeNick(n){return 'SHV'+String(n).padStart(3,'0')}
function randomNickNumber(){return Math.floor(Math.random()*999)+1}
function clearSeek(){if(seekTimer){clearTimeout(seekTimer);seekTimer=null}}
function scheduleSeek(ms=700){clearSeek();seekTimer=setTimeout(seekOpponent,ms)}
function qRef(id=uid){return ref(db,`queues/${gameKey}/${id}`)}
function assignmentRef(id=uid){return ref(db,`queues/assignments/${gameKey}/${id}`)}

function stopRoomWatchdogV270(){
  if(roomWatchdogTimer)clearInterval(roomWatchdogTimer);
  roomWatchdogTimer=null;
  lastRoomEventAt=0;
}
function startRoomWatchdogV270(){
  stopRoomWatchdogV270();
  lastRoomEventAt=Date.now();
  roomWatchdogTimer=setInterval(async()=>{
    if(!roomId||!gameKey)return;

    // Se uma jogada do bot ficou marcada como ocupada por falha/rede,
    // libera o estado para permitir nova tentativa.
    if(botBusy && botBusySince && Date.now()-botBusySince>6500){
      botBusy=false;
      botBusySince=0;
    }

    // Mesmo sem novos eventos Firebase, verifica o estado da sala.
    // Isso recupera partidas que pareciam "travadas" depois de algum tempo.
    try{
      if(Date.now()-lastRoomEventAt>5000){
        const snap=await get(ref(db,'rooms/'+roomId));
        if(snap.exists()){
          room=snap.val();
          lastRoomEventAt=Date.now();
          renderGame();
        }
      }
      // Em partidas contra jogador virtual, se a vez ficou no bot,
      // o watchdog tenta novamente sem criar jogadas duplicadas.
      if(room && !room.winner){
        const red=room.players?.red;
        if(red?.type==='bot' && room.turn==='red')maybeBotMove();
      }
    }catch(e){
      console.warn('Watchdog da partida:',e?.message||e);
    }
  },2500);
}


function statsSafeId(v){return String(v||'').replace(/[.#$\[\]\/]/g,'_')}
function statsNow(){return Date.now()}
function statsRound(r=room){return Math.max(1,Number(r?.round||1))}
function statsMode(r=room){
  const humans=Object.values(r?.players||{}).filter(p=>p?.type==='human').length;
  return humans>=2?'human_vs_human':'human_vs_virtual';
}
function statsHumanCount(r=room){return Object.values(r?.players||{}).filter(p=>p?.type==='human').length}
function statsVirtualCount(r=room){return Object.values(r?.players||{}).filter(p=>p?.type==='bot').length}
async function statsWriteOnce(path,data){
  if(NO_STATS_MODE||!uid)return;
  try{await runTransaction(ref(db,path),cur=>cur||data)}
  catch(e){console.warn('Estatística não gravada:',path,e?.message||e)}
}
async function statsRecordRoomEntry(){
  if(!uid)return;
  if(!statsPageSession)statsPageSession=`${Date.now()}_${Math.random().toString(36).slice(2,9)}`;
  await statsWriteOnce(`statistics/entries/${uid}/${statsSafeId(statsPageSession)}`,{
    type:'room_entry',uid,createdAt:statsNow(),source:'sala_de_jogos',version:'0.20'
  });
}
async function statsRecordMatchStart(r=room){
  if(!roomId||!r)return;
  const round=statsRound(r),rid=statsSafeId(roomId);
  await statsWriteOnce(`statistics/matches/${rid}/${round}`,{
    type:'match',roomId,round,game:r.game,mode:statsMode(r),
    humanPlayers:statsHumanCount(r),virtualPlayers:statsVirtualCount(r),
    startedAt:statsNow(),status:'active',version:'0.20'
  });
  statsRoundSeen=`${roomId}|${round}`;
  await statsArmAbandonment(r);
}
async function statsMarkMatchFinished(r=room){
  if(NO_STATS_MODE)return;
  if(!roomId||!r?.winner)return;
  const round=statsRound(r),rid=statsSafeId(roomId);
  try{
    await runTransaction(ref(db,`statistics/matches/${rid}/${round}`),cur=>{
      const base=cur||{
        type:'match',roomId,round,game:r.game,mode:statsMode(r),
        humanPlayers:statsHumanCount(r),virtualPlayers:statsVirtualCount(r),
        startedAt:statsNow(),version:'0.20'
      };
      if(base.finishedAt)return base;
      return {...base,status:'completed',winner:r.winner,finishedAt:statsNow()};
    });
  }catch(e){console.warn('Final de partida não gravado',e?.message||e)}
  await statsDisarmAbandonment();
}
async function statsRecordAbandonment(r=room,reason='leave'){
  if(!uid||!roomId||!r||r.winner)return;
  const round=statsRound(r),rid=statsSafeId(roomId);
  await statsWriteOnce(`statistics/abandonments/${rid}/${round}/${uid}`,{
    type:'abandonment',uid,roomId,round,game:r.game,mode:statsMode(r),
    reason,createdAt:statsNow(),version:'0.20'
  });
}
async function statsArmAbandonment(r=room){
  if(NO_STATS_MODE)return;
  await statsDisarmAbandonment();
  if(!uid||!roomId||!r||r.winner)return;
  const round=statsRound(r),rid=statsSafeId(roomId);
  try{
    statsDisconnectHandle=onDisconnect(ref(db,`statistics/abandonments/${rid}/${round}/${uid}`));
    await statsDisconnectHandle.set({
      type:'abandonment',uid,roomId,round,game:r.game,mode:statsMode(r),
      reason:'disconnect',createdAt:statsNow(),version:'0.20'
    });
  }catch(e){statsDisconnectHandle=null;console.warn('onDisconnect estatístico indisponível',e?.message||e)}
}
async function statsDisarmAbandonment(){
  const h=statsDisconnectHandle;statsDisconnectHandle=null;
  if(h){try{await h.cancel()}catch{}}
}
async function statsRecordPokerFold(r=room,seat=''){
  if(!uid||!roomId||!r||r.game!=='poker')return;
  const round=statsRound(r),rid=statsSafeId(roomId);
  await statsWriteOnce(`statistics/pokerFolds/${rid}/${round}/${uid}`,{
    type:'poker_fold',uid,roomId,round,seat,createdAt:statsNow(),version:'0.20'
  });
}

function nickRef(key=nickKey){return ref(db,'queues/nickReservations/'+key)}
function sideOf(r){
  if(r?.players?.blue?.uid===uid&&r?.players?.blue?.sessionId===sessionId)return 'blue';
  if(r?.players?.red?.uid===uid&&r?.players?.red?.sessionId===sessionId)return 'red';
  return '';
}
function opponentOf(r){
  const s=sideOf(r); return s==='blue'?r?.players?.red:r?.players?.blue;
}
function otherSide(s){return s==='blue'?'red':'blue'}
function scoreOf(r,s){return Number(r?.score?.[s]||0)}


const URL_PARAMS=new URLSearchParams(location.search);
const URL_MODE=URL_PARAMS.get('mode')||'client';
const IS_ADMIN_MODE=URL_MODE==='admin';
const IS_REPORT_MODE=URL_MODE==='report';
const IS_PREVIEW_MODE=URL_PARAMS.get('preview')==='1';
const NO_STATS_MODE=IS_ADMIN_MODE||IS_REPORT_MODE||IS_PREVIEW_MODE;

function applyIntegratedMode(){
  const admin=$('#adminBannerModel');
  if(IS_ADMIN_MODE){
    ['#homeView','#queueView','#gameView','#endModal','#pokerGate'].forEach(sel=>$(sel)?.classList.add('hidden'));
    admin?.classList.remove('hidden');document.body.classList.add('integratedAdminMode');
  }else if(IS_REPORT_MODE){
    ['#homeView','#queueView','#gameView','#endModal','#pokerGate','#adminBannerModel'].forEach(sel=>$(sel)?.classList.add('hidden'));
    document.body.classList.add('integratedReportMode');
  }else{
    admin?.classList.add('hidden');document.body.classList.add('integratedClientMode');
  }
}
function flattenValuesV264(obj,depth=5){
  const out=[];
  function walk(v,d){
    if(!v||typeof v!=='object')return;
    if(v.type||v.game||v.createdAt||v.startedAt){out.push(v);return}
    if(d<=0)return;
    Object.values(v).forEach(x=>walk(x,d-1));
  }
  walk(obj,depth);return out;
}
async function ensureStatsResetV264(){
  if(!IS_REPORT_MODE)return;
  const markerRef=ref(db,'statistics/resetMarkers/v269'),marker=await get(markerRef);
  if(marker.exists())return;
  await remove(ref(db,'statistics'));
  await set(markerRef,{createdAt:Date.now(),version:'2.69'});
}
async function sendGameStatsToParentV264(){
  if(!IS_REPORT_MODE)return;
  const [e,m,a,f]=await Promise.all([get(ref(db,'statistics/entries')),get(ref(db,'statistics/matches')),get(ref(db,'statistics/abandonments')),get(ref(db,'statistics/pokerFolds'))]);
  const entries=flattenValuesV264(e.val()||{}).filter(x=>x?.type==='room_entry').map(x=>({createdAt:Number(x.createdAt)||0}));
  const matches=flattenValuesV264(m.val()||{}).filter(x=>x?.game).map(x=>({game:x.game||'',mode:x.mode||'',status:x.status||'',startedAt:Number(x.startedAt)||0,finishedAt:Number(x.finishedAt)||0}));
  const abandonments=flattenValuesV264(a.val()||{}).filter(x=>x?.type==='abandonment').map(x=>({game:x.game||'',mode:x.mode||'',createdAt:Number(x.createdAt)||0}));
  const folds=flattenValuesV264(f.val()||{}).filter(x=>x?.type==='poker_fold').map(x=>({createdAt:Number(x.createdAt)||0}));
  parent.postMessage({type:'versatil-game-stats-data',data:{entries,matches,abandonments,folds}},location.origin);
}
async function resetGameStatsV264(){
  if(!IS_REPORT_MODE)return;
  await remove(ref(db,'statistics'));await set(ref(db,'statistics/resetMarkers/v269'),{createdAt:Date.now(),version:'2.69',manual:true});await sendGameStatsToParentV264();
}
window.addEventListener('message',async ev=>{
  if(ev.origin!==location.origin||!IS_REPORT_MODE)return;
  if(ev.data?.type==='versatil-game-stats-refresh')await sendGameStatsToParentV264();
  if(ev.data?.type==='versatil-game-stats-reset')await resetGameStatsV264();
});

async function boot(){
  const buttons=['#playTTT','#playC4','#playBattle','#playChess','#playPoker'].map($);
  buttons.forEach(b=>b.disabled=true);
  $('#nick').value='Gerando…';
  try{
    $('#connBadge').textContent='Autenticando…';
    const c=await signInAnonymously(auth); uid=c.user.uid;
    const p=ref(db,'presence/'+uid);
    await set(p,{online:true,updatedAt:serverTimestamp()}); onDisconnect(p).remove();
    await assignFreshAutomaticNick();
    $('#connBadge').textContent='Firebase online';
    buttons.forEach(b=>b.disabled=false);
    await syncBannersFromFirebase();
    if(!IS_REPORT_MODE)showAccessBanner();
    if(!NO_STATS_MODE)statsRecordRoomEntry();
    if(IS_REPORT_MODE){await ensureStatsResetV264();await sendGameStatsToParentV264();}
  }catch(e){
    console.error(e); $('#nick').value='Indisponível'; $('#connBadge').textContent='Falha na conexão';
  }
}
async function releasePreviousNickFromProfile(){
  try{
    const ps=await get(ref(db,'players/'+uid)),pv=ps.val(),previousKey=pv?.nickKey;
    if(previousKey){
      const rs=await get(ref(db,'queues/nickReservations/'+previousKey));
      if(rs.val()?.uid===uid)await remove(ref(db,'queues/nickReservations/'+previousKey));
    }
  }catch{}
}
async function reserveAutomaticNick(candidate){
  const key=candidate.toLowerCase(),r=ref(db,'queues/nickReservations/'+key);
  const tx=await runTransaction(r,current=>{
    if(current===null||current?.uid===uid)return {uid,nick:candidate,updatedAt:Date.now()};
    return;
  });
  if(!tx.committed)return false;
  nick=candidate;nickKey=key;$('#nick').value=nick;onDisconnect(r).remove();
  await set(ref(db,'players/'+uid),{nick,nickKey,lastSeen:serverTimestamp(),sessionId:''});
  return true;
}
async function assignFreshAutomaticNick(){
  await releasePreviousNickFromProfile();
  const previousLocal=localStorage.getItem('versatil_last_shv_nick')||'',tried=new Set();
  for(let i=0;i<999;i++){
    let n;do{n=randomNickNumber()}while(tried.has(n)&&tried.size<999);tried.add(n);
    const candidate=makeNick(n);if(candidate===previousLocal)continue;
    if(await reserveAutomaticNick(candidate)){localStorage.setItem('versatil_last_shv_nick',candidate);return}
  }
  throw new Error('Sem nick disponível');
}

function initialGameState(key,blue,red){
  const base={game:key,status:'active',createdAt:Date.now(),round:1,players:{blue,red},score:{blue:0,red:0},winner:'',rematch:{}};
  if(key==='tictactoe')return {...base,board:Array(9).fill(''),turn:'blue'};
  if(key==='connect4')return {...base,board:Array(42).fill(''),turn:'blue'};
  if(key==='battleship'){
    const blueFleet=makeFleet(),redFleet=makeFleet();
    return {...base,
      ships:{blue:blueFleet,red:redFleet},
      shipTypes:{blue:makeFleetTypes(blueFleet),red:makeFleetTypes(redFleet)},
      shots:{blue:[],red:[]},turn:'blue'
    };
  }
  if(key==='chess')return {...base,board:initialChessBoard(),turn:'blue',lastMove:null};
  if(key==='poker')return buildPokerHand(base);
  return base;
}

function stopAssignmentListener(){if(assignUnsub){assignUnsub();assignUnsub=null}}
function listenAssignment(){
  stopAssignmentListener();
  assignUnsub=onValue(assignmentRef(),snap=>{
    const a=snap.val();
    if(!a||a.sessionId!==sessionId||!a.roomId)return;
    clearTimeout(botTimer);clearSeek();matching=false;enter(a.roomId);
  });
}
async function cleanupInvalid(entries){
  const now=Date.now();
  return (await Promise.all(entries.map(async x=>{
    if(!x?.uid||!x?.sessionId)return null;
    if(now-(Number(x.createdAt)||0)>QUEUE_MAX_AGE_MS){try{await remove(qRef(x.uid))}catch{};return null}
    try{
      const ps=await get(ref(db,'presence/'+x.uid));
      if(!ps.exists()||ps.val()?.online!==true){try{await remove(qRef(x.uid))}catch{};return null}
    }catch{return null}
    return x;
  }))).filter(Boolean);
}

async function startGame(key){
  if(!uid||matching||roomId)return;
  gameKey=key;sessionId=makeSession();matching=true;enteringRoom=false;
  await set(ref(db,'players/'+uid),{nick,nickKey,lastSeen:serverTimestamp(),sessionId});
  try{await remove(assignmentRef())}catch{}
  show($('#queueView'));$('#queueTitle').textContent='Procurando adversário…';$('#queueMsg').textContent=`Entrando na fila de ${GAME_NAMES[key]}.`;
  startQueueCountdown();
  await set(qRef(),{uid,nick,sessionId,createdAt:Date.now(),status:'waiting'});
  onDisconnect(qRef()).remove();onDisconnect(assignmentRef()).remove();
  listenAssignment();seekOpponent();
  botTimer=setTimeout(()=>{if(matching&&!roomId)makeBotOpponent()},BOT_WAIT_MS);
}

async function seekOpponent(){
  if(!matching||roomId||enteringRoom)return;
  const as=await get(assignmentRef()),av=as.val();
  if(av?.sessionId===sessionId&&av?.roomId){matching=false;return enter(av.roomId)}
  const s=await get(ref(db,`queues/${gameKey}`));
  let entries=Object.values(s.val()||{}).filter(x=>x&&x.status==='waiting'&&x.uid&&x.sessionId);
  entries=await cleanupInvalid(entries);
  const me=entries.find(x=>x.uid===uid&&x.sessionId===sessionId);
  if(!me){await set(qRef(),{uid,nick,sessionId,createdAt:Date.now(),status:'waiting'});scheduleSeek(600);return}
  const candidates=entries.filter(x=>x.uid!==uid).sort((a,b)=>(a.createdAt||0)-(b.createdAt||0));
  if(!candidates.length){scheduleSeek();return}
  const o=candidates[0];
  const [os,ps]=await Promise.all([get(qRef(o.uid)),get(ref(db,'presence/'+o.uid))]);
  if(!os.exists()||os.val()?.status!=='waiting'||os.val()?.sessionId!==o.sessionId||ps.val()?.online!==true){scheduleSeek(350);return}
  const pair=[uid,o.uid].sort(); if(uid!==pair[0]){scheduleSeek(350);return}
  const sessionPair=[{uid,sessionId},{uid:o.uid,sessionId:o.sessionId}].sort((a,b)=>a.uid.localeCompare(b.uid));
  const rid=`${gameKey}_${sessionPair.map(x=>x.sessionId).join('__')}`;
  const blue={uid,nick,sessionId,type:'human'},red={uid:o.uid,nick:o.nick,sessionId:o.sessionId,type:'human'};
  const tx=await runTransaction(ref(db,'rooms/'+rid),r=>r||initialGameState(gameKey,blue,red));
  const rv=tx.snapshot.val();
  if(!rv)return scheduleSeek(400);
  await Promise.all([
    set(assignmentRef(uid),{uid,sessionId,roomId:rid,createdAt:Date.now()}),
    set(assignmentRef(o.uid),{uid:o.uid,sessionId:o.sessionId,roomId:rid,createdAt:Date.now()})
  ]);
  await Promise.allSettled([remove(qRef(uid)),remove(qRef(o.uid))]);
  matching=false;enter(rid);
}

async function makeBotOpponent(){
  if(!matching||roomId||enteringRoom)return;
  const as=await get(assignmentRef()),av=as.val();
  if(av?.sessionId===sessionId&&av?.roomId){matching=false;return enter(av.roomId)}
  const s=await get(ref(db,`queues/${gameKey}`));
  let entries=await cleanupInvalid(Object.values(s.val()||{}).filter(x=>x&&x.status==='waiting'));
  if(entries.some(x=>x.uid!==uid)){seekOpponent();botTimer=setTimeout(()=>makeBotOpponent(),2500);return}
  await new Promise(r=>setTimeout(r,1000));
  const botNames=['BOT101','BOT247','BOT388','BOT512','BOT764','BOT903'];
  const rid=`${gameKey}_bot_${sessionId}`;
  const blue={uid,nick,sessionId,type:'human'};
  const red={uid:'bot',nick:botNames[Math.floor(Math.random()*botNames.length)],sessionId:'bot',type:'bot'};
  await set(ref(db,'rooms/'+rid),initialGameState(gameKey,blue,red));
  await set(assignmentRef(),{uid,sessionId,roomId:rid,createdAt:Date.now()});
  try{await remove(qRef())}catch{}
  matching=false;enter(rid);
}

async function enter(rid){
  if(!rid||enteringRoom||roomId===rid)return;
  enteringRoom=true;clearTimeout(botTimer);clearSeek();stopQueueCountdown();startGameBannerRotation();
  const rs=await get(ref(db,'rooms/'+rid)),rv=rs.val();
  if(!rv||!Object.values(rv.players||{}).some(p=>p?.uid===uid&&p?.sessionId===sessionId)){enteringRoom=false;return}
  roomId=rid;gameKey=rv.game;matching=false;show($('#gameView'));$('#gameTitle').innerHTML=`<span class="gameTitleIcon">${GAME_ICONS[gameKey]||'🎮'}</span><span>${GAME_NAMES[gameKey]}</span>`;$('#gameDescription').textContent=GAME_DESCRIPTIONS[gameKey]||'';$('#matchInfo').textContent='';
  statsRecordMatchStart(rv);
  stopAssignmentListener();
  if(roomUnsub)roomUnsub();
  roomUnsub=onValue(ref(db,'rooms/'+rid),s=>{
    if(!s.exists())return;
    lastRoomEventAt=Date.now();
    room=s.val();
    const sr=`${roomId}|${statsRound(room)}`;
    if(sr!==statsRoundSeen)statsRecordMatchStart(room);
    if(room?.winner)statsMarkMatchFinished(room);
    renderGame();maybeBotMove();maybeStartHumanRematch(room);
  },err=>{
    console.warn('Listener da sala interrompido:',err?.message||err);
    lastRoomEventAt=0;
  });
  startRoomWatchdogV270();
  enteringRoom=false;
}

function renderPlayersTwo(){
  const side=sideOf(room),opp=opponentOf(room);
  $('#playersArea').classList.remove('hidden');
  $('#meBox').className='playerBox playerBlue';
  $('#oppBox').className='playerBox playerRed';
  $('#meBox').innerHTML=`<strong>${nick}</strong><small>Você • Azul</small><div class="scoreNumber">${scoreOf(room,side)}</div>`;
  $('#oppBox').innerHTML=`<strong>${opp?.nick||'Adversário'}</strong><small>${opp?.type==='bot'?'Jogador virtual':'Jogador online'} • Vermelho</small><div class="scoreNumber">${scoreOf(room,otherSide(side))}</div>`;
}
function renderGame(){
  if(!room)return;
  if(gameKey==='poker')return renderPoker();
  renderPlayersTwo();
  if(gameKey==='tictactoe')renderTTT();
  if(gameKey==='connect4')renderConnect4();
  if(gameKey==='battleship')renderBattleship();
  if(gameKey==='chess')renderChess();
  renderEndState();
}
function winnerText(){
  const s=sideOf(room);
  if(room.winner==='draw')return 'Empate';
  return room.winner===s?'Você venceu!':'Você perdeu!';
}
function renderEndState(){
  if(!room.winner){clearEndAnimation();$('#endModal').classList.add('hidden');$('#rematchBtn').disabled=false;return}
  if(gameKey==='battleship'){
    $('#endModal').classList.add('hidden');
    return;
  }
  if(endAnimationPending && (gameKey==='tictactoe'||gameKey==='connect4')){
    $('#endModal').classList.add('hidden');
    return;
  }
  const title=winnerText(),opp=opponentOf(room),humanGame=opp?.type!=='bot';
  const myVote=humanGame&&room.rematch?.[uid]?.accepted===true&&room.rematch?.[uid]?.sessionId===sessionId;
  $('#endTitle').textContent=title;$('#endText').textContent=room.winner==='draw'?'A partida terminou empatada.':room.winner===sideOf(room)?'Boa partida.':'O adversário venceu esta rodada.';
  if(myVote){$('#endModal').classList.add('hidden');$('#status').textContent='Aguardando o adversário aceitar jogar de novo…';$('#rematchBtn').disabled=true}
  else{$('#endModal').classList.remove('hidden');$('#rematchBtn').disabled=false}
}
function awardWinner(r,w){
  r.winner=w;
  if(w&&w!=='draw'){r.score=r.score||{blue:0,red:0};r.score[w]=(Number(r.score[w])||0)+1}
}

/* ANIMAÇÕES DE VITÓRIA — v2.89 */
function tttWinningLine(b){
  const lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for(const line of lines){const [a,c,d]=line;if(b[a]&&b[a]===b[c]&&b[a]===b[d])return line}
  return null;
}
function c4WinningLine(b){
  const at=(r,c)=>b[r*7+c];
  for(let r=0;r<6;r++)for(let c=0;c<7;c++){
    const s=at(r,c);if(!s)continue;
    for(const [dr,dc] of [[0,1],[1,0],[1,1],[1,-1]]){
      const line=[r*7+c];let ok=true;
      for(let k=1;k<4;k++){const rr=r+dr*k,cc=c+dc*k;if(rr<0||rr>=6||cc<0||cc>=7||at(rr,cc)!==s){ok=false;break}line.push(rr*7+cc)}
      if(ok)return line;
    }
  }
  return null;
}
function endAnimKeyFor(){return `${roomId}|${gameKey}|${statsRound(room)}|${room?.winner||''}`}
function clearEndAnimation(){if(endAnimationTimer)clearTimeout(endAnimationTimer);endAnimationTimer=null;endAnimationPending=false;endAnimationKey='';}
function animateWinningStrike(boardEl,indices,color,done){
  if(!boardEl||!indices?.length){done?.();return}
  const key=endAnimKeyFor();
  if(endAnimationKey===key)return;
  endAnimationKey=key;endAnimationPending=true;
  const old=boardEl.querySelector('.winStrikeLayer');if(old)old.remove();
  const first=boardEl.querySelector(`[data-cell="${indices[0]}"]`),last=boardEl.querySelector(`[data-cell="${indices[indices.length-1]}"]`);
  if(!first||!last){endAnimationPending=false;done?.();return}
  boardEl.classList.add('winAnimationBoard');
  // Calcula a linha usando as coordenadas internas das próprias células.
  // Isso evita o deslocamento causado por padding/borda/scroll do container.
  const x1=first.offsetLeft+first.offsetWidth/2,y1=first.offsetTop+first.offsetHeight/2;
  const x2=last.offsetLeft+last.offsetWidth/2,y2=last.offsetTop+last.offsetHeight/2;
  const dx=x2-x1,dy=y2-y1,len=Math.hypot(dx,dy),angle=Math.atan2(dy,dx)*180/Math.PI;
  const layer=document.createElement('div');layer.className='winStrikeLayer';
  const line=document.createElement('div');line.className=`winStrikeLine ${color}`;
  line.style.left=x1+'px';line.style.top=y1+'px';line.style.transform=`rotate(${angle}deg)`;line.style.width='0px';
  layer.appendChild(line);boardEl.appendChild(layer);
  requestAnimationFrame(()=>requestAnimationFrame(()=>{line.style.width=len+'px'}));
  endAnimationTimer=setTimeout(()=>{endAnimationPending=false;done?.()},2000);
}

/* JOGO DA VELHA */
function tttWin(b){
  for(const [a,c,d] of [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]])if(b[a]&&b[a]===b[c]&&b[a]===b[d])return b[a];
  return b.every(Boolean)?'draw':'';
}
function renderTTT(){
  const side=sideOf(room),b=room.board||Array(9).fill('');
  $('#status').textContent=room.winner?winnerText():room.turn===side?'Sua vez':'Vez do adversário';
  const el=$('#board');el.className='board ttt';el.innerHTML='';$('#extraGameArea').innerHTML='';
  b.forEach((v,i)=>{
    const bt=document.createElement('button');bt.dataset.cell=String(i);bt.className='cell '+(v==='blue'?'markX':v==='red'?'markO':'');bt.textContent=v==='blue'?'X':v==='red'?'O':'';
    bt.disabled=!!room.winner||room.turn!==side||!!v;bt.onclick=()=>tttMove(i);el.appendChild(bt);
  });
  if(room.winner&&room.winner!=='draw'){
    const line=tttWinningLine(b);
    animateWinningStrike(el,line,room.winner,()=>renderEndState());
  }
}
async function tttMove(i){
  await runTransaction(ref(db,'rooms/'+roomId),r=>{
    const s=r&&sideOf(r);if(!r||r.winner||r.turn!==s||r.board[i])return r;
    r.board[i]=s;const w=tttWin(r.board);if(w)awardWinner(r,w);else r.turn=otherSide(s);r.updatedAt=Date.now();return r;
  });
}
function tttBotPick(b){
  const free=b.map((v,i)=>v?null:i).filter(x=>x!==null);
  for(const i of free){const c=[...b];c[i]='red';if(tttWin(c)==='red')return i}
  for(const i of free){const c=[...b];c[i]='blue';if(tttWin(c)==='blue')return i}
  if(!b[4])return 4;return free[Math.floor(Math.random()*free.length)];
}

/* QUATRO EM LINHA */
function c4Winner(b){
  const at=(r,c)=>b[r*7+c];
  for(let r=0;r<6;r++)for(let c=0;c<7;c++){
    const s=at(r,c);if(!s)continue;
    for(const [dr,dc] of [[0,1],[1,0],[1,1],[1,-1]]){
      let ok=true;for(let k=1;k<4;k++){const rr=r+dr*k,cc=c+dc*k;if(rr<0||rr>=6||cc<0||cc>=7||at(rr,cc)!==s){ok=false;break}}
      if(ok)return s;
    }
  }
  return b.every(Boolean)?'draw':'';
}
function c4Drop(b,col,side){
  for(let r=5;r>=0;r--){const i=r*7+col;if(!b[i]){b[i]=side;return i}}return -1;
}
function renderConnect4(){
  const side=sideOf(room),b=room.board||Array(42).fill('');
  $('#status').textContent=room.winner?winnerText():room.turn===side?'Sua vez — escolha uma coluna':'Vez do adversário';
  const el=$('#board');el.className='board connect4';el.innerHTML='';$('#extraGameArea').innerHTML='';
  for(let col=0;col<7;col++){
    const column=document.createElement('div');column.className='c4Column';
    const full=!!b[col];
    for(let row=0;row<6;row++){
      const i=row*7+col;const cell=document.createElement('button');cell.type='button';cell.dataset.cell=String(i);
      cell.className='c4cell '+(b[i]==='blue'?'c4blue':b[i]==='red'?'c4red':'');
      cell.disabled=!!room.winner||room.turn!==side||full;
      cell.setAttribute('aria-label',`Coluna ${col+1}, linha ${row+1}`);
      cell.onclick=()=>c4Move(col);column.appendChild(cell);
    }
    el.appendChild(column);
  }
  if(room.winner&&room.winner!=='draw'){
    const line=c4WinningLine(b);
    animateWinningStrike(el,line,room.winner,()=>renderEndState());
  }
}
async function c4Move(col){
  await runTransaction(ref(db,'rooms/'+roomId),r=>{
    const s=r&&sideOf(r);if(!r||r.winner||r.turn!==s)return r;
    const b=[...r.board];if(c4Drop(b,col,s)<0)return r;r.board=b;const w=c4Winner(b);if(w)awardWinner(r,w);else r.turn=otherSide(s);r.updatedAt=Date.now();return r;
  });
}
function c4BotColumn(b){
  const valid=[0,1,2,3,4,5,6].filter(c=>!b[c]);
  for(const c of valid){const x=[...b];c4Drop(x,c,'red');if(c4Winner(x)==='red')return c}
  for(const c of valid){const x=[...b];c4Drop(x,c,'blue');if(c4Winner(x)==='blue')return c}
  return valid[Math.floor(Math.random()*valid.length)];
}

/* BATALHA NAVAL */
function makeFleet(){
  // Exatamente 5 embarcações, cada uma ocupando somente 1 casa:
  // 2 caravelas, 2 submarinos e 1 caiaque.
  const cells=[];
  while(cells.length<5){
    const i=Math.floor(Math.random()*64);
    if(!cells.includes(i))cells.push(i);
  }
  return cells.sort((a,b)=>a-b);
}
function makeFleetTypes(fleet){
  const types=['caravela','caravela','submarino','submarino','caiaque'];
  const map={};
  fleet.forEach((cell,i)=>map[cell]=types[i]);
  return map;
}
function fleetName(type){
  return type==='caravela'?'Caravela':type==='submarino'?'Submarino':'Caiaque';
}

function renderBattleshipResult(){
  const side=sideOf(room),won=room.winner===side;
  const extra=$('#extraGameArea');
  let panel=extra.querySelector('.battleResultPanel');
  if(panel)return;
  panel=document.createElement('div');panel.className=`battleResultPanel ${won?'battleWon':'battleLost'}`;
  if(won){
    panel.innerHTML=`<h2>Você venceu!</h2><div class="treasureChest" aria-label="Baú de tesouro abrindo"><div class="chestLid">◆</div><div class="chestBody"><span>🪙</span><span>🪙</span><span>🪙</span></div></div><p>O baú se abriu e revelou moedas de ouro!</p>`;
  }else{
    panel.innerHTML=`<h2>Você perdeu! Ande na prancha!</h2><div class="pirateSword" aria-label="Espada pirata">⚔️</div>`;
  }
  extra.appendChild(panel);
}
let battleAnimatedIncomingV289=new Set();
let battleAnimRoomV289='';
function renderBattleship(){
  const side=sideOf(room),opp=otherSide(side);
  const animRoom=`${roomId}|${statsRound(room)}|${side}`;
  if(animRoom!==battleAnimRoomV289){battleAnimRoomV289=animRoom;battleAnimatedIncomingV289=new Set()}
  const myFleet=Array.isArray(room.ships?.[side])?room.ships[side]:[];
  const myTypes=room.shipTypes?.[side]||makeFleetTypes(myFleet);
  const myIncoming=Array.isArray(room.shots?.[opp])?room.shots[opp]:[];
  const myShots=Array.isArray(room.shots?.[side])?room.shots[side]:[];
  const oppFleet=Array.isArray(room.ships?.[opp])?room.ships[opp]:[];

  $('#status').textContent=room.winner
    ? winnerText()
    : room.turn===side
      ? 'Sua vez — clique em uma posição no mar adversário'
      : 'Vez do adversário';

  $('#board').className='board';
  $('#board').innerHTML='';

  const extra=$('#extraGameArea');
  extra.innerHTML=
    '<div class="battleWrap">'+
      '<div class="battlePanel"><h3>Seu mar — Azul</h3><div id="mySea" class="battleGrid"></div></div>'+
      '<div class="battlePanel"><h3>Mar adversário — Vermelho</h3><div id="enemySea" class="battleGrid"></div><div class="battleLegend">💧 água • vermelho = embarcação atingida</div></div>'+
    '</div>';

  const my=$('#mySea'),enemy=$('#enemySea');

  for(let i=0;i<64;i++){
    const own=document.createElement('button');
    own.type='button';
    const ownWasShot=myIncoming.includes(i);
    const ownIsShip=myFleet.includes(i);
    const type=ownIsShip?(myTypes[i]||'caravela'):'';
    const incomingShipHit=ownWasShot&&ownIsShip;
    const animateIncoming=incomingShipHit&&!battleAnimatedIncomingV289.has(i);
    own.className='battleCell '+
      (ownIsShip?`singleShip ${type} `:'')+
      (ownWasShot&&!ownIsShip?'waterMiss ':'')+
      (animateIncoming?'shipHitRed shipSinking ':'')+
      (incomingShipHit&&!animateIncoming?'shipHitRed ':'');
    if(animateIncoming)battleAnimatedIncomingV289.add(i);
    own.disabled=true;
    if(ownIsShip){
      const img=document.createElement('img');
      img.className='battleBoatImage';
      img.src='barco-pirata.png';
      img.alt=fleetName(type);
      img.title=fleetName(type);
      own.appendChild(img);


    }
    my.appendChild(own);

    const target=document.createElement('button');
    target.type='button';
    const alreadyShot=myShots.includes(i);
    const hit=alreadyShot&&oppFleet.includes(i);
    // Ao acertar o navio adversário, a casa fica somente vermelha.
    target.className='battleCell enemyCell '+
      (alreadyShot&&!hit?'waterMiss ':'')+
      (hit?'enemyShipHit ':'');
    target.setAttribute('aria-label',alreadyShot?'Posição já atacada':'Atacar posição '+(i+1));

    const canShoot=!room.winner && room.turn===side && !alreadyShot;
    target.disabled=!canShoot;

    if(canShoot){
      let fired=false;
      const fire=ev=>{
        if(fired)return;
        fired=true;
        ev.preventDefault();
        ev.stopPropagation();
        battleShot(i);
      };
      target.addEventListener('click',fire,{once:true});
      target.addEventListener('touchend',fire,{once:true});
    }
    enemy.appendChild(target);
  }
  if(room.winner)renderBattleshipResult();
}
async function battleShot(i){
  if(!roomId||!room)return;

  const clickedSide=sideOf(room);
  if(!clickedSide||room.turn!==clickedSide||room.winner)return;

  // Batalha Naval não usa temporizador de jogada.
  // Contra jogador virtual, o tiro humano e a resposta do bot são processados
  // dentro da MESMA transação. Assim a partida nunca fica presa esperando
  // um setTimeout, listener ou mudança intermediária de turno.
  await runTransaction(ref(db,'rooms/'+roomId),r=>{
    if(!r||r.winner)return r;

    const s=sideOf(r);
    if(!s||r.turn!==s)return r;

    r.shots=r.shots||{blue:[],red:[]};
    r.shots.blue=Array.isArray(r.shots.blue)?r.shots.blue:[];
    r.shots.red=Array.isArray(r.shots.red)?r.shots.red:[];

    const shots=[...(r.shots[s]||[])];
    if(shots.includes(i))return r;

    // 1. Registra sempre o tiro do jogador.
    shots.push(i);
    r.shots[s]=shots;

    const opponent=otherSide(s);
    const opponentFleet=Array.isArray(r.ships?.[opponent])?r.ships[opponent]:[];

    // Vitória do jogador: termina aqui.
    if(opponentFleet.length && opponentFleet.every(x=>shots.includes(x))){
      awardWinner(r,s);
      r.updatedAt=Date.now();
      return r;
    }

    const opponentPlayer=r.players?.[opponent];

    // 2. Se o adversário for humano, apenas passa a vez normalmente.
    if(opponentPlayer?.type!=='bot'){
      r.turn=opponent;
      r.updatedAt=Date.now();
      return r;
    }

    // 3. Se for jogador virtual, ele responde imediatamente, sem qualquer timer.
    const botSide=opponent;
    const used=new Set(Array.isArray(r.shots[botSide])?r.shots[botSide]:[]);
    const available=[];
    for(let cell=0;cell<64;cell++){
      if(!used.has(cell))available.push(cell);
    }

    if(available.length){
      const botCell=available[Math.floor(Math.random()*available.length)];
      const botShots=[...(r.shots[botSide]||[])];
      botShots.push(botCell);
      r.shots[botSide]=botShots;

      const humanFleet=Array.isArray(r.ships?.[s])?r.ships[s]:[];
      if(humanFleet.length && humanFleet.every(x=>botShots.includes(x))){
        awardWinner(r,botSide);
        r.updatedAt=Date.now();
        return r;
      }
    }

    // Sempre devolve a vez ao jogador humano.
    r.turn=s;
    r.updatedAt=Date.now();
    return r;
  });
}
function battleBotShot(r){
  const used=new Set(Array.isArray(r.shots?.red)?r.shots.red:[]);
  const available=[];
  for(let i=0;i<64;i++)if(!used.has(i))available.push(i);
  if(!available.length)return null;
  return available[Math.floor(Math.random()*available.length)];
}

/* XADREZ */
const PIECE_GLYPH={bK:'♔',bQ:'♕',bR:'♖',bB:'♗',bN:'♘',bP:'♙',rK:'♚',rQ:'♛',rR:'♜',rB:'♝',rN:'♞',rP:'♟'};
function initialChessBoard(){
  return ['rR','rN','rB','rQ','rK','rB','rN','rR',...Array(8).fill('rP'),...Array(32).fill(''),...Array(8).fill('bP'),'bR','bN','bB','bQ','bK','bB','bN','bR'];
}
function chessColor(p){return p?.[0]==='b'?'blue':p?.[0]==='r'?'red':''}
function rc(i){return [Math.floor(i/8),i%8]} function idx(r,c){return r*8+c}
function pseudoMoves(board,from){
  const p=board[from];if(!p)return[];const color=chessColor(p),type=p[1],[r,c]=rc(from),moves=[];
  const add=(rr,cc,slide=false)=>{
    if(rr<0||rr>=8||cc<0||cc>=8)return false;const t=board[idx(rr,cc)];
    if(!t){moves.push(idx(rr,cc));return true}
    if(chessColor(t)!==color)moves.push(idx(rr,cc));return false;
  };
  if(type==='P'){
    const d=color==='blue'?-1:1,start=color==='blue'?6:1,one=r+d;
    if(one>=0&&one<8&&!board[idx(one,c)]){moves.push(idx(one,c));const two=r+2*d;if(r===start&&!board[idx(two,c)])moves.push(idx(two,c))}
    for(const dc of [-1,1]){const rr=r+d,cc=c+dc;if(rr>=0&&rr<8&&cc>=0&&cc<8&&board[idx(rr,cc)]&&chessColor(board[idx(rr,cc)])!==color)moves.push(idx(rr,cc))}
  }else if(type==='N'){
    for(const [dr,dc] of [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]])add(r+dr,c+dc);
  }else if(type==='K'){
    for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++)if(dr||dc)add(r+dr,c+dc);
  }else{
    const dirs=type==='B'?[[1,1],[1,-1],[-1,1],[-1,-1]]:type==='R'?[[1,0],[-1,0],[0,1],[0,-1]]:[[1,1],[1,-1],[-1,1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];
    for(const [dr,dc] of dirs){let rr=r+dr,cc=c+dc;while(rr>=0&&rr<8&&cc>=0&&cc<8){if(!add(rr,cc,true))break;rr+=dr;cc+=dc}}
  }
  return moves;
}
function isKingAttacked(board,color){
  const kingPiece=color==='blue'?'bK':'rK',king=board.indexOf(kingPiece);if(king<0)return true;
  const enemy=otherSide(color);
  for(let i=0;i<64;i++)if(chessColor(board[i])===enemy&&pseudoMoves(board,i).includes(king))return true;
  return false;
}
function legalChessMoves(board,from){
  const color=chessColor(board[from]);if(!color)return[];
  return pseudoMoves(board,from).filter(to=>{
    const b=[...board],p=b[from];b[to]=p;b[from]='';
    if(p==='bP'&&Math.floor(to/8)===0)b[to]='bQ';if(p==='rP'&&Math.floor(to/8)===7)b[to]='rQ';
    return !isKingAttacked(b,color);
  });
}
function chessGameResult(board,turn){
  const kingBlue=board.includes('bK'),kingRed=board.includes('rK');if(!kingBlue)return'red';if(!kingRed)return'blue';
  let any=false;for(let i=0;i<64;i++)if(chessColor(board[i])===turn&&legalChessMoves(board,i).length){any=true;break}
  if(any)return'';return isKingAttacked(board,turn)?otherSide(turn):'draw';
}
function renderChess(){
  const side=sideOf(room),b=room.board||initialChessBoard();
  $('#status').textContent=room.winner
    ? winnerText()
    : room.turn===side
      ? (chessSelected===null?'Sua vez — selecione uma peça':'Escolha uma das posições destacadas')
      : 'Vez do adversário';

  $('#extraGameArea').innerHTML='';
  const el=$('#board');
  el.className='board chess';
  el.innerHTML='';

  const legal=chessSelected===null?[]:legalChessMoves(b,chessSelected);

  for(let i=0;i<64;i++){
    const piece=b[i],bt=document.createElement('button'),[r,c]=rc(i);
    const isLegal=legal.includes(i);
    const isCapture=isLegal && !!piece && chessColor(piece)!==side;

    bt.type='button';
    bt.dataset.square=String(i);
    bt.className=
      'chessCell '+
      (((r+c)%2)?'dark ':'')+
      (chessColor(piece)==='blue'?'chessBlue ':chessColor(piece)==='red'?'chessRed ':'')+
      (chessSelected===i?'selectedSquare ':'')+
      (isLegal&&!isCapture?'legalTarget ':'')+
      (isCapture?'legalCapture ':'');
    bt.textContent=PIECE_GLYPH[piece]||'';
    bt.disabled=!!room.winner||room.turn!==side;
    bt.onclick=()=>chessClick(i);
    el.appendChild(bt);
  }
}
async function animateChessPiece(from,to,piece){
  const boardEl=$('#board');
  const fromEl=boardEl?.querySelector(`[data-square="${from}"]`);
  const toEl=boardEl?.querySelector(`[data-square="${to}"]`);
  if(!fromEl||!toEl||!piece)return;

  const a=fromEl.getBoundingClientRect(),b=toEl.getBoundingClientRect();
  const flyer=document.createElement('div');
  flyer.className='chessFlyingPiece '+(chessColor(piece)==='blue'?'blue':'red');
  flyer.textContent=PIECE_GLYPH[piece]||'';
  flyer.style.left=a.left+'px';
  flyer.style.top=a.top+'px';
  flyer.style.width=a.width+'px';
  flyer.style.height=a.height+'px';

  // Esconde visualmente a peça original durante o deslocamento.
  const oldColor=fromEl.style.color;
  fromEl.style.color='transparent';

  document.body.appendChild(flyer);
  await new Promise(requestAnimationFrame);
  flyer.style.transform=`translate(${b.left-a.left}px,${b.top-a.top}px)`;
  await new Promise(resolve=>setTimeout(resolve,360));
  flyer.remove();
  fromEl.style.color=oldColor;
}

async function chessClick(i){
  const side=sideOf(room),b=room.board;
  if(room.turn!==side)return;

  if(chessSelected===null){
    if(chessColor(b[i])===side){
      chessSelected=i;
      renderChess();
    }
    return;
  }

  const from=chessSelected;
  const moves=legalChessMoves(b,from);

  if(!moves.includes(i)){
    if(chessColor(b[i])===side){
      chessSelected=i;
      renderChess();
    }else{
      chessSelected=null;
      renderChess();
    }
    return;
  }

  const movingPiece=b[from];
  chessSelected=null;

  // Primeiro anima localmente, depois confirma a jogada compartilhada no Firebase.
  await animateChessPiece(from,i,movingPiece);

  await runTransaction(ref(db,'rooms/'+roomId),r=>{
    const s=r&&sideOf(r);
    if(!r||r.winner||r.turn!==s)return r;

    const legal=legalChessMoves(r.board,from);
    if(!legal.includes(i))return r;

    const p=r.board[from];
    r.board[i]=p;
    r.board[from]='';

    if(p==='bP'&&Math.floor(i/8)===0)r.board[i]='bQ';
    if(p==='rP'&&Math.floor(i/8)===7)r.board[i]='rQ';

    r.turn=otherSide(s);
    const result=chessGameResult(r.board,r.turn);
    if(result)awardWinner(r,result);
    r.updatedAt=Date.now();
    return r;
  });
}
function chessBotMove(r){
  const moves=[];for(let i=0;i<64;i++)if(chessColor(r.board[i])==='red')for(const to of legalChessMoves(r.board,i))moves.push([i,to]);
  return moves[Math.floor(Math.random()*moves.length)];
}

/* POKER TEXAS HOLD'EM RECREATIVO */
const SUITS=['♠','♥','♦','♣'],RANKS=['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
function makeDeck(){const d=[];for(const s of SUITS)for(const r of RANKS)d.push(r+s);for(let i=d.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[d[i],d[j]]=[d[j],d[i]]}return d}
function buildPokerHand(base){
  const players={
    blue:base.players.blue,
    red:base.players.red,
    bot2:{uid:'bot2',nick:'BOT618',sessionId:'bot2',type:'bot'},
    bot3:{uid:'bot3',nick:'BOT842',sessionId:'bot3',type:'bot'}
  };
  const d=makeDeck(),holes={};
  for(const s of Object.keys(players))holes[s]=[d.pop(),d.pop()];
  const community=[d.pop(),d.pop(),d.pop(),d.pop(),d.pop()];
  const chips={blue:1000,red:1000,bot2:1000,bot3:1000};
  const contributions={blue:10,red:10,bot2:10,bot3:10};
  Object.keys(chips).forEach(s=>chips[s]-=10);
  return {...base,
    players,
    score:{blue:0,red:0,bot2:0,bot3:0},
    chips,
    pot:40,
    stage:0,
    holes,
    community,
    currentBet:10,
    minRaise:10,
    contributions,
    folded:{},
    lastAction:'Blinds fictícios de 10 fichas por jogador.',
    winner:'',
    winnerSeats:[],
    rematch:{},
    status:'active'
  };
}

function cardObj(c){const suit=c.slice(-1),rank=c.slice(0,-1),v=RANKS.indexOf(rank)+2;return{c,suit,rank,v}}
function combos5(arr){const out=[];for(let a=0;a<3;a++)for(let b=a+1;b<4;b++)for(let c=b+1;c<5;c++)for(let d=c+1;d<6;d++)for(let e=d+1;e<7;e++)out.push([arr[a],arr[b],arr[c],arr[d],arr[e]]);return out}
function eval5(cards){
  const o=cards.map(cardObj),vals=o.map(x=>x.v).sort((a,b)=>b-a),counts={};vals.forEach(v=>counts[v]=(counts[v]||0)+1);
  const flush=o.every(x=>x.suit===o[0].suit),uniq=[...new Set(vals)],straightHigh=uniq.includes(14)&&[5,4,3,2].every(v=>uniq.includes(v))?5:uniq.find(v=>[v-1,v-2,v-3,v-4].every(x=>uniq.includes(x)))||0;
  const groups=Object.entries(counts).map(([v,n])=>[Number(v),n]).sort((a,b)=>b[1]-a[1]||b[0]-a[0]);
  if(flush&&straightHigh)return[8,straightHigh];
  if(groups[0][1]===4)return[7,groups[0][0],groups[1][0]];
  if(groups[0][1]===3&&groups[1]?.[1]===2)return[6,groups[0][0],groups[1][0]];
  if(flush)return[5,...vals];
  if(straightHigh)return[4,straightHigh];
  if(groups[0][1]===3)return[3,groups[0][0],...groups.slice(1).map(x=>x[0]).sort((a,b)=>b-a)];
  if(groups[0][1]===2&&groups[1]?.[1]===2){const ps=[groups[0][0],groups[1][0]].sort((a,b)=>b-a);return[2,...ps,groups.find(x=>x[1]===1)[0]]}
  if(groups[0][1]===2)return[1,groups[0][0],...groups.slice(1).map(x=>x[0]).sort((a,b)=>b-a)];
  return[0,...vals];
}
function cmpRank(a,b){for(let i=0;i<Math.max(a.length,b.length);i++){const x=a[i]||0,y=b[i]||0;if(x!==y)return x-y}return 0}
function pokerHandInfo(rank){
  const info={
    8:['Straight Flush','Sequência do mesmo naipe.'],
    7:['Quadra','Quatro cartas do mesmo valor.'],
    6:['Full House','Uma trinca combinada com um par.'],
    5:['Flush','Cinco cartas do mesmo naipe.'],
    4:['Straight','Cinco cartas em sequência.'],
    3:['Trinca','Três cartas do mesmo valor.'],
    2:['Dois Pares','Dois pares de valores diferentes.'],
    1:['Um Par','Duas cartas do mesmo valor.'],
    0:['Carta Alta','A carta de maior valor da mão.']
  };
  return info[Number(rank?.[0])]||['Mão de Poker','Melhor combinação de cinco cartas.'];
}
function pokerWinnerHandDescription(room,winnerSeats){
  const seats=(winnerSeats||[]).filter(s=>room?.holes?.[s]);
  if(!seats.length)return ['Vitória por desistência','A mão foi encerrada porque os demais jogadores desistiram.'];
  const ranked=seats.map(s=>best7([...(room.holes[s]||[]),...(room.community||[])]));
  return pokerHandInfo(ranked[0]);
}
function best7(cards){return combos5(cards).map(eval5).sort((a,b)=>cmpRank(b,a))[0]}

/* v2.89 — probabilidades do Poker: somente as cartas do usuário */
const pokerProbCacheV287=new Map();
const pokerProbLabelsV287={8:'Straight Flush',7:'Quadra',6:'Full House',5:'Flush',4:'Straight',3:'Trinca',2:'Dois Pares',1:'Um Par',0:'Carta Alta'};
function pokerProbEstimateV287(hole,community){
  if(!hole||hole.length<2||!community||community.length<3)return [];
  const known=[...hole,...community],key=known.join('|');
  if(pokerProbCacheV287.has(key))return pokerProbCacheV287.get(key);
  const deck=makeDeck().filter(c=>!known.includes(c));
  const need=5-community.length,samples=10000,counts=Array(9).fill(0);
  if(need<=0){counts[best7([...hole,...community])[0]]=1}
  else for(let n=0;n<samples;n++){
    const pool=deck.slice(),future=[];
    for(let k=0;k<need;k++){const j=Math.floor(Math.random()*pool.length);future.push(pool.splice(j,1)[0])}
    counts[best7([...hole,...community,...future])[0]]++;
  }
  const total=need<=0?1:samples;
  const result=counts.map((v,i)=>({name:pokerProbLabelsV287[i],pct:v*100/total,rank:i}))
    .filter(x=>x.pct>0).sort((a,b)=>b.pct-a.pct||b.rank-a.rank).slice(0,3);
  pokerProbCacheV287.set(key,result);
  if(pokerProbCacheV287.size>30)pokerProbCacheV287.delete(pokerProbCacheV287.keys().next().value);
  return result;
}
function pokerProbabilityHtmlV287(room,side){
  const hole=room?.holes?.[side]||[];
  const visible=room?.stage===1?3:room?.stage===2?4:room?.stage>=3?5:0;
  if(hole.length<2||visible<3)return '';
  const community=(room.community||[]).slice(0,visible);
  const rows=pokerProbEstimateV287(hole,community);
  return `<div class="pokerProbPanel"><div class="pokerProbTitle">Suas probabilidades</div>${rows.map(x=>`<div class="pokerProbRow"><span><b>${x.name}</b></span><strong>${x.pct.toFixed(1)}%</strong></div>`).join('')}<small>Calculadas somente para suas duas cartas + cartas comunitárias abertas.</small></div>`;
}
function pokerResolve(r){
  const active=Object.keys(r.players).filter(s=>!r.folded?.[s]);
  if(active.length===1){
    const wins=[active[0]];
    r.winnerSeats=wins;r.winner=wins[0];
    r.chips[wins[0]]=(r.chips[wins[0]]||0)+(r.pot||0);
    r.score[wins[0]]=(r.score[wins[0]]||0)+1;
    r.pot=0;
    return;
  }
  const ranked=active.map(s=>[s,best7([...(r.holes[s]||[]),...r.community])]);
  ranked.sort((a,b)=>cmpRank(b[1],a[1]));
  const best=ranked[0][1],wins=ranked.filter(x=>cmpRank(x[1],best)===0).map(x=>x[0]);
  r.winnerSeats=wins;r.winner=wins.length===1?wins[0]:'draw';
  const share=Math.floor((r.pot||0)/wins.length);
  wins.forEach(s=>{r.chips[s]=(r.chips[s]||0)+share;r.score[s]=(r.score[s]||0)+1});
  r.pot=0;
}
function cardHtml(c,hidden=false){
  if(hidden)return'<div class="playingCard back">◆</div>';const red=c.includes('♥')||c.includes('♦');return`<div class="playingCard ${red?'redSuit':''}">${c}</div>`;
}
function renderPoker(){
  $('#playersArea').classList.add('hidden');
  $('#board').className='board';
  $('#board').innerHTML='';

  const side=sideOf(room);
  const seats=Object.keys(room.players||{});
  const extra=$('#extraGameArea');

  const others=seats.filter(s=>s!==side);
  const positions=[
    {seat:others[0],pos:'top'},
    {seat:others[1],pos:'left'},
    {seat:others[2],pos:'right'},
    {seat:side,pos:'bottom'}
  ].filter(x=>x.seat);

  const visibleCount=room.stage===0?0:room.stage===1?3:room.stage===2?4:5;
  const community=(room.community||[]).map((c,i)=>cardHtml(c,i>=visibleCount)).join('');

  let seatHtml='';
  for(const {seat,pos} of positions){
    const p=room.players[seat];
    const you=p.uid===uid&&p.sessionId===sessionId;
    const folded=!!room.folded?.[seat];
    const hole=room.holes?.[seat]||[];
    const showHole=you||!!room.winner;
    const holeHtml=showHole
      ? hole.map(c=>{
          const red=c.includes('♥')||c.includes('♦');
          return `<span class="miniCard face ${red?'redSuit':''}">${c}</span>`;
        }).join('')
      : '<span class="miniCard">◆</span><span class="miniCard">◆</span>';

    seatHtml+=`
      <div class="pokerSeatPos ${pos} ${you?'you':''}">
        <strong>${p.nick}</strong>
        <small>${you?'Você':p.type==='bot'?'Jogador virtual':'Jogador online'}${folded?' • desistiu':''}</small>
        <div class="scoreNumber">${Number(room.score?.[seat]||0)}</div>
        <div class="chips">Fichas fictícias: ${Number(room.chips?.[seat]||0)}</div>
        <div class="pokerSeatCards">${holeHtml}</div>
      </div>`;
  }

  let result='';
  let pokerResultPanel='';
  if(room.winner){
    const win=room.winnerSeats||[];
    const won=win.includes(side);
    result=won?'Você venceu a mão!':'Mão encerrada.';
    const winnerNames=win.map(s=>room.players?.[s]?.nick||s).join(', ');
    const handInfo=pokerWinnerHandDescription(room,win);
    pokerResultPanel=`
      <div class="pokerResultPanel">
        <strong>${won?'Você venceu!':'Resultado da mão'}</strong>
        <span>${winnerNames?`Vencedor${win.length>1?'es':''}: ${winnerNames}`:''}</span>
        <small class="pokerHandResult"><b>${handInfo[0]}:</b> ${handInfo[1]}</small>
        <div class="pokerResultActions">
          <button id="pokerRematchInline">Jogar de novo</button>
          <button id="pokerBackInline" class="secondary">Voltar à Sala de Jogos</button>
        </div>
      </div>`;
  }

  const actionLabel=room.stage===0?'ABRIR FLOP':
                    room.stage===1?'ABRIR TURN':
                    room.stage===2?'ABRIR RIVER':
                    room.stage===3?'MOSTRAR RESULTADO':'Mão encerrada';

  const myContribution=Number(room.contributions?.[side]||0);
  const currentBet=Number(room.currentBet||0);
  const toCall=Math.max(0,currentBet-myContribution);
  const myChips=Number(room.chips?.[side]||0);
  const minRaise=Math.max(10,Number(room.minRaise||10));
  const controlsDisabled=!!room.winner||!!room.folded?.[side];

  extra.innerHTML=`
    <div class="pokerArena">
      ${seatHtml}
      <div class="pokerOval">
        <div class="pokerCenter">
          <strong>Texas Hold’em • play money</strong>
          <div class="cards">${community}</div>
          <div class="pokerPot">Pot fictício: <b>${Number(room.pot||0)}</b></div>
        </div>
        ${pokerProbabilityHtmlV287(room,side)}
      </div>
    </div>

    <div class="pokerGameControls">
      <button id="pokerNext" class="pokerStageBtn">${actionLabel}</button>

      <div class="pokerBetPanel">
        <div class="pokerBetInfo">
          <span>Aposta atual: <b>${currentBet}</b></span>
          <span>Para pagar: <b>${toCall}</b></span>
          <span>Suas fichas: <b>${myChips}</b></span>
        </div>
        <div class="pokerBetControls">
          <button id="pokerCheckCall">${toCall>0?'Pagar para ver':'Mesa / Check'}</button>
          <div class="raiseGroup">
            <input id="pokerRaiseValue" type="number" min="${minRaise}" step="10" value="${minRaise}" aria-label="Valor do aumento">
            <button id="pokerRaise">Aumentar</button>
          </div>
          <button id="pokerAllIn">All in</button>
          <button id="pokerFold" class="secondary">Desistir</button>
        </div>
        <div class="pokerActionMsg">${room.lastAction||''}</div>
        <div class="playMoneyNote">Somente fichas fictícias • sem dinheiro real, depósitos, retiradas ou prêmios.</div>
      </div>
      ${pokerResultPanel}
    </div>`;

  $('#status').textContent=room.winner?result:'Mesa recreativa em andamento';

  const next=$('#pokerNext');
  if(next){
    next.disabled=!!room.winner;
    next.onclick=pokerNextStage;
  }

  const cc=$('#pokerCheckCall'),raise=$('#pokerRaise'),allin=$('#pokerAllIn'),fold=$('#pokerFold');
  if(cc){cc.disabled=controlsDisabled;cc.onclick=()=>pokerBetAction('call')}
  if(raise){raise.disabled=controlsDisabled;raise.onclick=()=>pokerBetAction('raise')}
  if(allin){allin.disabled=controlsDisabled||myChips<=0;allin.onclick=()=>pokerBetAction('allin')}
  if(fold){fold.disabled=controlsDisabled;fold.onclick=()=>pokerBetAction('fold')}

  const pokerRematchInline=$('#pokerRematchInline');
  const pokerBackInline=$('#pokerBackInline');
  if(pokerRematchInline)pokerRematchInline.onclick=rematch;
  if(pokerBackInline)pokerBackInline.onclick=back;

  if(room.winner)renderPokerEnd();
  else $('#endModal').classList.add('hidden');
}
async function pokerBetAction(action){
  const statsFoldRequested=action==='fold';
  if(!roomId||!room||room.winner)return;
  const side=sideOf(room);
  if(!side||room.folded?.[side])return;

  const rawRaise=Number($('#pokerRaiseValue')?.value||0);

  await runTransaction(ref(db,'rooms/'+roomId),r=>{
    if(!r||r.winner||r.folded?.[side])return r;

    r.chips=r.chips||{};
    r.contributions=r.contributions||{};
    r.folded=r.folded||{};
    r.currentBet=Number(r.currentBet||0);
    r.minRaise=Math.max(10,Number(r.minRaise||10));

    const chips=Number(r.chips[side]||0);
    const contrib=Number(r.contributions[side]||0);
    const toCall=Math.max(0,r.currentBet-contrib);

    if(action==='fold'){
      r.folded[side]=true;
      r.lastAction=`${r.players[side]?.nick||'Jogador'} desistiu da mão.`;
    }else if(action==='call'){
      const pay=Math.min(chips,toCall);
      r.chips[side]=chips-pay;
      r.contributions[side]=contrib+pay;
      r.pot=Number(r.pot||0)+pay;
      r.lastAction=toCall>0
        ?`${r.players[side]?.nick||'Jogador'} pagou ${pay} fichas fictícias para ver.`
        :`${r.players[side]?.nick||'Jogador'} deu check.`;
    }else if(action==='raise'){
      const raiseBy=Math.max(r.minRaise,Math.floor(rawRaise/10)*10||r.minRaise);
      const target=r.currentBet+raiseBy;
      const needed=Math.max(0,target-contrib);
      const pay=Math.min(chips,needed);
      if(pay<=toCall)return r;
      r.chips[side]=chips-pay;
      r.contributions[side]=contrib+pay;
      r.pot=Number(r.pot||0)+pay;
      r.currentBet=Math.max(r.currentBet,r.contributions[side]);
      r.minRaise=raiseBy;
      r.lastAction=`${r.players[side]?.nick||'Jogador'} aumentou para ${r.currentBet} fichas fictícias.`;
    }else if(action==='allin'){
      const pay=chips;
      r.chips[side]=0;
      r.contributions[side]=contrib+pay;
      r.pot=Number(r.pot||0)+pay;
      if(r.contributions[side]>r.currentBet){
        r.minRaise=Math.max(r.minRaise,r.contributions[side]-r.currentBet);
        r.currentBet=r.contributions[side];
      }
      r.lastAction=`${r.players[side]?.nick||'Jogador'} foi all in com ${pay} fichas fictícias.`;
    }

    const active=Object.keys(r.players||{}).filter(s=>!r.folded?.[s]);
    if(active.length===1)pokerResolve(r);

    r.updatedAt=Date.now();
    return r;
  });
  if(statsFoldRequested)statsRecordPokerFold(room,side);

}

async function pokerNextStage(){
  await runTransaction(ref(db,'rooms/'+roomId),r=>{
    if(!r||r.winner)return r;
    r.stage=(r.stage||0)+1;
    if(r.stage>=4){
      pokerResolve(r);
    }else{
      // Nova rodada de apostas: zera a aposta da rua, preservando o pot.
      r.currentBet=0;
      r.minRaise=10;
      r.contributions={};
      Object.keys(r.players||{}).forEach(s=>r.contributions[s]=0);
      r.lastAction=r.stage===1?'Flop aberto.':
                   r.stage===2?'Turn aberto.':
                   r.stage===3?'River aberto.':'';
    }
    r.updatedAt=Date.now();
    return r;
  });
}
function renderPokerEnd(){
  const side=sideOf(room),wins=room.winnerSeats||[],won=wins.includes(side);
  // v2.71: no Poker o resultado fica dentro da própria mesa, nunca em modal sobre as cartas.
  $('#endModal').classList.add('hidden');

  const humans=Object.values(room.players||{}).filter(p=>p?.type==='human');
  const myVote=room.rematch?.[uid]?.accepted===true&&room.rematch?.[uid]?.sessionId===sessionId;
  const inlineBtn=$('#pokerRematchInline');

  if(humans.length>1&&myVote){
    $('#status').textContent='Aguardando o outro jogador aceitar jogar de novo…';
    if(inlineBtn)inlineBtn.disabled=true;
  }else{
    $('#status').textContent=won?'Você venceu!':'Resultado da mão';
    if(inlineBtn)inlineBtn.disabled=false;
  }
}
/* BOT */
let botBusy=false;
async function maybeBotMove(){
  // A Batalha Naval possui fluxo próprio e atômico: não usa timer do bot.
  if(gameKey==='battleship')return;
  if(botBusy||!room||room.winner||gameKey==='poker')return;
  const red=room.players?.red;if(red?.type!=='bot'||room.turn!=='red')return;
  botBusy=true;
  botBusySince=Date.now();
  const botDelay=gameKey==='battleship'?0:800;
  setTimeout(async()=>{
    try{
      if(gameKey==='tictactoe'){
        await runTransaction(ref(db,'rooms/'+roomId),r=>{if(!r||r.winner||r.turn!=='red')return r;const i=tttBotPick(r.board);if(i==null)return r;r.board[i]='red';const w=tttWin(r.board);if(w)awardWinner(r,w);else r.turn='blue';return r});
      }else if(gameKey==='connect4'){
        await runTransaction(ref(db,'rooms/'+roomId),r=>{if(!r||r.winner||r.turn!=='red')return r;const c=c4BotColumn(r.board);const b=[...r.board];c4Drop(b,c,'red');r.board=b;const w=c4Winner(b);if(w)awardWinner(r,w);else r.turn='blue';return r});
      }else if(gameKey==='battleship'){
        await runTransaction(ref(db,'rooms/'+roomId),r=>{if(!r||r.winner||r.turn!=='red')return r;const i=battleBotShot(r);if(i===null){r.turn='blue';return r}const shots=[...(r.shots.red||[])];if(!shots.includes(i))shots.push(i);r.shots.red=shots;if((r.ships.blue||[]).every(x=>shots.includes(x)))awardWinner(r,'red');else r.turn='blue';r.updatedAt=Date.now();return r});
      }else if(gameKey==='chess'){
        await runTransaction(ref(db,'rooms/'+roomId),r=>{if(!r||r.winner||r.turn!=='red')return r;const mv=chessBotMove(r);if(!mv){const res=chessGameResult(r.board,'red');if(res)awardWinner(r,res);return r}const[from,to]=mv,p=r.board[from];r.board[to]=p;r.board[from]='';if(p==='rP'&&Math.floor(to/8)===7)r.board[to]='rQ';r.turn='blue';const res=chessGameResult(r.board,'blue');if(res)awardWinner(r,res);return r});
      }
    }catch(e){console.warn('Jogada do jogador virtual:',e?.message||e)}finally{botBusy=false;botBusySince=0}
  },botDelay);
}

/* REVANCHE */
async function maybeStartHumanRematch(r){
  if(!roomId||!r?.winner||gameKey==='poker'&&!(r.winnerSeats||[]).length)return;
  const humans=Object.values(r.players||{}).filter(p=>p?.type==='human');
  if(humans.length<2)return;
  const votes=r.rematch||{},ready=humans.every(p=>votes[p.uid]?.accepted===true&&votes[p.uid]?.sessionId===p.sessionId);
  if(!ready)return;
  await runTransaction(ref(db,'rooms/'+roomId),current=>{
    if(!current?.winner)return current;const hs=Object.values(current.players||{}).filter(p=>p?.type==='human'),v=current.rematch||{};
    if(!hs.every(p=>v[p.uid]?.accepted===true&&v[p.uid]?.sessionId===p.sessionId))return current;
    return resetForRematch(current);
  });
}
function resetForRematch(r){
  const keepScore=r.score,keepPlayers=r.players,keepChips=r.chips;
  if(r.game==='tictactoe')return {...r,round:statsRound(r)+1,board:Array(9).fill(''),turn:'blue',winner:'',rematch:{},score:keepScore,updatedAt:Date.now()};
  if(r.game==='connect4')return {...r,round:statsRound(r)+1,board:Array(42).fill(''),turn:'blue',winner:'',rematch:{},score:keepScore,updatedAt:Date.now()};
  if(r.game==='battleship'){
    const blueFleet=makeFleet(),redFleet=makeFleet();
    return {...r,round:statsRound(r)+1,
      ships:{blue:blueFleet,red:redFleet},
      shipTypes:{blue:makeFleetTypes(blueFleet),red:makeFleetTypes(redFleet)},
      shots:{blue:[],red:[]},turn:'blue',winner:'',rematch:{},score:keepScore,updatedAt:Date.now()
    };
  }
  if(r.game==='chess')return {...r,round:statsRound(r)+1,board:initialChessBoard(),turn:'blue',winner:'',rematch:{},score:keepScore,lastMove:null,updatedAt:Date.now()};
  if(r.game==='poker'){
    const base={...r,round:statsRound(r)+1,players:keepPlayers,score:keepScore,winner:'',winnerSeats:[],rematch:{}};
    const d=makeDeck(),holes={};
    Object.keys(keepPlayers).forEach(s=>holes[s]=[d.pop(),d.pop()]);

    const chips={...keepChips};
    Object.keys(chips).forEach(s=>{
      if(Number(chips[s]||0)<10)chips[s]=1000;
    });

    const contributions={},folded={};
    let pot=0;
    Object.keys(chips).forEach(s=>{
      const blind=Math.min(10,Number(chips[s]||0));
      chips[s]-=blind;
      contributions[s]=blind;
      folded[s]=false;
      pot+=blind;
    });

    return {...base,
      holes,
      community:[d.pop(),d.pop(),d.pop(),d.pop(),d.pop()],
      stage:0,
      pot,
      chips,
      currentBet:10,
      minRaise:10,
      contributions,
      folded,
      lastAction:'Nova mão iniciada. Blinds fictícios de 10 fichas por jogador.',
      updatedAt:Date.now()
    };
  }
  return r;
}
async function rematch(){
  if(!roomId||!room?.winner)return;
  $('#rematchBtn').disabled=true;$('#endModal').classList.add('hidden');
  const humans=Object.values(room.players||{}).filter(p=>p?.type==='human');
  if(humans.length<=1){await set(ref(db,'rooms/'+roomId),resetForRematch(room));return}
  await set(ref(db,'rooms/'+roomId+'/rematch/'+uid),{sessionId,accepted:true,acceptedAt:Date.now()});
  $('#status').textContent='Aguardando o adversário aceitar jogar de novo…';
}
async function back(){
  clearTimeout(botTimer);clearSeek();stopQueueCountdown();stopGameBannerRotation();stopRoomWatchdogV270();matching=false;enteringRoom=false;chessSelected=null;botBusy=false;botBusySince=0;
  if(roomId&&room&&!room.winner)await statsRecordAbandonment(room,'leave');
  await statsDisarmAbandonment();
  try{const q=await get(qRef());if(q.exists()&&q.val()?.sessionId===sessionId)await remove(qRef())}catch{}
  try{const a=await get(assignmentRef());if(a.exists()&&a.val()?.sessionId===sessionId)await remove(assignmentRef())}catch{}
  stopAssignmentListener();if(roomUnsub){roomUnsub();roomUnsub=null}
  roomId=null;room=null;sessionId='';gameKey='';statsRoundSeen='';$('#endModal').classList.add('hidden');show($('#homeView'));
}

/* +18 POKER */
function parseBirthDate(value){
  const m=String(value||'').match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if(!m)return null;
  const d=Number(m[1]),mo=Number(m[2]),y=Number(m[3]);
  if(y<1900||y>new Date().getFullYear())return null;
  const dt=new Date(y,mo-1,d,12,0,0);
  if(dt.getFullYear()!==y||dt.getMonth()!==mo-1||dt.getDate()!==d)return null;
  return dt;
}
function age18OrMore(dateString){
  const dob=parseBirthDate(dateString),today=new Date();
  if(!dob||dob>today)return false;
  let age=today.getFullYear()-dob.getFullYear(),m=today.getMonth()-dob.getMonth();
  if(m<0||(m===0&&today.getDate()<dob.getDate()))age--;
  return age>=18;
}
function openPokerGate(){
  pokerAgeApproved=false;$('#pokerAgree').checked=false;$('#birthDate').value='';$('#ageMsg').textContent='';$('#ageMsg').className='ageMsg';$('#pokerGate').classList.remove('hidden');
}
function confirmPokerAccess(){
  const agree=$('#pokerAgree').checked,birth=$('#birthDate').value;
  if(!agree){$('#ageMsg').textContent='É necessário confirmar: Li e me declaro ciente!';$('#ageMsg').className='ageMsg error';return}
  if(!age18OrMore(birth)){$('#ageMsg').textContent='Acesso permitido somente para pessoas com 18 anos completos ou mais.';$('#ageMsg').className='ageMsg error';return}
  pokerAgeApproved=true;$('#ageMsg').textContent='Maioridade confirmada para este acesso.';$('#ageMsg').className='ageMsg ok';
  // A data de nascimento é usada apenas nesta validação local e não é gravada no Firebase.
  setTimeout(()=>{$('#pokerGate').classList.add('hidden');startGame('poker')},250);
}

/* EVENTOS */
const birthInput=$('#birthDate');
birthInput.addEventListener('input',()=>{
  let d=birthInput.value.replace(/\D/g,'').slice(0,8);
  if(d.length>4)d=d.slice(0,2)+'/'+d.slice(2,4)+'/'+d.slice(4);
  else if(d.length>2)d=d.slice(0,2)+'/'+d.slice(2);
  birthInput.value=d;
});
birthInput.addEventListener('keydown',e=>{
  // maxlength + formatter impedem que o ano ultrapasse quatro dígitos.
  if(/\d/.test(e.key)&&birthInput.value.replace(/\D/g,'').length>=8&&
     !['Backspace','Delete','ArrowLeft','ArrowRight','Tab'].includes(e.key))e.preventDefault();
});

applyIntegratedMode();
renderBannerAdmin();
if($('#toggleAdminBanners'))$('#toggleAdminBanners').style.display='none';
$('#playTTT').onclick=()=>startGame('tictactoe');
$('#playC4').onclick=()=>startGame('connect4');
$('#playBattle').onclick=()=>startGame('battleship');
$('#playChess').onclick=()=>startGame('chess');
$('#playPoker').onclick=openPokerGate;
$('#enterPoker').onclick=confirmPokerAccess;
$('#cancelPoker').onclick=()=>$('#pokerGate').classList.add('hidden');
$('#cancelQueue').onclick=back;$('#leaveGame').onclick=back;$('#backBtn').onclick=back;$('#rematchBtn').onclick=rematch;

boot();