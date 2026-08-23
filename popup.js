const $=id=>document.getElementById(id);
const writer=$('writer'),prompt=$('prompt'),files=$('files'),photoInput=$('photoInput'),fileList=$('fileList');
let attachments=[];
const writerUrls={chatgpt:'https://chatgpt.com/',claude:'https://claude.ai/',gemini:'https://gemini.google.com/'};
function renderFiles(){fileList.innerHTML=attachments.map(f=>`<div class="file-item">📎 ${f.name}</div>`).join('')}
function addFiles(list){attachments=[...attachments,...Array.from(list)];renderFiles()}
files.addEventListener('change',e=>addFiles(e.target.files));
$('photoBtn').onclick=()=>photoInput.click();
photoInput.onchange=e=>addFiles(e.target.files);
$('improve').onclick=()=>{
 const text=prompt.value.trim(); if(!text){prompt.focus();return}
 prompt.value=`Transforme o pedido abaixo em um prompt profissional para o Lovable. Organize objetivo, funcionalidades, UI/UX, comportamento, regras técnicas e critérios de conclusão. Preserve a intenção original e não invente integrações privadas.\n\nPEDIDO ORIGINAL:\n${text}`;
};
let recognition;
const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
if(SpeechRecognition){recognition=new SpeechRecognition();recognition.lang='pt-BR';recognition.interimResults=false;recognition.continuous=false;recognition.onresult=e=>{prompt.value+=(prompt.value?' ':'')+e.results[0][0].transcript};recognition.onend=()=>{ $('voice').textContent='🎙 Voz'; $('voiceStatus').textContent=''};}
$('voice').onclick=()=>{if(!recognition){$('voiceStatus').textContent='Reconhecimento de voz não é suportado neste navegador.';return} $('voice').textContent='⏹ Ouvindo…';$('voiceStatus').textContent='Fale seu prompt…';recognition.start()};
$('send').onclick=async()=>{
 const text=prompt.value.trim(); if(!text){prompt.focus();return}
 const names=attachments.map(f=>f.name).join(', ');
 const prepared=names?`${text}\n\nArquivos selecionados: ${names}\nObservação: os arquivos precisam ser anexados no chat do Lovable.`:text;
 await chrome.storage.local.set({pendingLovablePrompt:prepared,lastPrompt:prepared,writer:writer.value});
 try{await navigator.clipboard.writeText(prepared)}catch{}
 const tab=await chrome.tabs.create({url:'https://lovable.dev/'});
 chrome.storage.local.set({pendingTabId:tab.id});
};
$('float').onclick=async()=>{await chrome.storage.local.set({openFloating:true});const tabs=await chrome.tabs.query({active:true,currentWindow:true});if(tabs[0]?.url?.startsWith('https://lovable.dev/')){chrome.tabs.sendMessage(tabs[0].id,{type:'OPEN_FLOATING'}).catch(()=>{})}else chrome.tabs.create({url:'https://lovable.dev/'})};
$('minimize').onclick=()=>window.close();
$('exit').onclick=()=>window.close();
chrome.storage.local.get(['lastPrompt','writer'],d=>{if(d.writer)writer.value=d.writer;if(d.lastPrompt&&!prompt.value)prompt.value=d.lastPrompt});