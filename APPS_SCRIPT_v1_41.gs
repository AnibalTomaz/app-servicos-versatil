const ADMIN_EMAILS=['anibal@starlis.com.br','versatil@starlis.com.br'];
const APP_NAME='APP SERVIÇOS VERSÁTIL';
const LOGO_URL='https://anibaltomaz.github.io/app-servicos-versatil/logo-versatil.jpg';

function doGet(){return jsonResponse({ok:true,service:APP_NAME})}
function doPost(e){
  try{
    const data=JSON.parse(e.postData.contents||'{}');
    console.log('doPost action:',data.action,'version:',data.clientVersion||'n/a','at:',new Date().toISOString());
    if(data.action==='sendOrderEmail'){enviarEmailsPedido(data);criarEventosPedido(data)}
    else if(data.action==='deleteOrder'){excluirEventosPedido(data.orderId)}
    else if(data.action==='recoverAdminPassword'){
      enviarRecuperacaoSenha(data);
      return output({ok:true,action:'recoverAdminPassword'});
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
function enviarHtml(destino,assunto,texto,html){
  const logo=obterLogoVersatil();
  const msg={to:destino,subject:assunto,body:texto,htmlBody:html,name:APP_NAME};
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
  const c=data.client||{},tabela=tabelaPedidoHtml(data);
  const clienteHtml=emailShell('Solicitação recebida',`${c.name||''} • ${c.roomName||''}`,`<p style="line-height:1.5">Sua solicitação foi recebida e está em análise de disponibilidade.</p>${tabela}<div style="text-align:right;font-size:20px;font-weight:700;color:#0f4c81;margin-top:16px">Total: ${escaparHtml(formatarDinheiro(data.total||0))}</div><div style="margin-top:18px;padding:12px;background:#fff3e7;border-left:4px solid #ee7b22;border-radius:8px"><b>Atenção:</b> a confirmação ocorrerá após contato da recepção e pagamento antecipado.</div>`);
  const adminHtml=emailShell('Novo pedido',`${c.name||''} • ${c.roomName||''}`,`<div style="padding:12px;background:#eaf4fb;border-radius:10px"><b>Cliente:</b> ${escaparHtml(c.name||'')}<br><b>E-mail:</b> ${escaparHtml(c.email||'')}<br><b>Unidade:</b> ${escaparHtml(c.roomName||'')}</div>${tabela}<div style="text-align:right;font-size:20px;font-weight:700;color:#0f4c81;margin-top:16px">Total: ${escaparHtml(formatarDinheiro(data.total||0))}</div>`);
  if(c.email)enviarHtml(c.email,'Solicitação recebida - Serviços Versátil',corpoTextoPedido(data,true),clienteHtml);
  ADMIN_EMAILS.filter(Boolean).forEach(email=>enviarHtml(email,'Novo pedido - Serviços Versátil',corpoTextoPedido(data,false),adminHtml));
}

function obterIntervalo(data,periodo){
  const p=String(data).split('-'),ano=Number(p[0]),mes=Number(p[1])-1,dia=Number(p[2]);let hi=9,hf=11;
  if(String(periodo||'').indexOf('06:00')===0){hi=6;hf=12}else if(String(periodo||'').indexOf('09:00')===0){hi=9;hf=11}else if(String(periodo||'').indexOf('13:00-15:00')===0){hi=13;hf=15}else if(String(periodo||'').indexOf('13:00-19:00')===0){hi=13;hf=19}
  return {inicio:new Date(ano,mes,dia,hi,0),fim:new Date(ano,mes,dia,hf,0)};
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
      const ev=cal.createEvent(`${item.name} - ${data.client?.roomName||''}`,t.inicio,t.fim,{description:`${APP_NAME}\nPedido: ${data.orderId}\nCliente: ${data.client?.name||''}\nE-mail: ${data.client?.email||''}\nUnidade: ${data.client?.roomName||''}\nProduto/Serviço: ${item.name}\nUtilização: ${index+1} de ${usos.length}\nPeríodo: ${formatarPeriodo(uso.period)}\nQuantidade: ${item.qty||1}`});
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
  const [y,m,d]=String(data).split('-').map(Number),[hh,mm]=String(hora||'00:00').split(':').map(Number);
  return new Date(y,m-1,d,hh||0,mm||0);
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
        const description=`${APP_NAME}\nBloqueio de disponibilidade\nData: ${formatarData(c.date)}\nPeríodo: ${c.periodLabel||''}\nEscopo: ${c.scopeLabel||''}\nTipo: ${c.scopeType||''}\nID: ${c.id}`;
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
