const ADMIN_EMAILS=['anibal@starlis.com.br','versatil@starlis.com.br'];
const APP_NAME='APP SERVIÇOS VERSÁTIL';
const APP_TIMEZONE='America/Cuiaba';
const CURRENT_APP_VERSION='1.52';
const CENTRAL_DB_PROP='VERSATIL_CENTRAL_DB_ID';
const LOGO_URL='https://anibaltomaz.github.io/app-servicos-versatil/logo-versatil.jpg';

function doGet(e){
  try{
    const action=String(e?.parameter?.action||''),callback=String(e?.parameter?.callback||'');

    if(action==='bridgePublic'){
      const bridgeAction=String(e?.parameter?.bridgeAction||'bootstrapPublic');
      const requestId=String(e?.parameter?.requestId||'');
      let payload;

      if(bridgeAction==='bootstrapPublic'){
        payload={
          ok:true,
          version:CURRENT_APP_VERSION,
          updatedAt:centralMetaGet('updatedAt')||'',
          data:centralReadPublicData()
        };
      }else if(bridgeAction==='centralStatus'){
        payload={
          ok:true,
          version:CURRENT_APP_VERSION,
          spreadsheetId:centralSpreadsheet().getId(),
          updatedAt:centralMetaGet('updatedAt')||''
        };
      }else{
        payload={ok:false,error:'Ação de ponte inválida.'};
      }

      const safeJson=JSON.stringify(payload).replace(/</g,'\\u003c');
      const safeRequest=JSON.stringify(requestId).replace(/</g,'\\u003c');

      return HtmlService.createHtmlOutput(
        '<!doctype html><html><body><script>'+
        'parent.postMessage({type:"VERSATIL_CENTRAL_BRIDGE",requestId:'+safeRequest+',payload:'+safeJson+'},"*");'+
        '<\\/script></body></html>'
      ).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    }

    if(action==='bootstrapPublic')return jsonOrJsonp({ok:true,version:CURRENT_APP_VERSION,updatedAt:centralMetaGet('updatedAt')||'',data:centralReadPublicData()},callback);
    if(action==='centralStatus')return jsonOrJsonp({ok:true,version:CURRENT_APP_VERSION,spreadsheetId:centralSpreadsheet().getId(),updatedAt:centralMetaGet('updatedAt')||''},callback);
    return jsonOrJsonp({ok:true,service:APP_NAME,version:CURRENT_APP_VERSION},callback);
  }catch(err){return jsonOrJsonp({ok:false,error:String(err)},String(e?.parameter?.callback||''))}
}
function jsonOrJsonp(obj,callback){const j=JSON.stringify(obj);if(callback)return ContentService.createTextOutput(`${callback}(${j});`).setMimeType(ContentService.MimeType.JAVASCRIPT);return ContentService.createTextOutput(j).setMimeType(ContentService.MimeType.JSON)}

