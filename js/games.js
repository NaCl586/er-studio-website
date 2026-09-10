const gameSets = {
  "mobile-games": ["Flood Fill", "Witchball Froine", "Block Impact", "Boom Castle", "Wild Balls"],
  "education-games": ["Ninja Math Quest", "Digestive Inside Out", "Periodium", "Project K", "Equilibrium Shift"]
};

for (const [id, games] of Object.entries(gameSets)) {
  const container = document.getElementById(id);
  if (!container) continue;
  container.innerHTML = games.map(name => `
    <article class="game-tile">
      <div class="game-image">${name}</div>
      <div class="game-name">${name}</div>
    </article>
  `).join('');
}

const showcase = document.querySelector('#fun-games');
if (showcase) {
  showcase.innerHTML = `
    <div>
      <h2>Dice on <span>Delivery</span></h2>
      <p>A placeholder for the featured game artwork, description, and Play Now button.</p>
      <a class="btn" href="#">Play Now</a>
    </div>`;
}
