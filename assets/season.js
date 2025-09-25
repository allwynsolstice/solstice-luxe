
// Solstice Luxe seasonal logic (external JS)
window.addEventListener('DOMContentLoaded', function(){
  try {
    const params = new URLSearchParams(location.search);
    const debug = params.get('debug') === '1';
    function log(...args){ if (debug) console.log('[SEASON]', ...args); }

    const sets = {
      winter: {
        destinations: [
          {title: 'St. Moritz, Switzerland', img: 'https://images.unsplash.com/photo-1516431883276-5a84acb31f17?q=80&w=1200&auto=format&fit=crop', alt:'Snowy Alps in St. Moritz'},
          {title: 'Kyoto, Japan', img: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1200&auto=format&fit=crop', alt:'Kyoto temple in winter'},
          {title: 'Aspen, USA', img: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1200&auto=format&fit=crop', alt:'Aspen ski slopes'}
        ],
        heroImg: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1400&auto=format&fit=crop',
        tagline: "Winter escapes, redefined.",
        sub: "Ski chalets, snowy retreats, and fireside luxury worldwide.",
        overlay: 'linear-gradient(rgba(135,206,250,0.25), rgba(0,0,50,0.3))',
        accent: '#8ecdf7'
      },
      spring: {
        destinations: [
          {title: 'Paris, France', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop', alt:'Eiffel Tower in spring'},
          {title: 'Kyoto, Japan', img: 'https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=1200&auto=format&fit=crop', alt:'Kyoto cherry blossoms'},
          {title: 'Tuscany, Italy', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop', alt:'Rolling hills in Tuscany'}
        ],
        heroImg: 'https://images.unsplash.com/photo-1508050919630-b135583b29ab?q=80&w=1400&auto=format&fit=crop',
        tagline: "Bloom into adventure.",
        sub: "From cherry blossoms in Kyoto to vineyards in Tuscany, spring is calling.",
        overlay: 'linear-gradient(rgba(255,182,193,0.25), rgba(0,50,0,0.25))',
        accent: '#f5a7b8'
      },
      summer: {
        destinations: [
          {title: 'Santorini, Greece', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop', alt:'Santorini caldera at sunset'},
          {title: 'Amalfi Coast, Italy', img: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=1200&auto=format&fit=crop', alt:'Amalfi Coast cliffs and sea'},
          {title: 'Maldives', img: 'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1200&auto=format&fit=crop', alt:'Maldives overwater villas'}
        ],
        heroImg: 'https://images.unsplash.com/photo-1493558157055-2df6f8b4bb78?q=80&w=1400&auto=format&fit=crop',
        tagline: "Seas the season.",
        sub: "Island paradises, coastal villas, and endless sunshine escapes.",
        overlay: 'linear-gradient(rgba(64,224,208,0.25), rgba(0,0,50,0.25))',
        accent: '#48d1cc'
      },
      autumn: {
        destinations: [
          {title: 'New York City, USA', img: 'https://images.unsplash.com/photo-1549921296-3a6b3c3d8be5?q=80&w=1200&auto=format&fit=crop', alt:'NYC skyline with autumn colors'},
          {title: 'Kyoto, Japan', img: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=1200&auto=format&fit=crop', alt:'Kyoto temple in autumn leaves'},
          {title: 'Marrakech, Morocco', img: 'https://images.unsplash.com/photo-1558980664-10a5d8fadf06?q=80&w=1200&auto=format&fit=crop', alt:'Marrakech souks and architecture'}
        ],
        heroImg: 'https://images.unsplash.com/photo-1549923786-9d7f2f0d1c2f?q=80&w=1400&auto=format&fit=crop',
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
