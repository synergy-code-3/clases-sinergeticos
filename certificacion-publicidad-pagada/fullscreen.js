/* Botón de pantalla completa — compartido por todos los decks de la certificación.
   Crea su propio botón (esquina superior izquierda) y se encarga del toggle. Tecla: F */
(function () {
  var EXPAND  = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3"/></svg>';
  var COMPRESS = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3m13-5h-3a2 2 0 0 0-2 2v3"/></svg>';

  var btn = document.createElement('button');
  btn.setAttribute('aria-label', 'Pantalla completa');
  btn.title = 'Pantalla completa (F)';
  btn.innerHTML = EXPAND;
  var s = btn.style;
  s.position = 'fixed'; s.top = '20px'; s.left = '22px'; s.zIndex = '150';
  s.width = '44px'; s.height = '44px'; s.padding = '0'; s.borderRadius = '50%';
  s.border = '1px solid rgba(0,0,0,.12)';
  s.background = 'rgba(255,255,255,.7)';
  s.backdropFilter = 'blur(8px)'; s.webkitBackdropFilter = 'blur(8px)';
  s.color = '#6E665B'; s.cursor = 'pointer';
  s.display = 'flex'; s.alignItems = 'center'; s.justifyContent = 'center';
  s.transition = 'opacity .2s, color .2s'; s.opacity = '.5';

  function fsEl() { return document.fullscreenElement || document.webkitFullscreenElement; }
  function refresh() {
    var on = !!fsEl();
    btn.innerHTML = on ? COMPRESS : EXPAND;
    btn.style.opacity = on ? '1' : '.5';
  }
  function toggle() {
    if (fsEl()) {
      (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    } else {
      var el = document.documentElement;
      (el.requestFullscreen || el.webkitRequestFullscreen).call(el);
    }
  }
  btn.addEventListener('mouseenter', function () { btn.style.opacity = '1'; btn.style.color = '#15110D'; });
  btn.addEventListener('mouseleave', function () { btn.style.color = '#6E665B'; refresh(); });
  btn.addEventListener('click', toggle);
  document.addEventListener('fullscreenchange', refresh);
  document.addEventListener('webkitfullscreenchange', refresh);
  document.addEventListener('keydown', function (e) {
    if (e.key && e.key.toLowerCase() === 'f' && !e.metaKey && !e.ctrlKey && !e.altKey) { e.preventDefault(); toggle(); }
  });

  document.body.appendChild(btn);
})();
