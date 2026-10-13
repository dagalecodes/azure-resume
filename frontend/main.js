// ============================================
// VISITOR COUNTER — Azure Function → Cosmos DB
// ============================================
const COUNTER_URL = 'https://christian-resume-func.azurewebsites.net/api/VisitorCounter';

async function loadVisitCount() {
  const el = document.getElementById('visit-count');
  try {
    const res = await fetch(COUNTER_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    el.textContent = Number(data.count).toLocaleString();
  } catch (e) {
    console.error('Visitor counter failed:', e);
    el.textContent = '—';
  }
}
loadVisitCount();

// ============================================
// ACTIVE TAB — highlight the section in view
// (smooth scrolling + sticky offset are handled in CSS)
// ============================================
const tabs = document.querySelectorAll('.tabs a');
const sections = [...tabs]
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

function setActive(id) {
  tabs.forEach(a => {
    const on = a.getAttribute('href') === `#${id}`;
    a.classList.toggle('active', on);
    if (on) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
    // keep the active tab visible in the swipeable bar on phones
    const bar = a.parentElement;
    if (on && bar.scrollWidth > bar.clientWidth) {
      bar.scrollTo({ left: a.offsetLeft - bar.clientWidth / 2 + a.offsetWidth / 2, behavior: 'smooth' });
    }
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => observer.observe(s));
}
