// script.js — L'Alhambra
// Chargement dynamique du menu depuis menu.json, toggles UI, et gestion des boutons "Commander"

document.addEventListener('DOMContentLoaded', () => {
  // Fill year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle && navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('show');
  });

  // Order buttons link to a fake Uber Eats page
  const orderLink = 'https://www.ubereats.com/restaurant/fake-lalhambra';
  document.querySelectorAll('#orderBtn, #heroOrder, #orderBtn2, .order-btn').forEach(btn => {
    btn && btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(orderLink, '_blank');
    });
  });

  // Load menu.json
  const menuContainer = document.getElementById('menuContainer');
  fetch('menu.json').then(res => {
    if (!res.ok) throw new Error('Impossible de charger le menu');
    return res.json();
  }).then(data => {
    renderMenu(data);
  }).catch(err => {
    if (menuContainer) menuContainer.innerHTML = `<div class="loading">Erreur: ${err.message}</div>`;
    console.error(err);
  });
});

/**
 * Renders the menu into #menuContainer
 * Expected shape: { categories: [ { name, items: [ { id, name, description, price, image } ] } ] }
 */
function renderMenu(data){
  const container = document.getElementById('menuContainer');
  if (!container){ console.warn('menuContainer introuvable'); return; }

  container.innerHTML = '';
  if (!data || !Array.isArray(data.categories)){
    container.innerHTML = '<div class="loading">Menu vide</div>';
    return;
  }

  data.categories.forEach(cat => {
    const catBlock = document.createElement('div');
    catBlock.className = 'menu-category';
    const title = document.createElement('h3');
    title.textContent = cat.name;
    title.style.color = 'var(--accent)';
    container.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'menu-grid';

    cat.items.forEach(item => {
      const el = document.createElement('article');
      el.className = 'menu-item glass';

      const thumb = document.createElement('div');
      thumb.className = 'thumb';
  const img = document.createElement('img');
  img.alt = item.name;
  img.src = item.image || 'images/plats/placeholder.svg';
  // If image fails to load, use placeholder
  img.onerror = () => { img.src = 'images/plats/placeholder.svg'; };
      thumb.appendChild(img);

      const info = document.createElement('div');
      info.className = 'info';
      const h4 = document.createElement('h4');
      h4.textContent = item.name;
      const p = document.createElement('p');
      p.textContent = item.description || '';
      const price = document.createElement('div');
      price.className = 'price';
      price.textContent = item.price ? `${item.price.toFixed(2)} €` : '';

      info.appendChild(h4);
      info.appendChild(p);
      info.appendChild(price);

      el.appendChild(thumb);
      el.appendChild(info);

      grid.appendChild(el);
    });

    container.appendChild(grid);
  });
}
const UBER_EATS_URL = "https://www.ubereats.com/restaurant/fake-lalhambra"; // remplacer par le lien réel si nécessaire

// Si l'on veut ouvrir Uber Eats depuis d'autres handlers
function openUberEats(){ window.open(UBER_EATS_URL, '_blank'); }

// (Le chargement du menu est géré dans DOMContentLoaded -> renderMenu)
