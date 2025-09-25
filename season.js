const hero = document.querySelector('.hero');
const heroText = document.getElementById('hero-text');
const grid = document.getElementById('dest-grid');

const seasons = {
  winter: {
    hero: 'assets/arnur-turpakpayev-oszml6EAR7M-unsplash.jpg',
    text: 'Discover Winter Escapes',
    destinations: [
      'assets/syra-mettier-cZi0MJksDlk-unsplash.jpg',
      'assets/tiplada-m-AufXnLwI4z4-unsplash.jpg',
      'assets/caleb-kastein-LNJGvTk3Sr8-unsplash.jpg'
    ]
  },
  spring: {
    hero: 'assets/josiah-ferraro-Sj5ClSe9A00-unsplash.jpg',
    text: 'Bloom into Spring Journeys',
    destinations: [
      'assets/john-towner-Hf4Ap1-ef40-unsplash.jpg',
      'assets/david-emrich-7BDfk08-agM-unsplash.jpg',
      'assets/lennart-hellwig-YQwVE8cpi4g-unsplash.jpg'
    ]
  },
  summer: {
    hero: 'assets/ryan-spencer-WJDR8_QxVR8-unsplash.jpg',
    text: 'Unwind with Summer Adventures',
    destinations: [
      'assets/tania-mousinho-vF0l0bqLRKY-unsplash.jpg',
      'assets/martin-katler-fchXL-NhDJw-unsplash.jpg',
      'assets/ishan-seefromthesky-DtWyp_4YEes-unsplash.jpg'
    ]
  },
  autumn: {
    hero: 'assets/luca-bravo-_QdFx92MO2U-unsplash.jpg',
    text: 'Fall for Autumn Wonders',
    destinations: [
      'assets/dan-gold-0H8qDwveRwk-unsplash.jpg',
      'assets/weichao-deng-6Bj6cNkqG64-unsplash.jpg',
      'assets/mehdi-el-marouazi-OZXMG7bQ-Kc-unsplash.jpg'
    ]
  }
};

function setSeason(season) {
  const data = seasons[season];
  hero.style.backgroundImage = `url(${data.hero})`;
  heroText.textContent = data.text;
  grid.innerHTML = '';
  data.destinations.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    grid.appendChild(img);
  });
}

// Rotate seasons automatically every 8s
const keys = Object.keys(seasons);
let i = 0;
setSeason(keys[i]);
setInterval(() => {
  i = (i + 1) % keys.length;
  setSeason(keys[i]);
}, 8000);
