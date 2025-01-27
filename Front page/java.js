// JavaScript for Stars Animation and Fun Facts

// Simulate dynamic numbers for fun facts
const starsCount = document.getElementById('stars-count');
const universeAge = document.getElementById('universe-age');

function animateNumbers(element, targetNumber, duration) {
  let start = 0;
  const increment = targetNumber / (duration / 50);
  const interval = setInterval(() => {
    start += increment;
    if (start >= targetNumber) {
      start = targetNumber;
      clearInterval(interval);
    }
    element.textContent = Math.round(start).toLocaleString();
  }, 50);
}

// Trigger animations when page loads
window.addEventListener('DOMContentLoaded', () => {
  animateNumbers(starsCount, 100000000000, 3000); // Example: Animate to 100 billion
  animateNumbers(universeAge, 13800000000, 3000); // Example: Animate to 13.8 billion
});

// Parallax Effect for Stars Animation
window.onload = () => {
  const stars = document.getElementById('stars');
  const stars2 = document.getElementById('stars2');
  const stars3 = document.getElementById('stars3');

  window.addEventListener('scroll', () => {
    let value = window.scrollY;
    stars.style.transform = `translateY(${value * 0.1}px)`;
    stars2.style.transform = `translateY(${value * 0.2}px)`;
    stars3.style.transform = `translateY(${value * 0.3}px)`;
  });
};
