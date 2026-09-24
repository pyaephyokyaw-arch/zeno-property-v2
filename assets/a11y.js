(function(){
  function ready(fn){document.readyState!=='loading'?fn():document.addEventListener('DOMContentLoaded',fn);}
  ready(function(){
    // Clickable cards: keyboard + role
    document.querySelectorAll('[onclick]:not(a):not(button):not(input):not(select)').forEach(function(el){
      if(!el.hasAttribute('tabindex'))el.setAttribute('tabindex','0');
      if(!el.hasAttribute('role'))el.setAttribute('role','link');
      el.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target===el){e.preventDefault();el.click();}});
    });
    // Decorative canvases / orbs
    document.querySelectorAll('canvas,.hero-orb,[id$="-mount"]').forEach(function(el){el.setAttribute('aria-hidden','true');});
    // Emoji-only icon boxes are decorative
    var emoji=/^[\s\p{Extended_Pictographic}\uFE0F\u200D\u{1F1E6}-\u{1F1FF}]+$/u;
    document.querySelectorAll('div,span').forEach(function(el){if(el.children.length===0){var t=el.textContent;if(t.trim()&&t.length<12&&emoji.test(t))el.setAttribute('aria-hidden','true');}});
    // Current page in nav
    var here=location.pathname.split('/').pop()||'zeno-landing.html';
    document.querySelectorAll('#navbar a[href]').forEach(function(a){var h=a.getAttribute('href').split('#')[0];if(h&&h===here&&!a.classList.contains('nav-logo-link'))a.setAttribute('aria-current','page');});
    // Placeholder links: announce as unavailable instead of jumping to top
    document.querySelectorAll('a[href="#"]').forEach(function(a){if(a.getAttribute('onclick'))return;a.addEventListener('click',function(e){e.preventDefault();});});
    // External links
    document.querySelectorAll('a[target="_blank"]').forEach(function(a){if(!/noopener/.test(a.rel))a.rel=(a.rel+' noopener noreferrer').trim();});
  });
})();
