document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.pv-toggle');
  const menu = document.querySelector('.pv-menu');
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    menu?.classList.toggle('open', !open);
  });

  const filters = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('[data-character]')];
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    const value = button.dataset.filter;
    cards.forEach(card => card.classList.toggle('hidden', value !== 'all' && card.dataset.publisher !== value && card.dataset.alignment !== value));
  }));
});
