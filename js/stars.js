const starsContainer = document.getElementById('stars');
const starCount = 50; // Increase or decrease as needed
for (let i = 0; i < starCount; i++) {
  const star = document.createElement('span');
  star.classList.add('star');
  // Randomize position within viewport
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 2 + 's';
  starsContainer.appendChild(star);
}