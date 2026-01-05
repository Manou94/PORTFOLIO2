// Animation simple du formulaire
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Merci pour votre message ! Je vous répondrai très bientôt.');
  this.reset();
});

// ===== FORMULAIRE =====
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Merci pour votre message ! Je vous répondrai très bientôt.');
  this.reset();
});

// ===== NEIGE =====
function createSnowflakes() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.innerHTML = '❄';
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = (3 + Math.random() * 5) + 's';
  snowflake.style.fontSize = (10 + Math.random() * 20) + 'px';
  document.body.appendChild(snowflake);

  setTimeout(() => { snowflake.remove(); }, 8000);
}
setInterval(createSnowflakes, 200);

// ===== FEUX D’ARTIFICE =====
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework(x, y, colors) {
  const count = 100;
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 5 + 2;
    particles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 0.01;
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI);
    ctx.fill();
    if (p.alpha <= 0) particles.splice(i, 1);
  });
  requestAnimationFrame(animateFireworks);
}

// Lancer des feux d’artifice périodiquement
setInterval(() => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  const colors = ['#ff7675', '#74b9ff', '#ffeaa7', '#55efc4', '#fd79a8'];
  createFirework(x, y, colors);
}, 3000);

animateFireworks();

// Ajuster le canevas à la taille de l’écran
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
