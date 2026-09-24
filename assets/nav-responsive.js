(function(){
var css='@media (max-width:860px){#navbar{grid-template-columns:auto 1fr auto;padding:0 20px}.nav-left{display:none}.nav-right-group .nav-link{display:none}.nav-right-group{gap:10px}.nav-hamburger{display:flex}}'+
'@media (min-width:861px){.nav-hamburger{display:none}.nav-mobile-panel{display:none!important}}'+
'.nav-hamburger{align-items:center;justify-content:center;width:36px;height:36px;background:transparent;border:1px solid rgba(255,255,255,.14);border-radius:8px;cursor:pointer;flex-shrink:0;gap:4px;flex-direction:column}'+
'.nav-hamburger span{display:block;width:16px;height:2px;background:var(--tp,#fff);border-radius:2px;transition:transform .2s,opacity .2s}'+
'.nav-hamburger.open span:nth-child(1){transform:translateY(6px) rotate(45deg)}'+
'.nav-hamburger.open span:nth-child(2){opacity:0}'+
'.nav-hamburger.open span:nth-child(3){transform:translateY(-6px) rotate(-45deg)}'+
'.nav-mobile-panel{position:fixed;top:var(--nav-h,72px);left:0;right:0;background:var(--bg,#0a0c0e);border-top:1px solid rgba(255,255,255,.1);box-shadow:0 20px 50px rgba(0,0,0,.5);z-index:199;max-height:0;overflow:hidden;transition:max-height .3s ease}'+
'.nav-mobile-panel.open{max-height:80vh;overflow-y:auto}'+
'.nav-mobile-panel ul{list-style:none;display:flex;flex-direction:column;padding:8px 20px 20px}'+
'.nav-mobile-panel li a{display:block;padding:14px 0;font-size:16px;font-weight:600;color:var(--tp,#fff);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.06)}'+
'.nav-mobile-panel .nav-mobile-cta{margin-top:14px}'+
'.nav-mobile-panel .nav-mobile-cta a{border-bottom:none;background:var(--pp,#d38d29);color:#fff;text-align:center;border-radius:9px;padding:12px}';
var style=document.createElement('style');style.textContent=css;document.head.appendChild(style);

function init(){
var nav=document.getElementById('navbar');
if(!nav) return;
var right=nav.querySelector('.nav-right-group');
var left=nav.querySelector('.nav-left');
if(!right||!left) return;

var burger=document.createElement('button');
burger.type='button';burger.className='nav-hamburger';burger.setAttribute('aria-label','Menu');
burger.innerHTML='<span></span><span></span><span></span>';
right.parentNode.insertBefore(burger,right.nextSibling);

var panel=document.createElement('div');
panel.className='nav-mobile-panel';
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
  panel.classList.toggle('open',open);
});
panel.addEventListener('click',function(e){
  if(e.target.tagName==='A'){burger.classList.remove('open');panel.classList.remove('open');}
});
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
