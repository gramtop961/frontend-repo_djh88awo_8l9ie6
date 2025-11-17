// SimEx – Static Demo interactions
(function(){
  const qs = (s, el=document) => el.querySelector(s);
  const qsa = (s, el=document) => Array.from(el.querySelectorAll(s));

  const pages = qsa('.page');
  const navButtons = qsa('[data-nav]');
  const mobileMenu = qs('#mobileMenu');
  const menuToggle = qs('.menu-toggle');

  function setActive(pageId){
    pages.forEach(p => p.classList.toggle('active', p.id === pageId));
    qsa('.nav-link').forEach(b => b.classList.toggle('active', b.dataset.nav === pageId));
    qsa('.mobile-link').forEach(b => b.classList.toggle('active', b.dataset.nav === pageId));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (mobileMenu) mobileMenu.style.display = 'none';
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pageId = btn.dataset.nav;
      if (pageId) setActive(pageId);
    });
  });

  // Admin tabs
  const tabBtns = qsa('.tab-btn');
  const tabPanels = qsa('.tab-panel');
  tabBtns.forEach(b => b.addEventListener('click', () => {
    const target = b.dataset.tab;
    tabBtns.forEach(x => x.classList.toggle('active', x === b));
    tabPanels.forEach(p => p.classList.toggle('active', p.id === 'tab-' + target));
  }));

  // Mobile menu toggle
  if (menuToggle && mobileMenu){
    menuToggle.addEventListener('click', () => {
      mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });
  }

  // Default
  setActive('landing');
})();
