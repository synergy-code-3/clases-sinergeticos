/* Certificación en Publicidad y Ads — navegación + guion del orador (compartido) */
const slides   = Array.from(document.querySelectorAll('.slide'));
const dotsEl   = document.getElementById('dots');
const progress = document.getElementById('progress');
const counter  = document.getElementById('counter');
const prevBtn  = document.getElementById('prevBtn');
const nextBtn  = document.getElementById('nextBtn');
const notesBtn = document.getElementById('notesBtn');
const drawer   = document.getElementById('notesDrawer');
const ndBody   = document.getElementById('ndBody');
const ndSlide  = document.getElementById('ndSlide');
const ndClose  = document.getElementById('ndClose');
const total    = slides.length;
let current = 0, animating = false, notesOpen = false;

slides.forEach((s, i) => {
  const d = document.createElement('div');
  d.className = 'dot' + (i === 0 ? ' active' : '') + (s.classList.contains('divider') ? ' div' : '');
  d.addEventListener('click', () => goTo(i));
  dotsEl.appendChild(d);
});

function goTo(idx) {
  if (animating || idx === current || idx < 0 || idx >= total) return;
  animating = true;
  const prev = slides[current];
  prev.classList.remove('active'); prev.classList.add('exit');
  current = idx;
  slides[current].classList.add('active');
  setTimeout(() => { prev.classList.remove('exit'); animating = false; }, 440);
  updateUI();
  if (notesOpen) renderNotes();
}
function navigate(dir) { goTo(current + dir); }

function updateUI() {
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
  progress.style.width = ((current + 1) / total * 100) + '%';
  counter.textContent  = (current + 1) + ' / ' + total;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === total - 1;
}

function renderNotes() {
  const src = slides[current].querySelector('.sn');
  ndBody.innerHTML = src ? src.innerHTML : '<p>— Sin notas para esta diapositiva —</p>';
  ndSlide.textContent = (current + 1) + ' / ' + total;
  ndBody.scrollTop = 0;
}
function toggleNotes(force) {
  notesOpen = (force === undefined) ? !notesOpen : force;
  drawer.classList.toggle('open', notesOpen);
  notesBtn.classList.toggle('on', notesOpen);
  if (notesOpen) renderNotes();
}

notesBtn.addEventListener('click', () => toggleNotes());
ndClose.addEventListener('click', () => toggleNotes(false));
prevBtn.addEventListener('click', () => navigate(-1));
nextBtn.addEventListener('click', () => navigate(1));

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); navigate(1); }
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { e.preventDefault(); navigate(-1); }
  if (e.key === ' ' && !notesOpen) { e.preventDefault(); navigate(1); }
  if (e.key.toLowerCase() === 'g') { e.preventDefault(); toggleNotes(); }
  if (e.key === 'Escape' && notesOpen) toggleNotes(false);
});

let tx = 0, ty = 0;
document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - tx;
  const dy = e.changedTouches[0].clientY - ty;
  if (Math.abs(dx) > 56 && Math.abs(dx) > Math.abs(dy)) navigate(dx < 0 ? 1 : -1);
});

updateUI();
