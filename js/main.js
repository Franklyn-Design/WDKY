/* ── Nav dark mode (for dark-bg pages) ── */
const nav = document.querySelector('.nav');
const isDarkPage = document.body.dataset.navDark === 'true';
if (isDarkPage) nav.classList.add('nav--dark');

window.addEventListener('scroll', () => {
  if (!isDarkPage) return;
  nav.classList.toggle('nav--dark', window.scrollY < 80);
});

/* ── Mobile menu ── */
const burger = document.querySelector('.nav__burger');
const mobileNav = document.querySelector('.nav__mobile');
const mobileClose = document.querySelector('.nav__mobile-close');
burger?.addEventListener('click', () => mobileNav.classList.add('open'));
mobileClose?.addEventListener('click', () => mobileNav.classList.remove('open'));
document.querySelectorAll('.nav__mobile-link').forEach(l =>
  l.addEventListener('click', () => mobileNav.classList.remove('open'))
);

/* ── Active nav link ── */
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__link').forEach(l => {
  const href = l.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    l.classList.add('active');
  }
});

/* ── Scroll reveal ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── News filter (news page) ── */
document.querySelectorAll('.news-filter__btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.news-filter__btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

/* ── Contact form ── */
document.querySelector('.contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  const orig = btn.textContent;
  btn.textContent = '发送成功 ✓';
  btn.style.background = '#1d7a4f';
  setTimeout(() => { btn.textContent = orig; btn.style.background = ''; e.target.reset(); }, 3000);
});
