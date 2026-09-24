(function(){
var css='.vp-switcher{position:fixed;bottom:20px;right:20px;z-index:999;display:flex;gap:4px;background:rgba(10,12,14,.92);border:1px solid rgba(255,255,255,.14);border-radius:100px;padding:5px;box-shadow:0 12px 40px rgba(0,0,0,.45);backdrop-filter:blur(8px)}'+
'.vp-btn{width:34px;height:34px;border-radius:50%;border:none;background:transparent;color:#9a9488;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s}'+
'.vp-btn:hover{color:#fff}.vp-btn.active{background:#d38d29;color:#fff}'+
'.vp-btn svg{width:16px;height:16px}'+
'html[data-vp="mobile"] body{max-width:390px;margin:0 auto!important;box-shadow:0 0 0 1px rgba(255,255,255,.12),0 0 60px rgba(0,0,0,.5);overflow-x:hidden}'+
'html[data-vp="tablet"] body{max-width:820px;margin:0 auto!important;box-shadow:0 0 0 1px rgba(255,255,255,.12),0 0 60px rgba(0,0,0,.5);overflow-x:hidden}'+
'html[data-vp="mobile"] body,html[data-vp="tablet"] body{position:relative}';
var style=document.createElement('style');style.textContent=css;document.head.appendChild(style);

document.addEventListener('DOMContentLoaded',function(){
var wrap=document.createElement('div');
wrap.className='vp-switcher';
var modes=[
{k:'mobile',label:'Mobile',svg:'<rect x="7" y="2" width="10" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/>'},
{k:'tablet',label:'Tablet',svg:'<rect x="4" y="3" width="16" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/>'},
{k:'desktop',label:'Desktop',svg:'<rect x="2" y="4" width="20" height="13" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="1.6"/>'}
];
var saved = localStorage.getItem('zeno-vp') || 'desktop';
document.documentElement.setAttribute('data-vp', saved);
modes.forEach(function(m){
  var b=document.createElement('button');
  b.type='button';b.className='vp-btn'+(m.k===saved?' active':'');b.title=m.label;b.setAttribute('aria-label',m.label);
  b.innerHTML='<svg viewBox="0 0 24 24">'+m.svg+'</svg>';
  b.addEventListener('click',function(){
    document.documentElement.setAttribute('data-vp', m.k);
    localStorage.setItem('zeno-vp', m.k);
    wrap.querySelectorAll('.vp-btn').forEach(function(x){x.classList.remove('active');});
    b.classList.add('active');
  });
  wrap.appendChild(b);
});
document.body.appendChild(wrap);
});
})();
