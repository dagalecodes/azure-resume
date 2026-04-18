async function loadVisitCount() {
  try {
    const res = await fetch('https://christian-resume-func.azurewebsites.net/api/VisitorCounter');
    const data = await res.json();
    document.getElementById('visit-count').textContent = data.count.toLocaleString();
  } catch(e) {
    document.getElementById('visit-count').textContent = '—';
  }
}
loadVisitCount();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});