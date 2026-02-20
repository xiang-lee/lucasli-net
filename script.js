// Page Scroll Animation
const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px" 
  }
);

for (const item of revealItems) {
  observer.observe(item);
}

// Easter Egg for kids who like coding
console.log(
  "%c Hey there! 👋 \n%c If you're reading this, you're a little geek too! \n Let's change the world with code! 🚀",
  "font-size: 24px; color: #0984e3; font-weight: bold;",
  "font-size: 16px; color: #636e72;"
);

// Simple interaction: Spin logo on click
const logo = document.querySelector('.logo');
if(logo) {
    logo.addEventListener('click', (e) => {
        logo.style.transition = 'transform 0.5s ease';
        logo.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            logo.style.transform = 'rotate(0deg)';
        }, 500);
    });
}
