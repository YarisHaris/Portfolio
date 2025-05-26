// ==== Particle Animated Background (lines & dots) ====
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let w = window.innerWidth, h = window.innerHeight;
let particles = [];

function resizeCanvas() {
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function randomPos() {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6
  };
}

function makeParticles(n = 55) {
  particles = [];
  for (let i = 0; i < n; i++) particles.push(randomPos());
}
makeParticles();

function draw() {
  ctx.clearRect(0, 0, w, h);
  // Draw lines
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      let p1 = particles[i], p2 = particles[j];
      let dx = p1.x - p2.x, dy = p1.y - p2.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 145) {
        ctx.strokeStyle = "rgba(130,130,170," + (1 - dist / 150).toFixed(2) + ")";
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  }
  // Draw dots
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#2d47fc";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
  }
}

function update() {
  for (let p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;
  }
}
function animate() {
  update();
  draw();
  requestAnimationFrame(animate);
}
animate();

// === Animated Typing effect ===
const typingText = "Web Developer|AI Engineer|ML Enthusiast|Full Stack Dev|";
let i = 0, curr = "", j = 0, wait = 0;
const animatedSpan = document.querySelector(".animated-text");

function typeLoop() {
  if (!animatedSpan) return;
  if (typingText[j] === "|") {
    wait++;
    if (wait < 11) { requestAnimationFrame(typeLoop); return; }
    wait = 0; j = (j + 1) % typingText.length; curr = ""; animatedSpan.textContent = ""; requestAnimationFrame(typeLoop); return;
  }
  curr += typingText[j];
  animatedSpan.textContent = curr;
  j = (j + 1) % typingText.length;
  setTimeout(typeLoop, 110);
}
typeLoop();

// === Navbar Link Active & Smooth Scroll ===
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY || document.documentElement.scrollTop;
  sections.forEach((section, idx) => {
    if (
      section.offsetTop - 80 <= scrollPos &&
      section.offsetTop + section.offsetHeight - 80 > scrollPos
    ) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[idx].classList.add('active');
    }
  });
});

// Smooth scroll
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    }
  });
});
