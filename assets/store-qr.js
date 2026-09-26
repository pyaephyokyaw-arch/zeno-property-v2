/* ZENO store links + QR codes — single source for every page.
   Replace the two URLs below with the live store listings. */
window.ZENO_STORE_LINKS = window.ZENO_STORE_LINKS || {
  ios: 'https://apps.apple.com/mm/app/zeno-property/id0000000000',
  android: 'https://play.google.com/store/apps/details?id=com.zeno.property'
};
(function(){
  var L = window.ZENO_STORE_LINKS;
  var ICON = {
    ios: '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>',
    android: '<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.18 23.76c.3.17.64.22.98.15l12.08-6.98-2.61-2.61-10.45 9.44zm-1.8-20.4C1.14 3.7 1 4.08 1 4.56v14.88c0 .48.14.86.38 1.12l.06.06 8.34-8.34v-.2L1.44 3.3l-.06.06zm18.3 7.62l-2.37-1.37-2.93 2.93 2.93 2.93 2.39-1.38c.68-.39.68-1.03-.02-1.11zM4.16.24L16.24 7.22l-2.61 2.61L3.18.39c.34-.07.7-.02.98.15v-.3z"/></svg>'
  };
  var NAME = { ios: 'App Store', android: 'Google Play' };
  function svg(url){ var q = qrcode(0, 'M'); q.addData(url); q.make(); return q.createSvgTag({ cellSize: 4, margin: 0, scalable: true }); }
  function injectCss(){
    if (document.getElementById('zq-css')) return;
    var s = document.createElement('style'); s.id = 'zq-css';
    s.textContent = '.zq-pair{display:flex;gap:10px;justify-content:center;align-items:flex-start;flex-wrap:wrap}' +
      '.zq{margin:0;display:flex;flex-direction:column;align-items:center;gap:6px}' +
      '.zq-code{display:block;aspect-ratio:1;background:#fff;border-radius:8px;padding:6px;box-sizing:border-box}' +
      '.zq-code svg{display:block;width:100%;height:100%}' +
      '.zq figcaption{display:flex;align-items:center;gap:5px;font-family:var(--font-body,"Nunito Sans",sans-serif);font-size:12px;font-weight:700;line-height:1.2;color:var(--tp,#f7f9fa);white-space:nowrap}' +
      '.zq-on-light .zq figcaption{color:#0b0c0d}.zq-on-light .zq-code{padding:0}';
    document.head.appendChild(s);
  }
  function isLightBg(el){
    for (var n = el.parentElement; n && n !== document.documentElement; n = n.parentElement) {
      var cs = getComputedStyle(n), m = cs.backgroundColor.match(/[\d.]+/g);
      if (m && (m.length < 4 || +m[3] > 0.5)) return (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) > 160;
      if (cs.backgroundImage && cs.backgroundImage !== 'none' && /255, 255, 255|#fff/i.test(cs.backgroundImage)) return true;
    }
    return false;
  }
  function run(){
    // Store links
    document.querySelectorAll('[data-store]').forEach(function(a){ if (L[a.dataset.store]) { a.href = L[a.dataset.store]; a.target = '_blank'; a.rel = 'noopener'; } });
    document.querySelectorAll('a[href="#"]').forEach(function(a){
      var t = a.textContent.replace(/\s+/g, ' ');
      var os = /App Store/i.test(t) ? 'ios' : /Google Play/i.test(t) ? 'android' : null;
      if (os) { a.href = L[os]; a.target = '_blank'; a.rel = 'noopener'; }
    });
    if (typeof qrcode !== 'function') return;
    injectCss();
    // Explicit QR slots (download page)
    document.querySelectorAll('[data-qr]').forEach(function(el){ if (L[el.dataset.qr]) el.innerHTML = svg(L[el.dataset.qr]); });
    // Replace every single placeholder QR with an App Store + Google Play pair
    document.querySelectorAll('img[src*="qr-placeholder.svg"]').forEach(function(img){
      var w = Math.round(img.getBoundingClientRect().width) || parseInt(getComputedStyle(img).width, 10) || 100;
      w = Math.max(88, Math.min(w, 128));
      var pair = document.createElement('div');
      pair.className = 'zq-pair ' + img.className;
      pair.setAttribute('role', 'group'); pair.setAttribute('aria-label', 'Scan to download the ZENO app');
      pair.style.cssText = 'width:auto;height:auto;padding:0;border:0;background:none;box-shadow:none';
      ['ios', 'android'].forEach(function(os){
        var f = document.createElement('figure'); f.className = 'zq';
        f.innerHTML = '<span class="zq-code" role="img" aria-label="QR code for ZENO on ' + NAME[os] + '" style="width:' + w + 'px">' + svg(L[os]) + '</span><figcaption>' + ICON[os] + NAME[os] + '</figcaption>';
        pair.appendChild(f);
      });
      img.replaceWith(pair);
      if (isLightBg(pair)) pair.classList.add('zq-on-light');
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
