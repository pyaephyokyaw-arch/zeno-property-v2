(function(){
var css='@media (max-width:860px){html body #navbar{display:grid!important;grid-template-columns:auto 1fr auto!important;gap:12px!important;padding:0 20px!important}html body #navbar .nav-left{display:none!important}html body #navbar .nav-right-group .nav-link,html body #navbar .nav-right-group a:not(.nav-cta-btn){display:none!important}html body #navbar .nav-right-group{gap:10px!important;justify-content:flex-end;min-width:0}html body #navbar .nav-center{justify-self:start}html body #navbar .nav-center svg{height:44px!important;width:auto}.nav-hamburger{display:flex!important}}'+
'@media (max-width:640px){html body #navbar{padding:0 16px!important;gap:8px!important}html body #navbar .nav-right-group .nav-cta-btn,html body #navbar .nav-right-group .nav-cta{display:none!important}html body #navbar .nav-center svg{height:40px!important}html body #navbar .lang-trigger{min-height:44px;padding:6px 10px!important}}'+
'@media (min-width:861px){.nav-hamburger{display:none!important}.nav-mobile-panel{display:none!important}}'+
'.nav-hamburger{align-items:center;justify-content:center;width:44px;height:44px;background:transparent;border:1px solid rgba(255,255,255,.14);border-radius:8px;cursor:pointer;flex-shrink:0;gap:4px;flex-direction:column;transition:background .14s ease}'+
'.nav-hamburger:hover{background:rgba(255,255,255,.06)}.nav-hamburger:active{transform:scale(.94)}'+
'.nav-hamburger span{display:block;width:18px;height:2px;background:var(--tp,#fff);border-radius:2px;transition:transform .16s ease,opacity .16s ease}'+
'.nav-hamburger.open span:nth-child(1){transform:translateY(6px) rotate(45deg)}'+
'.nav-hamburger.open span:nth-child(2){opacity:0}'+
'.nav-hamburger.open span:nth-child(3){transform:translateY(-6px) rotate(-45deg)}'+
'.nav-mobile-panel{position:fixed;top:var(--nav-h,72px);left:0;right:0;background:var(--bg,#090a0a);border-top:1px solid rgba(255,255,255,.1);box-shadow:0 20px 50px rgba(0,0,0,.5);z-index:199;max-height:0;overflow:hidden;visibility:hidden;transition:max-height .16s ease,visibility 0s .16s}'+
'.nav-mobile-panel.open{max-height:calc(100vh - var(--nav-h,72px));overflow-y:auto;visibility:visible;transition:max-height .16s ease}'+
'.nav-mobile-panel ul{list-style:none;display:flex;flex-direction:column;margin:0;padding:8px 20px 20px}'+
'.nav-mobile-panel li a{display:flex;align-items:center;min-height:52px;padding:0;font-family:var(--font-body,"Nunito Sans",sans-serif);font-size:16px;font-weight:700;color:var(--tp,#fff);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.06)}'+
'.nav-mobile-panel li a::after{display:none}'+
'.nav-mobile-panel .nav-mobile-cta{padding:0 20px 24px}'+
'.nav-mobile-panel .nav-mobile-cta a{display:flex;align-items:center;justify-content:center;min-height:48px;border-bottom:none;background:var(--brand-primary,#d38d29);color:#0b0c0d;font-weight:700;text-decoration:none;border-radius:8px}';
var style=document.createElement('style');style.textContent=css;document.head.appendChild(style);

function init(){
var nav=document.getElementById('navbar');
if(!nav) return;
var right=nav.querySelector('.nav-right-group');
var left=nav.querySelector('.nav-left');
if(!right||!left) return;

var burger=document.createElement('button');
burger.type='button';burger.className='nav-hamburger';burger.setAttribute('aria-label','Menu');burger.setAttribute('aria-expanded','false');burger.setAttribute('aria-controls','nav-mobile-panel');
burger.innerHTML='<span></span><span></span><span></span>';
right.parentNode.insertBefore(burger,right.nextSibling);

var panel=document.createElement('div');
panel.className='nav-mobile-panel';panel.id='nav-mobile-panel';
var ul=document.createElement('ul');
left.querySelectorAll('a').forEach(function(a){ul.appendChild(cloneLink(a));});
right.querySelectorAll('a:not(.nav-cta-btn)').forEach(function(a){ul.appendChild(cloneLink(a));});
panel.appendChild(ul);
var cta=right.querySelector('.nav-cta-btn');
if(cta){
  var ctaLi=document.createElement('div');
  ctaLi.className='nav-mobile-cta';
  ctaLi.appendChild(cloneLink(cta));
  panel.appendChild(ctaLi);
}
document.body.appendChild(panel);

function cloneLink(a){
  var li=document.createElement('li');
  var clone=a.cloneNode(true);
  li.appendChild(clone);
  return li;
}

burger.addEventListener('click',function(){
  var open=burger.classList.toggle('open');
  panel.classList.toggle('open',open);burger.setAttribute('aria-expanded',String(open));
});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&burger.classList.contains('open')){burger.classList.remove('open');panel.classList.remove('open');burger.setAttribute('aria-expanded','false');burger.focus();}});
window.addEventListener('resize',function(){if(window.innerWidth>860&&burger.classList.contains('open')){burger.classList.remove('open');panel.classList.remove('open');burger.setAttribute('aria-expanded','false');}});
panel.addEventListener('click',function(e){
  if(e.target.closest('a')){burger.classList.remove('open');panel.classList.remove('open');burger.setAttribute('aria-expanded','false');}
});
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
