document.addEventListener('DOMContentLoaded', () => {
  // tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('is-active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('is-active'));
      tab.classList.add('is-active');
      document.getElementById(tab.dataset.tab).classList.add('is-active');
    });
  });

  // modal
  const modal = document.getElementById('modal');
  const open = () => { modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); };
  const close = () => { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); };
  document.querySelectorAll('.js-open-modal').forEach(b => b.addEventListener('click', e => { e.preventDefault(); open(); }));
  document.querySelectorAll('.js-close-modal').forEach(b => b.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  // demo form
  const form = document.getElementById('demo-form');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('form-ok').hidden = false;
    form.reset();
  });

  // instalment calculator
  const amount = document.getElementById('amount');
  const price = document.getElementById('calc-price');
  const monthly = document.getElementById('calc-monthly');
  const money = n => '£' + n.toFixed(2);
  if (amount) {
    const update = () => {
      const v = Number(amount.value);
      price.textContent = '£' + v;
      monthly.textContent = '3 × ' + money(v / 3);
      document.getElementById('hero-price').textContent = v;
    };
    amount.addEventListener('input', update);
    update();
  }
});