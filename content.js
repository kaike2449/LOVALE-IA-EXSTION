(() => {
  // A extensão não injeta chamadas de API nem tenta contornar limites de uso.
  // Este script apenas adiciona uma pequena indicação visual quando o painel está ativo.
  if (document.getElementById('lovable-ai-hub-badge')) return;
  const badge=document.createElement('div');
  badge.id='lovable-ai-hub-badge';
  badge.textContent='✦ AI Hub conectado';
  Object.assign(badge.style,{position:'fixed',right:'16px',bottom:'16px',zIndex:'2147483647',padding:'7px 10px',borderRadius:'999px',background:'#11131a',color:'#a88bff',border:'1px solid #302451',font:'600 11px system-ui',boxShadow:'0 8px 25px #0005',pointerEvents:'none'});
  document.documentElement.appendChild(badge);
  setTimeout(()=>badge.remove(),5000);
})();