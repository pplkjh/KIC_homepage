(function(){
  function qs(sel, root){ return (root||document).querySelector(sel); }
  document.addEventListener('click', function(e){
    var btn = e.target.closest('[data-kic-mobile-toggle]');
    if(!btn) return;
    var menu = qs('[data-kic-mobile-menu]');
    if(!menu) return;
    var isOpen = menu.getAttribute('data-open') === 'true';
    menu.setAttribute('data-open', (!isOpen).toString());
  });
})();