function doPost(e){
  try{
    const data=JSON.parse(e.postData.contents||'{}');
    console.log('doPost action:',data.action,'version:',data.clientVersion||'n/a','at:',new Date().toISOString());
    if(data.action==='savePublicData'){centralSavePublicData(data.data||{});return jsonResponse({ok:true})}
    if(data.action==='sendOrderEmail'){enviarEmailsPedido(data);criarEventosPedido(data);centralSaveOrder(data)}
    else if(data.action==='deleteOrder'){excluirEventosPedido(data.orderId)}
    else if(data.action==='recoverAdminPassword'){
      enviarRecuperacaoSenha(data);
      return jsonResponse({ok:true,action:'recoverAdminPassword'});
    }
    if(data.action==='setAvailability'){sincronizarDisponibilidade(data)}
    return jsonResponse({ok:true});
  }catch(erro){console.error(erro);return jsonResponse({ok:false,error:String(erro)})}
}
function jsonResponse(obj){return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)}
function escaparHtml(v){return String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function formatarData(data){if(!data)return '';const p=String(data).split('-');return p.length===3?`${p[2]}/${p[1]}/${p[0]}`:String(data)}
function formatarPeriodo(periodo){
  if(!periodo)return '';
  if(periodo.indexOf('09:00')===0)return 'Manhã - 09 às 11';
  if(periodo.indexOf('06:00')===0)return 'Manhã - 06 às 12';
  if(periodo.indexOf('13:00-15:00')===0)return 'Tarde - 13 às 15';
  if(periodo.indexOf('13:00-19:00')===0)return 'Tarde - 13 às 19';
  return periodo;
}
function formatarDinheiro(valor){return Number(valor||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}

function linhasPedidoHtml(data){
  return (data.items||[]).map(item=>{
    const usos=item.schedule&&item.schedule.length?item.schedule:[{date:item.date,period:item.period}];
    const agenda=usos.map((u,n)=>`<div><b>${n+1}.</b> ${escaparHtml(formatarData(u.date))} • ${escaparHtml(formatarPeriodo(u.period))}</div>`).join('');
    return `<tr><td style="padding:10px;border-bottom:1px solid #dce7f1"><b>${escaparHtml(item.name)}</b><div style="font-size:12px;color:#587086;margin-top:5px">${agenda}</div></td><td style="padding:10px;text-align:center;border-bottom:1px solid #dce7f1">${Number(item.qty||1)}</td><td style="padding:10px;text-align:right;border-bottom:1px solid #dce7f1">${escaparHtml(formatarDinheiro(item.price))}</td><td style="padding:10px;text-align:right;border-bottom:1px solid #dce7f1"><b>${escaparHtml(formatarDinheiro((item.price||0)*(item.qty||1)))}</b></td></tr>`;
  }).join('');
}
function tabelaPedidoHtml(data){
  return `<table style="width:100%;border-collapse:collapse;margin-top:15px;font-size:13px"><thead><tr style="background:#eaf4fb;color:#0f4c81"><th style="padding:10px;text-align:left">Serviço / produto</th><th style="padding:10px">Qtd.</th><th style="padding:10px;text-align:right">Unitário</th><th style="padding:10px;text-align:right">Total</th></tr></thead><tbody>${linhasPedidoHtml(data)}</tbody></table>`;
}
function emailShell(titulo,subtitulo,conteudo){
  return `<!doctype html><html><body style="margin:0;background:#f2f7fb;font-family:Arial,Helvetica,sans-serif;color:#17324d"><div style="max-width:760px;margin:0 auto;padding:20px"><div style="background:#0f4c81;border-radius:16px 16px 0 0;padding:20px;text-align:center"><img src="cid:logoVersatil" alt="Versátil" style="max-width:145px;background:#fff;border-radius:12px;padding:8px"><div style="font-size:22px;font-weight:700;color:#fff;margin-top:12px">${escaparHtml(APP_NAME)}</div></div><div style="background:#fff;padding:22px;border-left:1px solid #dce7f1;border-right:1px solid #dce7f1"><div style="font-size:20px;font-weight:700;color:#0f4c81">${escaparHtml(titulo)}</div>${subtitulo?`<div style="margin-top:5px;color:#587086">${escaparHtml(subtitulo)}</div>`:''}<div style="height:4px;width:70px;background:#ee7b22;border-radius:3px;margin:14px 0 18px"></div>${conteudo}</div><div style="background:#0f4c81;color:#fff;text-align:center;font-size:11px;padding:12px;border-radius:0 0 16px 16px">Serviços Versátil</div></div></body></html>`;
}
function corpoTextoPedido(data,cliente){
  const c=data.client||{};
  const itens=(data.items||[]).map((item,index)=>{
    const usos=item.schedule&&item.schedule.length?item.schedule:[{date:item.date,period:item.period}];
    return `${index+1}. ${item.name}\n${usos.map((u,n)=>`${n+1}. ${formatarData(u.date)} - ${formatarPeriodo(u.period)}`).join('\n')}\nQtd.: ${item.qty||1} | Unit.: ${formatarDinheiro(item.price)} | Total: ${formatarDinheiro((item.price||0)*(item.qty||1))}`;
  }).join('\n\n');
  return `${cliente?'Solicitação recebida':'Novo pedido'} - Serviços Versátil\nCliente: ${c.name||''}\nUnidade: ${c.roomName||''}\n${cliente?'':`E-mail: ${c.email||''}`}\n\n${itens}\n\nTOTAL: ${formatarDinheiro(data.total||0)}${cliente?'\n\nSua solicitação está em análise. A confirmação ocorrerá após contato da recepção e pagamento antecipado.':''}`;
}

function obterLogoVersatil(){
  try{
    return UrlFetchApp.fetch(LOGO_URL,{muteHttpExceptions:true}).getBlob().setName('logo-versatil.jpg');
  }catch(e){
    console.error('Falha ao carregar logo:',e);
    return null;
  }
}
function enviarHtml(destino,assunto,texto,html,replyTo=''){
  const logo=obterLogoVersatil();
  const msg={to:destino,subject:assunto,body:texto,htmlBody:html,name:APP_NAME};
  if(replyTo)msg.replyTo=replyTo;
  if(logo)msg.inlineImages={logoVersatil:logo};
  MailApp.sendEmail(msg);
}


function enviarRecuperacaoSenha(data){
  const PRIMARY_RECOVERY_EMAIL='anibal@starlis.com.br';
  const senha=String(data.password||'');
  const nome=String(data.adminName||'Admin');
  if(!senha)throw new Error('Senha não informada para recuperação.');

  const html=emailShell(
    'Recuperação de senha',
    'Acesso administrativo',
    `<p>Olá, ${escaparHtml(nome)}.</p>
     <p>Foi solicitada a recuperação da senha de acesso ao APP SERVIÇOS VERSÁTIL.</p>
     <div style="margin:18px 0;padding:16px;border-radius:12px;background:#f5f8fb">
       <div style="font-size:12px;color:#607080">Senha cadastrada</div>
       <div style="font-size:22px;font-weight:700;letter-spacing:1px">${escaparHtml(senha)}</div>
     </div>
     <p style="color:#607080;font-size:13px">Por segurança, esta mensagem é enviada exclusivamente ao e-mail principal da conta.</p>`
  );
  enviarHtml(PRIMARY_RECOVERY_EMAIL,'Recuperação de senha - Serviços Versátil',`Sua senha cadastrada é: ${senha}`,html);
  console.log('Recuperação enviada somente para '+PRIMARY_RECOVERY_EMAIL);
}


function enviarEmailsPedido(data){
  const c=data.client||{};
  const tabela=tabelaPedidoHtml(data);
  const solicitanteEmail=String(c.email||'').trim();

  const clienteHtml=emailShell(
    'Solicitação recebida',
    `${c.name||''} • ${c.roomName||''}`,
    `<p style="line-height:1.5">Sua solicitação foi recebida e está em análise de disponibilidade.</p>
     ${tabela}
     <div style="text-align:right;font-size:20px;font-weight:700;color:#0f4c81;margin-top:16px">Total: ${escaparHtml(formatarDinheiro(data.total||0))}</div>
     <div style="margin-top:18px;padding:12px;background:#fff3e7;border-left:4px solid #ee7b22;border-radius:8px">
       <b>Atenção:</b> a confirmação ocorrerá após contato da recepção e pagamento antecipado.
     </div>`
  );

  const contatoSolicitante=solicitanteEmail
    ?`<div style="margin:14px 0;padding:14px;background:#eef7ff;border:1px solid #b9d7ee;border-radius:10px">
        <div style="font-size:12px;color:#587086;margin-bottom:4px">E-mail do solicitante</div>
        <a href="mailto:${escaparHtml(solicitanteEmail)}" style="font-size:17px;font-weight:700;color:#0f4c81;text-decoration:none">${escaparHtml(solicitanteEmail)}</a>
        <div style="font-size:11px;color:#6c7d8a;margin-top:6px">Ao usar Responder neste e-mail, a resposta será endereçada ao solicitante.</div>
      </div>`
    :'';

  const adminHtml=emailShell(
    'Novo pedido',
    `${c.name||''} • ${c.roomName||''}`,
    `<div style="padding:12px;background:#eaf4fb;border-radius:10px">
       <b>Cliente:</b> ${escaparHtml(c.name||'')}<br>
       <b>Unidade:</b> ${escaparHtml(c.roomName||'')}
     </div>
     ${contatoSolicitante}
     ${tabela}
     <div style="text-align:right;font-size:20px;font-weight:700;color:#0f4c81;margin-top:16px">Total: ${escaparHtml(formatarDinheiro(data.total||0))}</div>`
  );

  if(solicitanteEmail){
    enviarHtml(
      solicitanteEmail,
      'Solicitação recebida - Serviços Versátil',
      corpoTextoPedido(data,true),
      clienteHtml
    );
  }

  ADMIN_EMAILS.filter(Boolean).forEach(email=>{
    enviarHtml(
      email,
      'Novo pedido - Serviços Versátil',
      corpoTextoPedido(data,false),
      adminHtml,
      solicitanteEmail
    );
  });
}
function dataHoraCuiaba(data,hora){
  return Utilities.parseDate(
    `${String(data)} ${String(hora||'00:00')}`,
    APP_TIMEZONE,
    'yyyy-MM-dd HH:mm'
  );
}

function obterIntervalo(data,periodo){
  const p=String(periodo||'');

  // Sem período = locação diária completa.
  let inicio='06:00',fim='19:00';

  if(p.indexOf('06:00')===0){
    inicio='06:00';fim='12:00';
  }else if(p.indexOf('09:00')===0){
    inicio='09:00';fim='11:00';
  }else if(p.indexOf('13:00-15:00')===0){
    inicio='13:00';fim='15:00';
  }else if(p.indexOf('13:00-19:00')===0){
    inicio='13:00';fim='19:00';
  }

  return {
    inicio:dataHoraCuiaba(data,inicio),
    fim:dataHoraCuiaba(data,fim)
  };
}
function criarEventosPedido(data){
  if(!data.orderId)return;
  const props=PropertiesService.getScriptProperties(),key='ORDER_EVENTS_'+data.orderId;
  if(props.getProperty(key))return;
  const cal=CalendarApp.getDefaultCalendar(),ids=[];
  (data.items||[]).forEach(item=>{
    const usos=item.schedule&&item.schedule.length?item.schedule:[{date:item.date,period:item.period}];
    usos.forEach((uso,index)=>{
      if(!uso.date)return;
      const t=obterIntervalo(uso.date,uso.period);
      const ev=cal.createEvent(`${item.name} - ${data.client?.roomName||''}`,t.inicio,t.fim,{description:`${APP_NAME}\nPedido: ${data.orderId}\nCliente: ${data.client?.name||''}\nE-mail: ${data.client?.email||''}\nUnidade: ${data.client?.roomName||''}\nProduto/Serviço: ${item.name}\nUtilização: ${index+1} de ${usos.length}\nPeríodo: ${formatarPeriodo(uso.period)}\nFuso horário: Cuiabá/MT (${APP_TIMEZONE})\nQuantidade: ${item.qty||1}`});
      ids.push(ev.getId());
    });
  });
  props.setProperty(key,JSON.stringify(ids));
}
function excluirEventosPedido(orderId){
  if(!orderId)return;
  const props=PropertiesService.getScriptProperties(),key='ORDER_EVENTS_'+orderId,saved=props.getProperty(key);
  if(!saved)return;
  const cal=CalendarApp.getDefaultCalendar();
  JSON.parse(saved).forEach(id=>{try{const ev=cal.getEventById(id);if(ev)ev.deleteEvent()}catch(e){console.error(e)}});
  props.deleteProperty(key);
}
function dataHora(data,hora){
  return dataHoraCuiaba(data,hora);
}
function sincronizarDisponibilidade(data){
  const operation=data.operation||'close',closures=data.closures||[],props=PropertiesService.getScriptProperties(),cal=CalendarApp.getDefaultCalendar(),lock=LockService.getScriptLock();
  lock.waitLock(30000);
  try{
    closures.forEach(c=>{
      if(!c||!c.id||!c.date)return;
      const key='CLOSURE_EVENT_'+c.id,savedId=props.getProperty(key);
      if(operation==='close'){
        let existing=null;
        if(savedId){try{existing=cal.getEventById(savedId)}catch(e){console.error('Evento antigo não localizado',savedId,e)}}
        const start=dataHora(c.date,c.calendarStart||'06:00'),end=dataHora(c.date,c.calendarEnd||'12:00');
        if(isNaN(start.getTime())||isNaN(end.getTime())||end<=start)throw new Error(`Intervalo inválido: ${c.id}`);
        const title=`INDISPONÍVEL - ${c.scopeLabel||'Itens'} - ${c.periodLabel||''}`;
        const description=`${APP_NAME}\nBloqueio de disponibilidade\nData: ${formatarData(c.date)}\nPeríodo: ${c.periodLabel||''}\nEscopo: ${c.scopeLabel||''}\nTipo: ${c.scopeType||''}\nID: ${c.id}\nFuso horário: Cuiabá/MT (${APP_TIMEZONE})`;
        if(existing){existing.setTitle(title);existing.setTime(start,end);existing.setDescription(description);props.setProperty(key,existing.getId())}
        else{props.deleteProperty(key);const ev=cal.createEvent(title,start,end,{description});props.setProperty(key,ev.getId())}
      }else{
        if(savedId){try{const ev=cal.getEventById(savedId);if(ev)ev.deleteEvent()}catch(e){console.error('Falha ao remover bloqueio',savedId,e)}}
        props.deleteProperty(key);
      }
    });
    props.setProperty('LAST_AVAILABILITY_SYNC',JSON.stringify({at:new Date().toISOString(),operation,count:closures.length}));
  }finally{lock.releaseLock()}
}


function statusIntegracaoV136(){
  const props=PropertiesService.getScriptProperties();
  console.log('Última sincronização de disponibilidade:',props.getProperty('LAST_AVAILABILITY_SYNC')||'nenhuma');
  console.log('Conta ativa:',Session.getActiveUser().getEmail());
  console.log('Calendário padrão:',CalendarApp.getDefaultCalendar().getName());
}

function testarBloqueioChurrasqueiraV136(){
  const d=new Date();
  d.setDate(d.getDate()+3);
  const data=Utilities.formatDate(d,Session.getScriptTimeZone(),'yyyy-MM-dd');

  sincronizarDisponibilidade({
    operation:'close',
    closures:[{
      id:'TESTE_CHURRAS_V136_'+data,
      date:data,
      slot:'morning',
      scopeType:'category',
      scopeId:'locacoes',
      scopeLabel:'Locações',
      periodLabel:'Manhã',
      calendarStart:'06:00',
      calendarEnd:'12:00'
    }]
  });

  console.log('Bloqueio de teste criado em '+data+' para a categoria Locações.');
}

function testarReaberturaChurrasqueiraV136(){
  const d=new Date();
  d.setDate(d.getDate()+3);
  const data=Utilities.formatDate(d,Session.getScriptTimeZone(),'yyyy-MM-dd');

  sincronizarDisponibilidade({
    operation:'open',
    closures:[{
      id:'TESTE_CHURRAS_V136_'+data,
      date:data
    }]
  });

  console.log('Bloqueio de teste removido em '+data+'.');
}

function testarEmail(){MailApp.sendEmail({to:Session.getActiveUser().getEmail(),subject:'Teste - APP SERVIÇOS VERSÁTIL',body:'Integração de e-mail funcionando.',name:APP_NAME})}
function testarCalendario(){
  const inicio=new Date();inicio.setMinutes(inicio.getMinutes()+10);const fim=new Date(inicio);fim.setHours(fim.getHours()+1);
  CalendarApp.getDefaultCalendar().createEvent('Teste - APP SERVIÇOS VERSÁTIL',inicio,fim,{description:'Teste de integração com Google Calendar.'});
}


function testarEmailsAdministrativosV133(){
  const html=emailShell('Teste de integração','Versão 1.33','<p>Este é um teste do novo layout dos e-mails administrativos.</p>');
  ADMIN_EMAILS.forEach((email,index)=>{
    enviarHtml(email,`TESTE ${index+1}/2 - APP SERVIÇOS VERSÁTIL`, `Teste ${index+1}/2 enviado para ${email}`, html);
    console.log(`E-mail ${index+1}/2 enviado para ${email}`);
  });
}

function testarBloqueioCalendarioV133(){
  const hoje=Utilities.formatDate(new Date(),Session.getScriptTimeZone(),'yyyy-MM-dd');
  sincronizarDisponibilidade({
    operation:'close',
    closures:[{
      id:'TESTE_BLOQUEIO_V133_'+hoje,
      date:hoje,
      slot:'afternoon',
      scopeType:'all',
      scopeId:'all',
      scopeLabel:'TESTE - Todos os itens',
      periodLabel:'Tarde',
      calendarStart:'13:00',
      calendarEnd:'19:00'
    }]
  });
  console.log('Bloqueio de teste criado para hoje, das 13:00 às 19:00.');
}


function limparMarcacoesVersatilV134(){
  const props=PropertiesService.getScriptProperties();
  const all=props.getProperties();
  const cal=CalendarApp.getDefaultCalendar();
  let removidos=0;

  Object.keys(all).forEach(key=>{
    if(!key.startsWith('ORDER_EVENTS_')&&!key.startsWith('CLOSURE_EVENT_'))return;

    let ids=[];
    try{
      const parsed=JSON.parse(all[key]);
      ids=Array.isArray(parsed)?parsed:[all[key]];
    }catch(e){
      ids=[all[key]];
    }

    ids.filter(Boolean).forEach(id=>{
      try{
        const ev=cal.getEventById(id);
        if(ev){ev.deleteEvent();removidos++}
      }catch(e){console.error(e)}
    });

    props.deleteProperty(key);
  });

  console.log(`${removidos} marcação(ões) Versátil removida(s) do Google Calendar.`);
}

function testarBloqueioCalendarioV135(){
  const d=new Date();d.setDate(d.getDate()+2);
  const data=Utilities.formatDate(d,Session.getScriptTimeZone(),'yyyy-MM-dd');
  sincronizarDisponibilidade({operation:'close',closures:[{id:'TESTE_BLOQUEIO_V135_'+data,date:data,slot:'morning',scopeType:'category',scopeId:'locacoes',scopeLabel:'Locações',periodLabel:'Manhã',calendarStart:'06:00',calendarEnd:'12:00'}]});
  console.log('Bloqueio V1.35 criado para '+data);
}
function testarReaberturaCalendarioV135(){
  const d=new Date();d.setDate(d.getDate()+2);
  const data=Utilities.formatDate(d,Session.getScriptTimeZone(),'yyyy-MM-dd');
  sincronizarDisponibilidade({operation:'open',closures:[{id:'TESTE_BLOQUEIO_V135_'+data,date:data}]});
  console.log('Bloqueio V1.35 removido para '+data);
}
function limparMarcacoesVersatilV135(){
  const props=PropertiesService.getScriptProperties(),all=props.getProperties(),cal=CalendarApp.getDefaultCalendar();let removidos=0;
  Object.keys(all).forEach(key=>{
    if(!key.startsWith('ORDER_EVENTS_')&&!key.startsWith('CLOSURE_EVENT_'))return;
    let ids=[];try{const p=JSON.parse(all[key]);ids=Array.isArray(p)?p:[all[key]]}catch(e){ids=[all[key]]}
    ids.filter(Boolean).forEach(id=>{try{const ev=cal.getEventById(id);if(ev){ev.deleteEvent();removidos++}}catch(e){console.error(e)}});
    props.deleteProperty(key);
  });
  props.deleteProperty('LAST_AVAILABILITY_SYNC');
  console.log(removidos+' marcação(ões) removida(s).');
}

function diagnosticarSincronizacaoCalendarioV137(){
  const props=PropertiesService.getScriptProperties();
  const cal=CalendarApp.getDefaultCalendar();
  console.log('Calendário padrão ID: '+cal.getId());
  console.log('Calendário padrão nome: '+cal.getName());
  console.log('Última sincronização: '+(props.getProperty('LAST_AVAILABILITY_SYNC')||'nenhuma'));
}
function testarRecuperacaoSenhaV137(){
  enviarRecuperacaoSenha({password:'TESTE-V137',adminName:'Anibal'});
  console.log('Teste enviado somente ao e-mail principal.');
}


function testarRecuperacaoSenhaV138(){
  enviarRecuperacaoSenha({
    password:'TESTE-V138',
    adminName:'Anibal'
  });
  console.log('Teste V1.38 de recuperação enviado somente para anibal@starlis.com.br.');
}

// APP SERVIÇOS VERSÁTIL - Script versão 1.39 (mesma correção de recuperação da 1.38)

// APP SERVIÇOS VERSÁTIL - cópia de referência v1.40; sem alteração funcional nesta versão.

// v1.41: frontend apontando para a implantação de produção correta.

// v1.42: sem alterações no Apps Script; regras reforçadas no front-end.


function testarEmailPedidoComRespostaV143(){
  const teste={
    orderId:'TESTE-REPLYTO-V143',
    client:{
      name:'Solicitante de Teste',
      email:'solicitante.teste@example.com',
      roomName:'101A'
    },
    items:[{
      name:'Teste de pedido',
      qty:1,
      price:0,
      date:Utilities.formatDate(new Date(),Session.getScriptTimeZone(),'yyyy-MM-dd'),
      period:'09:00-11:00'
    }],
    total:0
  };

  const c=teste.client;
  const adminHtml=emailShell(
    'Teste - Novo pedido',
    `${c.name} • ${c.roomName}`,
    `<div style="padding:12px;background:#eaf4fb;border-radius:10px">
       <b>Cliente:</b> ${escaparHtml(c.name)}<br>
       <b>Unidade:</b> ${escaparHtml(c.roomName)}
     </div>
     <div style="margin:14px 0;padding:14px;background:#eef7ff;border:1px solid #b9d7ee;border-radius:10px">
       <div style="font-size:12px;color:#587086;margin-bottom:4px">E-mail do solicitante</div>
       <a href="mailto:${escaparHtml(c.email)}" style="font-size:17px;font-weight:700;color:#0f4c81;text-decoration:none">${escaparHtml(c.email)}</a>
       <div style="font-size:11px;color:#6c7d8a;margin-top:6px">Ao usar Responder, a resposta será endereçada ao solicitante.</div>
     </div>`
  );

  enviarHtml(
    'anibal@starlis.com.br',
    'TESTE V1.43 - Pedido com e-mail do solicitante',
    `Solicitante: ${c.name}\nE-mail: ${c.email}`,
    adminHtml,
    c.email
  );

  console.log('Teste V1.43 enviado para o e-mail principal com Reply-To do solicitante.');
}

// v1.44: sem alterações funcionais no Apps Script; versão visível adicionada ao frontend.

// v1.45: sem alteração funcional no Apps Script.

// v1.46: sem alterações funcionais no Apps Script; unidades e preços de moto atualizados no frontend.

// v1.47: sem alterações no Apps Script; lista de unidades atualizada no frontend.

// v1.48: sem alterações funcionais no Apps Script; lista de unidades corrigida no frontend.


function diagnosticarFusoHorarioV149(){
  console.log('Fuso utilizado pelo APP:',APP_TIMEZONE);
  console.log('Fuso configurado no projeto Apps Script:',Session.getScriptTimeZone());
  console.log('Calendário padrão:',CalendarApp.getDefaultCalendar().getName());
  console.log('Agora em Cuiabá:',Utilities.formatDate(new Date(),APP_TIMEZONE,'dd/MM/yyyy HH:mm:ss'));
}

function testarHorarioCuiabaV149(){
  const d=new Date();
  d.setDate(d.getDate()+2);
  const data=Utilities.formatDate(d,APP_TIMEZONE,'yyyy-MM-dd');
  const intervalo=obterIntervalo(data,'09:00-11:00');
  const ev=CalendarApp.getDefaultCalendar().createEvent(
    'TESTE V1.49 - Horário Cuiabá 09 às 11',
    intervalo.inicio,
    intervalo.fim,
    {description:`Teste de horário do APP SERVIÇOS VERSÁTIL\nFuso: ${APP_TIMEZONE}\nEsperado: 09:00 às 11:00 em Cuiabá/MT`}
  );
  console.log('Evento de teste criado: '+ev.getId());
}

// v1.50: sem alterações funcionais no Apps Script; instalação PWA implementada no frontend.

function centralSpreadsheet(){
  const p=PropertiesService.getScriptProperties();let id=p.getProperty(CENTRAL_DB_PROP);
  if(id){try{return SpreadsheetApp.openById(id)}catch(e){}}
  const ss=SpreadsheetApp.create('APP SERVIÇOS VERSÁTIL - BASE CENTRAL');p.setProperty(CENTRAL_DB_PROP,ss.getId());centralEnsureSheets_(ss);centralMetaSet('updatedAt',new Date().toISOString());return ss;
}
function centralEnsureSheets_(ss){['META','ROOMS','CATEGORIES','PRODUCTS','CLOSURES','ORDERS'].forEach(n=>{if(!ss.getSheetByName(n))ss.insertSheet(n)})}
function centralSheet_(n){const ss=centralSpreadsheet();centralEnsureSheets_(ss);return ss.getSheetByName(n)}
function centralWriteRows_(n,h,rows){const s=centralSheet_(n);s.clearContents();s.getRange(1,1,1,h.length).setValues([h]);if(rows.length)s.getRange(2,1,rows.length,h.length).setValues(rows);s.setFrozenRows(1)}
function centralReadObjects_(n){const v=centralSheet_(n).getDataRange().getValues();if(v.length<2)return[];const h=v[0].map(String);return v.slice(1).filter(r=>r.some(x=>x!==''&&x!==null)).map(r=>Object.fromEntries(h.map((k,i)=>[k,r[i]])))}
function centralMetaSet(k,val){const s=centralSheet_('META');if(s.getLastRow()===0)s.getRange(1,1,1,2).setValues([['key','value']]);const v=s.getDataRange().getValues();for(let r=1;r<v.length;r++){if(String(v[r][0])===String(k)){s.getRange(r+1,2).setValue(val);return}}s.appendRow([k,val])}
function centralMetaGet(k){return String(centralReadObjects_('META').find(r=>String(r.key)===String(k))?.value||'')}
function centralSavePublicData(d){
  const rooms=Array.isArray(d.rooms)?d.rooms:[],cats=Array.isArray(d.categories)?d.categories:[],prods=Array.isArray(d.products)?d.products:[],cl=Array.isArray(d.availabilityClosures)?d.availabilityClosures:[];
  centralWriteRows_('ROOMS',['id','name','number','type'],rooms.map(r=>[r.id||'',r.name||'',r.number||'',r.type||'']));
  centralWriteRows_('CATEGORIES',['id','name','icon','description'],cats.map(c=>[c.id||'',c.name||'',c.icon||'',c.description||'']));
  centralWriteRows_('PRODUCTS',['id','cat','name','icon','desc','q','a','halfDay'],prods.map(p=>[p.id||'',p.cat||'',p.name||'',p.icon||'',p.desc||'',Number(p.q||0),Number(p.a||0),p.halfDay===true]));
  centralWriteRows_('CLOSURES',['id','date','slot','scopeType','scopeId','scopeLabel','periodLabel','calendarStart','calendarEnd','createdAt'],cl.map(c=>[c.id||'',c.date||'',c.slot||'',c.scopeType||'',c.scopeId||'',c.scopeLabel||'',c.periodLabel||'',c.calendarStart||'',c.calendarEnd||'',c.createdAt||'']));
  centralMetaSet('updatedAt',new Date().toISOString());
}
function centralReadPublicData(){
  return {rooms:centralReadObjects_('ROOMS'),categories:centralReadObjects_('CATEGORIES'),products:centralReadObjects_('PRODUCTS').map(p=>({...p,q:Number(p.q||0),a:Number(p.a||0),halfDay:p.halfDay===true||String(p.halfDay).toLowerCase()==='true'})),availabilityClosures:centralReadObjects_('CLOSURES')};
}
function centralSaveOrder(d){
  try{const s=centralSheet_('ORDERS');if(s.getLastRow()===0){s.getRange(1,1,1,7).setValues([['orderId','createdAt','clientName','clientEmail','roomName','total','json']]);s.setFrozenRows(1)}
  const id=String(d.orderId||'');if(!id)return;const v=s.getDataRange().getValues();if(v.slice(1).some(r=>String(r[0])===id))return;s.appendRow([id,d.createdAt||new Date().toISOString(),d.client?.name||'',d.client?.email||'',d.client?.roomName||'',Number(d.total||0),JSON.stringify(d)])}catch(e){console.error(e)}
}
function inicializarBaseCentralV151(){const ss=centralSpreadsheet();console.log('Base central:',ss.getUrl());console.log('ID:',ss.getId())}


function testarPonteMobileV152(){
  const html=doGet({parameter:{action:'bridgePublic',bridgeAction:'centralStatus',requestId:'TESTE_V152'}});
  console.log('Ponte mobile criada com sucesso. Tipo:',html.getContent? 'HtmlOutput':'desconhecido');
  console.log('Versão central:',CURRENT_APP_VERSION);
}
