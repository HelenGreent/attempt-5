const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 8000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = '30.10.2020 Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out and JOIN to us!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}
setInterval(breathAnimation, totalTime);

document.querySelector('.go-meetings').addEventListener('click',GO);
async function GO() {
const response = await fetch('place.html');
const html = await response.text();
document.querySelector('.retro-container').innerHTML = html;
}

document.querySelector('.Dres-Code').addEventListener('click',Dres_Code);
async function Dres_Code() {
const response = await fetch('images.html');
const html = await response.text();
document.querySelector('.retro-look').innerHTML = html;
}

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');
const currentYear = new Date().getFullYear();
const RetroTime = new Date(`October 30 ${currentYear} 20:00:00`);

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = RetroTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Run every second
setInterval(updateCountdown, 1000);