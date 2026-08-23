(() => {
  if (window.__SPG_ACTIVE__) return;
  window.__SPG_ACTIVE__ = true;
  const ID = 'spg-floating-root';

  const style = document.createElement('style');
  style.textContent = `
    #${ID}{position:fixed;right:24px;bottom:24px;width:410px;z-index:2147483647;font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;color:#fff}
    #${ID} *{box-sizing:border-box}
    #${ID}.min .spg-panel{display:none}
    .spg-panel{overflow:hidden;border:1px solid rgba(182,91,255,.35);border-radius:24px;background:radial-gradient(circle at 100% 0%,rgba(132,58,255,.22),transparent 36%),linear-gradient(145deg,#15101f 0%,#0a0b12 55%,#07080d 100%);box-shadow:0 30px 100px rgba(0,0,0,.72),0 0 45px rgba(123,52,255,.14);backdrop-filter:blur(20px)}
    .spg-head{display:flex;align-items:center;justify-content:space-between;padding:13px 14px;border-bottom:1px solid rgba(255,255,255,.08);cursor:move}
    .spg-brand{display:flex;align-items:center;gap:11px;min-width:0}.spg-heart{width:38px;height:38px;display:grid;place-items:center;border-radius:13px;background:linear-gradient(145deg,#a832ff,#5638ff);box-shadow:0 8px 25px rgba(135,53,255,.38);font-size:19px}.spg-name{font-size:12px;font-weight:850;letter-spacing:.1px}.spg-project{display:flex;align-items:center;gap:5px;margin-top:3px;color:#9d94ae;font-size:9px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:245px}.spg-dot{width:6px;height:6px;border-radius:50%;background:#4dffad;box-shadow:0 0 10px #4dffad}
    .spg-controls{display:flex;gap:6px}.spg-controls button{width:31px;height:31px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.055);color:#c8c3d0;border-radius:10px;cursor:pointer;font-size:15px;transition:.18s}.spg-controls button:hover{background:rgba(174,74,255,.22);border-color:rgba(190,91,255,.55);color:#fff;transform:translateY(-1px)}
    .spg-body{padding:14px}.spg-label{font-size:9px;color:#8d859b;text-transform:uppercase;letter-spacing:1.1px;font-weight:800;margin:0 0 7px 2px}.spg-ta{width:100%;height:145px;resize:vertical;border:1px solid rgba(255,255,255,.1);border-radius:15px;background:rgba(3,4,8,.72);color:#f7f4fa;padding:13px;outline:none;font:11px/1.55 inherit;box-shadow:inset 0 1px 0 rgba(255,255,255,.03);transition:.2s}.spg-ta:focus{border-color:#a653ff;box-shadow:0 0 0 3px rgba(166,83,255,.12),inset 0 1px 0 rgba(255,255,255,.04)}
    .spg-tools{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:7px;margin-top:9px}.spg-tools button,.spg-improve,.spg-send{border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.055);color:#ddd8e6;border-radius:11px;cursor:pointer;transition:.18s;font-weight:750}.spg-tools button{height:36px;font-size:9px}.spg-tools button:hover,.spg-improve:hover{background:rgba(166,83,255,.15);border-color:rgba(181,91,255,.45);color:#fff;transform:translateY(-1px)}
    .spg-improve{width:100%;height:39px;margin-top:9px;background:linear-gradient(135deg,rgba(157,65,255,.2),rgba(72,93,255,.14));border-color:rgba(172,85,255,.3);font-size:9px}.spg-send{width:100%;height:43px;margin-top:8px;border:0;background:linear-gradient(100deg,#8f35ff,#5c55ff,#9b3cff);background-size:200% 100%;box-shadow:0 10px 30px rgba(110,51,255,.25);color:#fff;font-size:10px}.spg-send:hover{animation:spg-shift 1.2s ease infinite;transform:translateY(-1px);box-shadow:0 14px 35px rgba(110,51,255,.38)}@keyframes spg-shift{50%{background-position:100% 0}}
    .spg-status{min-height:17px;text-align:center;font-size:8px;color:#bca6d7;margin-top:7px}.spg-status.ok{color:#70f0ae}.spg-status.err{color:#ff8eaa}
    .spg-fab{display:none;width:54px;height:54px;border:1px solid rgba(184,85,255,.5);border-radius:18px;background:linear-gradient(145deg,#a632ff,#4d3aff);color:#fff;font-size:21px;cursor:pointer;box-shadow:0 15px 45px rgba(73,28,130,.55);transition:.2s}.spg-fab:hover{transform:translateY(-3px) scale(1.03)}#${ID}.min .spg-fab{display:grid;place-items:center}
    .spg-project-card{display:flex;align-items:center;gap:8px;margin-bottom:10px;padding:8px 10px;border:1px solid rgba(255,255,255,.07);border-radius:12px;background:rgba(255,255,255,.035)}.spg-project-icon{width:25px;height:25px;border-radius:8px;display:grid;place-items:center;background:rgba(151,69,255,.18);font-size:12px}.spg-project-text{min-width:0}.spg-project-text b{display:block;font-size:9px}.spg-project-text span{display:block;margin-top:2px;font-size:8px;color:#777181;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  `;
  document.documentElement.appendChild(style);

  const root = document.createElement('div');
  root.id = ID;
  root.innerHTML = `<div class="spg-panel"><div class="spg-head"><div class="spg-brand"><div class="spg-heart">♥</div><div><div class="spg-name">Sessão Prêmio Gustavo</div><div class="spg-project"><i class="spg-dot"></i><span data-project-head>Detectando projeto…</span></div></div></div><div class="spg-controls"><button data-a="menu" title="Opções">⋮</button><button data-a="min" title="Minimizar">−</button><button data-a="close" title="Fechar">×</button></div></div><div class="spg-body"><div class="spg-project-card"><div class="spg-project-icon">⌘</div><div class="spg-project-text"><b>Projeto ativo</b><span data-project-card>Detectando projeto…</span></div></div><div class="spg-label">Seu prompt</div><textarea class="spg-ta" placeholder="Escreva o que você quer criar ou modificar no Lovable…"></textarea><div class="spg-tools"><button data-a="voice" title="Falar por voz">🎙 Voz</button><button data-a="copy" title="Copiar prompt">⧉ Copiar</button><button data-a="clear" title="Limpar prompt">⌫ Limpar</button></div><button class="spg-improve" data-a="improve">✦ Melhorar prompt com Gustavo</button><button class="spg-send" data-a="send">Enviar para o campo do Lovable ↗</button><div class="spg-status">Pronto • modo seguro sem envio automático</div></div></div><button class="spg-fab" data-a="open" title="Abrir Sessão Prêmio Gustavo">♥</button>`;
  document.body.appendChild(root);

  const $ = s => root.querySelector(s), ta = $('.spg-ta'), status = $('.spg-status');
  const projectEls = [root.querySelector('[data-project-head]'), root.querySelector('[data-project-card]')];

  function getProjectName(){
    const path = location.pathname.split('/').filter(Boolean);
    const idx = path.findIndex(x => ['projects','project','workspace'].includes(x.toLowerCase()));
    let value = idx >= 0 && path[idx+1] ? decodeURIComponent(path[idx+1]) : '';
    if(!value){
      const title = document.title.replace(/\s*[|—-]\s*Lovable.*$/i,'').trim();
      value = title && !/^Lovable$/i.test(title) ? title : '';
    }
    if(!value){
      const el = [...document.querySelectorAll('h1,[data-project-name],[aria-label]')].find(e => /project|projeto/i.test(e.textContent||'') || /project|projeto/i.test(e.getAttribute('aria-label')||''));
      value = el?.textContent?.trim() || '';
    }
    return value || 'Projeto atual do Lovable';
  }
  function refreshProject(){const name=getProjectName();projectEls.forEach(e=>e.textContent=name)}
  refreshProject(); setTimeout(refreshProject,1200); setTimeout(refreshProject,3000);

  function setStatus(text,type=''){status.textContent=text;status.className='spg-status '+type}
  function improve(){const text=ta.value.trim();if(!text){ta.focus();setStatus('Escreva um prompt primeiro','err');return}ta.value=`OBJETIVO\n${text}\n\nESPECIFICAÇÃO\n- Transforme a ideia em uma implementação funcional e completa.\n- Preserve a intenção original sem inventar requisitos.\n- Descreva funcionalidades, UI/UX, estados, responsividade e comportamento.\n- Use componentes reutilizáveis e código organizado.\n- Considere loading, erro, vazio e sucesso.\n- Priorize acessibilidade, performance e consistência visual.\n\nCRITÉRIOS DE CONCLUSÃO\n- Tudo deve funcionar de ponta a ponta.\n- A interface deve ser moderna, responsiva e pronta para produção.`;setStatus('✦ Prompt melhorado localmente sem API','ok')}
  async function copy(){if(!ta.value.trim()){setStatus('Nada para copiar','err');return}try{await navigator.clipboard.writeText(ta.value);setStatus('✓ Prompt copiado','ok')}catch{setStatus('Não foi possível copiar','err')}}

  function findLovableComposer(){
    const els=[...document.querySelectorAll('textarea,input,[contenteditable="true"]')].filter(e=>!root.contains(e) && !e.disabled);
    const scored=els.map(e=>{const p=((e.getAttribute('placeholder')||'')+' '+(e.getAttribute('aria-label')||'')+' '+(e.getAttribute('data-testid')||'')).toLowerCase();let s=0;if(/message|mensag|ask|prompt|describe|build|tell/.test(p))s+=10;if(e.tagName==='TEXTAREA')s+=4;return [e,s]}).sort((a,b)=>b[1]-a[1]);return scored[0]?.[1]>0?scored[0][0]:els.find(e=>e.tagName==='TEXTAREA')||null;
  }
  function fillNativeChat(text){
    const target=findLovableComposer();
    if(!target){setStatus('Não encontrei o campo de chat do Lovable','err');return false}
    target.removeAttribute('disabled');target.setAttribute('data-spg-temporary','1');target.focus();
    if(target.isContentEditable){target.textContent=text}else{const proto=Object.getPrototypeOf(target);const setter=Object.getOwnPropertyDescriptor(proto,'value')?.set;if(setter)setter.call(target,text);else target.value=text}
    target.dispatchEvent(new InputEvent('input',{bubbles:true,inputType:'insertText',data:text}));target.dispatchEvent(new Event('change',{bubbles:true}));
    target.setAttribute('data-spg-filled','1');
    return true;
  }
  async function send(){const text=ta.value.trim();if(!text){ta.focus();setStatus('Escreva um prompt primeiro','err');return}chrome.storage.local.set({pendingLovablePrompt:text,lastPrompt:text,activeProject:getProjectName()});const ok=fillNativeChat(text);if(ok){setStatus('✓ Colocado no campo do Lovable • não enviado automaticamente','ok');setTimeout(blockNativeChat,250)}}

  function blockNativeChat(){
    const target=findLovableComposer();
    if(!target || target.getAttribute('data-spg-temporary')==='1') return;
    target.dataset.spgBlocked='1';target.setAttribute('aria-disabled','true');target.style.setProperty('pointer-events','none','important');target.style.setProperty('opacity','.55','important');target.setAttribute('tabindex','-1');
    const form=target.closest('form');if(form)form.dataset.spgBlocked='1';
  }
  function restoreNativeChat(){document.querySelectorAll('[data-spg-blocked="1"]').forEach(e=>{e.removeAttribute('aria-disabled');e.style.removeProperty('pointer-events');e.style.removeProperty('opacity');e.removeAttribute('tabindex');delete e.dataset.spgBlocked});document.querySelectorAll('[data-spg-temporary="1"]').forEach(e=>e.removeAttribute('data-spg-temporary'))}

  let rec=null;
  function voice(){
    const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!SR){setStatus('Seu navegador não oferece reconhecimento de voz','err');return}
    if(rec){rec.stop();rec=null;setStatus('Voz pausada');$('.spg-tools [data-a="voice"]').textContent='🎙 Voz';return}
    rec=new SR();rec.lang='pt-BR';rec.interimResults=true;rec.continuous=false;
    $('.spg-tools [data-a="voice"]').textContent='⏹ Parar';setStatus('● Ouvindo… fale agora');
    rec.onresult=e=>{let final='';for(let i=e.resultIndex;i<e.results.length;i++)final+=e.results[i][0].transcript;if(final){ta.value=(ta.value.trim()?ta.value.trim()+' ':'')+final}};
    rec.onerror=e=>{setStatus(e.error==='not-allowed'?'Permita o microfone no navegador':'Erro no reconhecimento de voz','err');rec=null;$('.spg-tools [data-a="voice"]').textContent='🎙 Voz'};
    rec.onend=()=>{rec=null;$('.spg-tools [data-a="voice"]').textContent='🎙 Voz';if(status.textContent.includes('Ouvindo'))setStatus('✓ Voz concluída','ok')};
    try{rec.start()}catch{rec=null;setStatus('Não foi possível iniciar o microfone','err')}
  }

  root.addEventListener('click',e=>{const a=e.target.closest('[data-a]')?.dataset.a;if(!a)return;if(a==='min')root.classList.add('min');if(a==='open')root.classList.remove('min');if(a==='close'){restoreNativeChat();root.remove();style.remove();window.__SPG_ACTIVE__=false}if(a==='menu')setStatus('Sessão ativa • projeto detectado automaticamente');if(a==='improve')improve();if(a==='copy')copy();if(a==='clear'){ta.value='';setStatus('Campo limpo')}if(a==='send')send();if(a==='voice')voice()});

  const observer=new MutationObserver(()=>{refreshProject();if(!root.classList.contains('min'))blockNativeChat()});
  observer.observe(document.body,{subtree:true,childList:true});
  setTimeout(blockNativeChat,500);setTimeout(blockNativeChat,1500);
  chrome.storage.local.get(['lastPrompt'],d=>{if(d.lastPrompt)ta.value=d.lastPrompt});
})();