document.addEventListener('DOMContentLoaded', () => {
  // mobile nav
  const burger = document.getElementById('burger');
  const links = document.getElementById('navLinks');
  burger && burger.addEventListener('click', () => links.classList.toggle('open'));

  // course filters
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      const f = chip.dataset.filter;
      document.querySelectorAll('#courseCards .card').forEach(card => {
        const tags = (card.dataset.tags || '').split(' ');
        card.hidden = !(f === 'all' || tags.includes(f));
      });
    });
  });

  // testimonial carousel
  const quotes = [...document.querySelectorAll('.quote')];
  const dots = [...document.querySelectorAll('.dot')];
  let i = 0, timer;
  const show = n => {
    i = (n + quotes.length) % quotes.length;
    quotes.forEach((q, idx) => q.classList.toggle('is-active', idx === i));
    dots.forEach((d, idx) => d.classList.toggle('is-active', idx === i));
  };
  const start = () => { clearInterval(timer); timer = setInterval(() => show(i + 1), 6000); };
  dots.forEach((d, idx) => d.addEventListener('click', () => { show(idx); start(); }));
  start();

  // quiz modal
  const modal = document.getElementById('quizModal');
  const openModal = () => { modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); showStep(1); };
  const closeModal = () => { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); };
  const showStep = n => {
    [1,2,3].forEach(k => { const el = document.getElementById('quizStep'+k); if (el) el.hidden = k !== n; });
  };
  const quizBtn = document.getElementById('quizBtn');
  quizBtn && quizBtn.addEventListener('click', openModal);
  document.querySelectorAll('.js-close').forEach(b => b.addEventListener('click', closeModal));
  document.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => showStep(Number(b.dataset.next))));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});