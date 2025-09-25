
window.addEventListener('DOMContentLoaded', function(){
  try {
    const params = new URLSearchParams(location.search);
    const debug = params.get('debug') === '1';
    function log(...args){ if (debug) console.log('[SEASON]', ...args); }

    const sets = {
      winter: {
        destinations: [
          {title: 'St. Moritz, Switzerland', img: 'assets/destinations/winter-1.jpg', alt:'Snowy Alps in St. Moritz'},
          {title: 'Kyoto, Japan', img: 'assets/destinations/winter-2.jpg', alt:'Kyoto temple in winter'},
          {title: 'Aspen, USA', img: 'assets/destinations/winter-3.jpg', alt:'Aspen ski slopes'}
        ],
        heroImg: 'assets/hero-winter.jpg',
        tagline: "Winter escapes, redefined.",
        sub: "Ski chalets, snowy retreats, and fireside luxury worldwide.",
        overlay: 'linear-gradient(rgba(135,206,250,0.25), rgba(0,0,50,0.3))',
        accent: '#8ecdf7'
      },
      spring: {
        destinations: [
          {title: 'Paris, France', img: 'assets/destinations/spring-1.jpg', alt:'Eiffel Tower in spring'},
          {title: 'Kyoto, Japan', img: 'assets/destinations/spring-2.jpg', alt:'Kyoto cherry blossoms'},
          {title: 'Tuscany, Italy', img: 'assets/destinations/spring-3.jpg', alt:'Rolling hills in Tuscany'}
        ],
        heroImg: 'assets/hero-spring.jpg',
        tagline: "Bloom into adventure.",
        sub: "From cherry blossoms in Kyoto to vineyards in Tuscany, spring is calling.",
        overlay: 'linear-gradient(rgba(255,182,193,0.25), rgba(0,50,0,0.25))',
        accent: '#f5a7b8'
      },
      summer: {
        destinations: [
          {title: 'Santorini, Greece', img: 'assets/destinations/summer-1.jpg', alt:'Santorini caldera at sunset'},
          {title: 'Amalfi Coast, Italy', img: 'assets/destinations/summer-2.jpg', alt:'Amalfi Coast cliffs and sea'},
          {title: 'Maldives', img: 'assets/destinations/summer-3.jpg', alt:'Maldives overwater villas'}
        ],
        heroImg: 'assets/hero-summer.jpg',
        tagline: "Seas the season.",
        sub: "Island paradises, coastal villas, and endless sunshine escapes.",
        overlay: 'linear-gradient(rgba(64,224,208,0.25), rgba(0,0,50,0,25))',
        accent: '#48d1cc'
      },
      autumn: {
        destinations: [
          {title: 'New York City, USA', img: 'assets/destinations/autumn-1.jpg', alt:'NYC skyline with autumn colors'},
          {title: 'Kyoto, Japan', img: 'assets/destinations/autumn-2.jpg', alt:'Kyoto temple in autumn leaves'},
          {title: 'Marrakech, Morocco', img: 'assets/destinations/autumn-3.jpg', alt:'Marrakech souks and architecture'}
        ],
        heroImg: 'assets/hero-autumn.jpg',
        tagline: "Golden journeys await.",
        sub: "Fall foliage, cultural city breaks, and exotic autumn adventures.",
        overlay: 'linear-gradient(rgba(255,140,0,0.25), rgba(50,20,0,0.25))',
        accent: '#ff9f40'
      }
    };

    function season(){
      const qp = new URLSearchParams(location.search).get('season');
      if (qp && sets[qp]) return qp;
      const m = new Date().getMonth();
      if (m === 11 || m === 0 || m === 1) return 'winter';
      if (m >= 2 && m <= 4) return 'spring';
      if (m >= 5 && m <= 7) return 'summer';
      return 'autumn';
    }

    const key = season();
    const data = sets[key];
    if (debug) {
      const b = document.createElement('div');
      b.textContent = 'Season: ' + key;
      Object.assign(b.style, {position:'fixed',left:'12px',bottom:'12px',zIndex:'9999',background:'rgba(0,0,0,.6)',color:'#fff',padding:'6px 10px',borderRadius:'8px',font:'12px Inter,sans-serif'});
      document.body.appendChild(b);
    }

    // Destinations
    const grid = document.getElementById('destGrid');
    if (grid) {
      grid.innerHTML = data.destinations.map(d => `
        <a class="image-card" href="#">
          <img src="${d.img}" alt="${d.alt}">
          <div class="cap">${d.title}</div>
        </a>`).join('');
      log('Destinations set:', data.destinations.length);
    }

    // Hero pieces
    const hero = document.querySelector('.hero-media');
    const overlay = document.querySelector('.hero-overlay');
    const h1 = document.querySelector('.hero .title');
    const sub = document.querySelector('.hero .subtitle');

    if (hero) hero.style.backgroundImage = 'url(' + data.heroImg + ')';
    if (overlay) overlay.style.background = data.overlay;
    if (h1 && sub) {
      h1.innerHTML = data.tagline + '<br><small style="display:block;margin-top:.4rem;font-family:Inter,sans-serif;font-weight:500;font-size:1rem;color:var(--muted)">Luxury travel made effortless</small>';
      sub.textContent = data.sub;
    }

    document.documentElement.style.setProperty('--season', data.accent);
  } catch(e){ console.error('[SEASON]', e); }
});
