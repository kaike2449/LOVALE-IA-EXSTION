const $=id=>document.getElementById(id);
const provider=$('provider'),prompt=$('prompt'),files=$('files'),photoInput=$('photoInput'),fileList=$('fileList');
let attachments=[];
const urls={lovable:'https://lovable.dev/',chatgpt:'https://chatgpt.com/',claude:'https://claude.ai/',gemini:'https://gemini.google.com/'};
function renderFiles(){fileList.innerHTML=attachments.map(f=>`<div class="file-item">📎 ${f.name}</div>`).join('')}
function addFiles(list){attachments=[...attachments,...Array.from(list)];renderFiles()}
files.addEventListener('change',e=>addFiles(e.target.files));
$('photoBtn').onclick=()=>photoInput.click();
photoInput.onchange=e=>addFiles(e.target.files);
$('improve').onclick=()=>{
  const text=prompt.value.trim();
  if(!text){prompt.focus();return}
  prompt.value=`Atue como um especialista em engenharia de prompts. Reescreva e melhore o pedido abaixo para ficar claro, completo, profissional e pronto para uma IA de desenvolvimento executar. Preserve a intenção original, adicione requisitos úteis quando forem óbvios e organize em objetivo, funcionalidades, UI/UX, regras técnicas e critérios de conclusão.\n\nPEDIDO ORIGINAL:\n${text}`;
};
$('send').onclick=async()=>{
  const text=prompt.value.trim();
  if(!text){prompt.focus();return}
  const names=attachments.map(f=>f.name).join(', ');
  const prepared=names?`${text}\n\nArquivos selecionados: ${names}\nObservação: anexe os arquivos no chat de destino quando ele estiver aberto.`:text;
  try{await navigator.clipboard.writeText(prepared)}catch{}
  await chrome.storage.local.set({lastPrompt:prepared,provider:provider.value});
  chrome.tabs.create({url:urls[provider.value]});
};
$('settings').onclick=()=>chrome.runtime.openOptionsPage?.();
chrome.storage.local.get(['lastPrompt','provider'],d=>{if(d.provider)provider.value=d.provider;if(d.lastPrompt&&!prompt.value)prompt.value=d.lastPrompt});