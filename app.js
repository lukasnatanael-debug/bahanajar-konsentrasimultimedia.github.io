// Toggle menu mobile
const btn = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (btn && nav){
  btn.addEventListener('click', ()=>{
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Filter kartu tutorial
const search = document.getElementById('search');
const level = document.getElementById('level');
const cards = document.querySelectorAll('#cards .card');

function applyFilter(){
  const q = (search?.value || '').toLowerCase();
  const lv = level?.value || '';
  cards.forEach(card=>{
    const tags = (card.getAttribute('data-tags')||'').toLowerCase();
    const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
    const cardLv = card.getAttribute('data-level') || '';
    const matchText = title.includes(q) || tags.includes(q);
    const matchLevel = !lv || lv===cardLv;
    card.style.display = (matchText && matchLevel) ? '' : 'none';
  });
}
search?.addEventListener('input', applyFilter);
level?.addEventListener('change', applyFilter);
