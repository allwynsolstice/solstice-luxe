
// Solstice Luxe seasonal logic (external JS)
window.addEventListener('DOMContentLoaded', function(){
  try {
    const params = new URLSearchParams(location.search);
    const debug = params.get('debug') === '1';
    function log(...args){ if (debug) console.log('[SEASON]', ...args); }

    
    const sets = {
      winter: {
        destinations: [
          {title: 'St. Moritz, Switzerland', img: 'https://source.unsplash.com/1600x900/?st-moritz,alps,snow', alt:'Snowy Alps in St. Moritz'},
          {title: 'Kyoto, Japan', img: 'https://source.unsplash.com/1600x900/?kyoto,winter,temple', alt:'Kyoto temple in winter'},
          {title: 'Aspen, USA', img: 'https://source.unsplash.com/1600x900/?aspen,skislope,snow', alt:'Aspen ski slopes'}
        ],
        heroImg: 'https://source.unsplash.com/1400x900/?alps,snow,panorama',
        tagline: "Winter escapes, redefined.",
        sub: "Ski chalets, snowy retreats, and fireside luxury worldwide.",
        overlay: 'linear-gradient(rgba(135,206,250,0.25), rgba(0,0,50,0.3))',
        accent: '#8ecdf7'
      },
      spring: {
        destinations: [
          {title: 'Paris, France', img: 'https://source.unsplash.com/1600x900/?paris,spring,eiffel', alt:'Eiffel Tower in spring'},
          {title: 'Kyoto, Japan', img: 'https://source.unsplash.com/1600x900/?kyoto,cherry-blossom,temple', alt:'Kyoto cherry blossoms'},
          {title: 'Tuscany, Italy', img: 'https://source.unsplash.com/1600x900/?tuscany,rolling-hills,vineyard', alt:'Rolling hills in Tuscany'}
        ],
        heroImg: 'https://source.unsplash.com/1400x900/?paris,blossom,city',
        tagline: "Bloom into adventure.",
        sub: "From cherry blossoms in Kyoto to vineyards in Tuscany, spring is calling.",
        overlay: 'linear-gradient(rgba(255,182,193,0.25), rgba(0,50,0,0.25))',
        accent: '#f5a7b8'
      },
      summer: {
        destinations: [
          {title: 'Santorini, Greece', img: 'https://source.unsplash.com/1600x900/?santorini,sunset,cliffs', alt:'Santorini caldera at sunset'},
          {title: 'Amalfi Coast, Italy', img: 'https://source.unsplash.com/1600x900/?amalfi,coast,italy', alt:'Amalfi Coast cliffs and sea'},
          {title: 'Maldives', img: 'https://source.unsplash.com/1600x900/?maldives,overwater,villa', alt:'Maldives overwater villas'}
        ],
        heroImg: 'https://source.unsplash.com/1400x900/?santorini,caldera,sea',
        tagline: "Seas the season.",
        sub: "Island paradises, coastal villas, and endless sunshine escapes.",
        overlay: 'linear-gradient(rgba(64,224,208,0.25), rgba(0,0,50,0.25))',
        accent: '#48d1cc'
      },
      autumn: {
        destinations: [
          {title: 'New York City, USA', img: 'https://source.unsplash.com/1600x900/?new-york,autumn,skyline', alt:'NYC skyline with autumn colors'},
          {title: 'Kyoto, Japan', img: 'https://source.unsplash.com/1600x900/?kyoto,autumn,temple', alt:'Kyoto temple in autumn leaves'},
          {title: 'Marrakech, Morocco', img: 'https://source.unsplash.com/1600x900/?marrakech,medina,architecture', alt:'Marrakech souks and architecture'}
        ],
        heroImg: 'https://source.unsplash.com/1400x900/?new-york,autumn,city',
        tagline: "Golden journeys await.",
        sub: "Fall foliage, cultural city breaks, and exotic autumn adventures.",
        overlay: 'linear-gradient(rgba(255,140,0,0.25), rgba(50,20,0,0.25))',
        accent: '#ff9f40'
      }
    };


    function detectSeason(){
      const qp = params.get('season');
      if (qp && sets[qp]) return qp;
      const m = new Date().getMonth();
      if (m === 11 || m === 0 || m === 1) return 'winter';
      if (m >= 2 && m <= 4) return 'spring';
      if (m >= 5 && m <= 7) return 'summer';
      return 'autumn';
    }

    const season = detectSeason();
    const data = sets[season];
    log('Detected season:', season);

    // Badge if debug=1
    if (debug) {
      const b = document.createElement('div');
      b.textContent = 'Season: ' + season;
      Object.assign(b.style, {
        position:'fixed', left:'12px', bottom:'12px', zIndex:'1000',
        background:'rgba(0,0,0,.6)', color:'white', padding:'6px 10px', borderRadius:'8px',
        font:'12px/1.2 Inter, system-ui, sans-serif'
      });
      document.body.appendChild(b);
    }

    // Destinations grid
    const grid = document.getElementById('destGrid');
    if (grid) {
      grid.innerHTML = data.destinations.map(d => `
        <a class="image-card" href="#">
          <img src="${d.img}" alt="${d.alt}">
          <div class="cap">${d.title}</div>
        </a>`
      ).join('');
      log('Destinations updated:', data.destinations.length);
    }

    // Hero
    const hero = document.querySelector('.hero-media');
    const overlay = document.querySelector('.hero-overlay');
    const h1 = document.querySelector('.hero .title');
    const sub = document.querySelector('.hero .subtitle');

    if (hero) { hero.style.backgroundImage = 'url(' + data.heroImg + ')'; log('Hero set'); }
    if (overlay) { overlay.style.background = data.overlay; log('Overlay set'); }
    if (h1 && sub) {
      h1.innerHTML = data.tagline + '<br><small style="display:block;margin-top:.4rem;font-family:Inter,sans-serif;font-weight:500;font-size:1rem;color:var(--muted)">Luxury travel made effortless</small>';
      sub.textContent = data.sub;
      log('Text set');
    }

    document.documentElement.style.setProperty('--season', data.accent);
    log('Accent set:', data.accent);
  } catch(e){
    console.error('[SEASON] Error', e);
  }
});
