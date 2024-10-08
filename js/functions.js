function changeLanguage(lang, flagSrc) {
    console.log(lang)
    document.getElementById('current-flag').src = flagSrc; // Update the current flag image

    // document.getElementById('hero-title').textContent = translations[lang].heroTitle;
    // document.getElementById('hero-subtitle').textContent = translations[lang].heroSubtitle;
    // document.getElementById('book-now').textContent = translations[lang].bookNow;
    // document.getElementById('about-title').textContent = translations[lang].aboutTitle;
    document.getElementById('about-text').textContent = translations[lang].aboutText;
  }





  //nav

  const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
console.log(mobileMenu)

    // Mobile menu toggle
    document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
      document.getElementById('mobile-menu').classList.toggle('hidden');
  });

  document.getElementById('close-menu').addEventListener('click', function() {
      document.getElementById('mobile-menu').classList.add('hidden');
  });

// Open Mobile Menu
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('scale-100');
});

// Close Mobile Menu
closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});



let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById('lightboxImage').src = images[currentIndex];
  document.getElementById('lightbox').classList.remove('hidden');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('lightboxImage').src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('lightboxImage').src = images[currentIndex];
}





 //Gallery

 function changeImage(src) {
    document.getElementById('mainImage').src = src;
}



//MAP

var map = L.map('map').setView([43.6913, 15.9188], 12); // Coordinates of Brodarica

// Add OpenStreetMap tiles to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker for Brodarica
L.marker([43.6829, 15.9203]).addTo(map)
.bindPopup('Brodarica')
.openPopup();

// Add a marker for Šibenik
L.marker([43.7369, 15.8950]).addTo(map)
.bindPopup('Šibenik')
.openPopup();