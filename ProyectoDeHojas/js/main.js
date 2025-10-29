document.addEventListener('DOMContentLoaded', function() {
  // Menú hamburguesa
  const menuBtn = document.getElementById('menuBtn');
  const sideMenu = document.getElementById('sideMenu');
  if(menuBtn && sideMenu) {
    menuBtn.addEventListener('click', function() {
      sideMenu.style.display = sideMenu.style.display === 'block' ? 'none' : 'block';
    });
  }

  // Tabs de productos destacados
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      // Aquí podrías cambiar los productos mostrados según la tab
    });
  });

  // Partículas (bolitas) al hacer click en las tabs
  function spawnParticles(targetEl, count = 10) {
    if(!targetEl) return;
    // Respect user reduced motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = targetEl.getBoundingClientRect();
    // create particles relative to the button
    for (let i = 0; i < count; i++) {
      const p = document.createElement('span');
      p.className = 'particle';
      // center inside the button
      p.style.left = (rect.width / 2) + 'px';
      p.style.top = (rect.height / 2) + 'px';
      // random angle and distance
      const angle = Math.random() * Math.PI * 2;
      const dist = 36 + Math.random() * 64; // 36..100 px
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist * 0.8; // flatten vertical slightly
      p.style.setProperty('--tx', tx + 'px');
      p.style.setProperty('--ty', ty + 'px');
      // color variation
      const colors = ['#00bfff', '#7fe9ff', '#00d4ff', '#8fe3ff'];
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      targetEl.appendChild(p);
      // trigger animation
      // small timeout to ensure element inserted before animation class
      requestAnimationFrame(() => {
        p.classList.add('animate');
      });
      // cleanup
      p.addEventListener('animationend', () => {
        if (p && p.parentNode) p.parentNode.removeChild(p);
      });
      // safety remove after 1200ms
      setTimeout(() => { if (p && p.parentNode) p.parentNode.removeChild(p); }, 1200);
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // spawn particles from the clicked tab
      spawnParticles(tab, 12);
    });
  });
});
