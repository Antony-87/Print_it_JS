console.log('Le fichier script.js est bien chargé');

const slides = [
    {
      image: "slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
      image: "slide2.jpg",
      tagLine: "Tirages haute définition grand format <span>pour vos bureaux et événements</span>",
    },
    {
      image: "slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
      image: "slide4.jpg",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
  ];
  
  let currentSlide = 0;
  
  const bannerImg = document.querySelector(".banner-img");
  const bannerText = document.querySelector("#banner p");
  const bulletContainer = document.querySelector(".dots");
  
  // Fonction pour mettre à jour l'image, le texte et le bullet point actif
  function updateSlide() {
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    bannerText.innerHTML = slides[currentSlide].tagLine;
  
    const bullets = document.querySelectorAll(".dot");
    bullets.forEach((bullet, index) => {
      bullet.classList.toggle("dot_selected", index === currentSlide);
    });
  }
  
  // Création des bullet points
  slides.forEach((slide, index) => {
    const bullet = document.createElement("span");
    bullet.classList.add("dot");
    if (index === currentSlide) {
      bullet.classList.add("dot_selected");
    }
    
    // Ajout d'un écouteur d'événements pour rendre les bullets cliquables
    bullet.addEventListener("click", () => {
        console.log("Bullet cliqué:", index); // Test visuel
      currentSlide = index;
      updateSlide();
    });
  
    bulletContainer.appendChild(bullet);
  });
  
  // Mise à jour initiale
  updateSlide();
  
  // Gestion des flèches
  document.querySelector(".arrow_right").addEventListener("click", () => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    updateSlide();
  });
  
  document.querySelector(".arrow_left").addEventListener("click", () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    updateSlide();
  });
  