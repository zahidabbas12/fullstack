const gallery = document.getElementById("gallery");

// Modal elements
const pokeModalEl = document.getElementById("pokeModal");
const pokeModal = new bootstrap.Modal(pokeModalEl);
const pokeModalLabel = document.getElementById("pokeModalLabel");
const pokeImg = document.getElementById("poke-img");
const pokeHeight = document.getElementById("poke-height");
const pokeWeight = document.getElementById("poke-weight");
const pokeAbilities = document.getElementById("poke-abilities");
const pokeStats = document.getElementById("poke-stats");

// Fetch first 50 Pokémon
fetch("https://pokeapi.co/api/v2/pokemon?limit=60")
  .then(res => res.json())
  .then(data => {
    data.results.forEach(pokemon => {
      fetch(pokemon.url)
        .then(res => res.json())
        .then(pokeData => {
          // Create Bootstrap card
          const col = document.createElement("div");
          col.classList.add("col-6", "col-md-3", "col-lg-2");

          col.innerHTML = `
            <div class="card h-100 text-center shadow-sm pokemon-card" style="cursor:pointer;">
              <img src="${pokeData.sprites.front_default}" class="card-img-top p-2" alt="${pokeData.name}">
              <div class="card-body p-2">
                <h6 class="card-title text-capitalize">${pokeData.name}</h6>
              </div>
            </div>
          `;

          // Add click listener
          col.querySelector(".pokemon-card").addEventListener("click", (e) => {
            showDetails(pokeData, e.currentTarget);
          });

          gallery.appendChild(col);
        });
    });
  });

function showDetails(pokeData, clickedCard) {
  // Fill modal data
  pokeModalLabel.textContent = pokeData.name.toUpperCase();
  pokeImg.src = pokeData.sprites.front_default;
  pokeImg.alt = pokeData.name;
  pokeHeight.textContent = pokeData.height;
  pokeWeight.textContent = pokeData.weight;
  pokeAbilities.textContent = pokeData.abilities.map(a => a.ability.name).join(", ");
  pokeStats.innerHTML = pokeData.stats
    .map(s => `<li>${s.stat.name}: ${s.base_stat}</li>`)
    .join("");

  // Show modal
  pokeModal.show();
}
