// script.js

// Greet user in console
window.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Pandey Ji Valorant Website!");
  
  // Animate navbar on scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#000";
      navbar.style.boxShadow = "0 2px 10px rgba(255, 70, 85, 0.8)";
    } else {
      navbar.style.backgroundColor = "#111";
      navbar.style.boxShadow = "0 2px 10px rgba(255, 70, 85, 0.5)";
    }
  });

  // Agent card click effect
  const cards = document.querySelectorAll(".agent-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      alert(`You clicked on ${card.querySelector("h3").textContent}!`);
    });
  });
});
