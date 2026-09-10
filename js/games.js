const mobileGames = [
    {
        name: "Flood Fill",
        image: "images/Floodfill banner.png"
    },
    {
        name: "Flood Fill",
        image: "images/Corousel/Floodfill.png"
    },
    {
        name: "Witchball Froine",
        image: "images/Corousel/Witchball Frontier.png"
    },
    {
        name: "Block Impact",
        image: "images/Corousel/Block impact.png"
    },
    {
        name: "Boom Castle",
        image: "images/Corousel/Balon.png"
    },
    {
        name: "Wild Balls",
        image: "images/Corousel/Wildball.png"
    }
];


const educationGames = [
    {
        name: "Ninja Math Quest",
        image: "images/Corousel/Matematika Ninja.png"
    },
    {
        name: "Ninja Math Quest",
        image: "images/Corousel/Matematika Ninja.png"
    },
    {
        name: "Digestive Inside Out",
        image: "images/Corousel/Biologi.png"
    },
    {
        name: "Periodium",
        image: "images/Corousel/Kimia Kartu.png"
    },
    {
        name: "Project K",
        image: "images/Preview Edugame/Project tk.png"
    },
    {
        name: "Equilibrium Shift",
        image: "images/Corousel/Kimia kesetimbangan.png"
    }
];


/* =========================================================
   CREATE GAME TILE
   ========================================================= */

function createGameTile(game) {
    return `
        <article class="game-tile">
            <img
                src="${game.image}"
                alt="${game.name}"
                loading="lazy"
            >
        </article>
    `;
}


/* =========================================================
   GALLERY
   ========================================================= */

function populateGallery(id, games) {

    const container = document.getElementById(id);

    if (!container) {
        return;
    }

    const featured = games[0];
    const thumbnails = games.slice(1, 5);

    container.innerHTML = `
        <div class="game-gallery-feature">
            ${createGameTile(featured)}

            <div class="game-gallery-description">
                ${
                    id === "mobile-games"
                    ? `
                        <p>
                            Floodfill is an endless strategic puzzle game
                            where players drag and drop colored pieces onto
                            a board. Tiles can be placed on top of other
                            tiles of the same color, transforming them into
                            higher-tiered new color.
                        </p>
                    `
                    : `
                        <p>
                            This educational game transforms
                            12th-grade topics of permutations,
                            combinations, and probability into a
                            ninja-themed adventure filled with
                            puzzles, where you must solve mathematical
                            challenges using strategy and precision.
                        </p>
                    `
                }

                <a href="#" class="games-play-button">
                    Play Now
                </a>
            </div>
        </div>

        <div class="game-gallery-side">

            <div class="game-gallery-grid">
                ${thumbnails.map(createGameTile).join("")}
            </div>

            <div class="game-pagination">
                <button class="active" type="button">1</button>
                <button type="button">2</button>
                <button type="button">3</button>
            </div>

        </div>
    `;
}


populateGallery("mobile-games", mobileGames);
populateGallery("education-games", educationGames);