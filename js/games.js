/* =========================================================
   GAMES DATA
   ========================================================= */

const mobileGames = [
    {
        name: "Floodfill",
        screenshot: "images/Corousel/Floodfill.png",
        icon: "images/Corousel/icon/FloodFill.png",
        link: "https://forgehub.id/game/floodfill"
    },

    {
        name: "Block Impact",
        screenshot: "images/Corousel/Block impact.png",
        icon: "images/Corousel/icon/Block impact.png",
        link: "https://forgehub.id/game/block-impact"
    },

    {
        name: "Boom Castle",
        screenshot: "images/Corousel/Balon.png",
        icon: "images/Corousel/icon/boom caste.png",
        link: "https://forgehub.id/game/boom-castle"
    },

    {
        name: "Wild Balls",
        screenshot: "images/Corousel/Wildball.png",
        icon: "images/Corousel/icon/Wild balls.png",
        link: "https://nacl586.itch.io/wild-balls"
    },

    {
        name: "Witchball Froine",
        screenshot: "images/Corousel/Witchball.png",
        icon: "images/Corousel/icon/Witchball.png",
        link: "https://nacl586.itch.io/witchballfroine"
    }
];


const educationGames = [
    {
        name: "Ninja Math Quest",
        screenshot: "images/Preview Edugame/Mtk.png",
        icon: "images/Corousel/icon/mtk.png"
    },

    {
        name: "Vector Rouge: Petualangan Vektor",
        screenshot: "images/Preview Edugame/Fisika.png",
        icon: "images/Corousel/icon/Fisika vektor.png"
    },

    {
        name: "Periodium",
        screenshot: "images/Preview Edugame/Kimia Kartu.png",
        icon: "images/Corousel/icon/kimia kartu.png"
    },

    {
        name: "Equilibrium Shift",
        screenshot: "images/Preview Edugame/Kimia kesetimbangan.png",
        icon: "images/Corousel/logo/kimia  kesetimbangan.png"
    },

    {
        name: "Project TK",
        screenshot: "images/Preview Edugame/Project tk.png",
        icon: "images/Corousel/logo/project tk.png"
    },

    {
        name: "Digestive Inside Out",
        screenshot: "images/Preview Edugame/Biologi.png",
        icon: "images/Corousel/logo/biologi.png"
    }
];


/* =========================================================
   GAME DESCRIPTIONS
   ========================================================= */

const gameDescriptions = {

    "Floodfill": `
        FloodFill is an endless strategic puzzle game where players drag and drop color-coded pieces onto a board. Tiles can be placed on top of other tiles of the same color, transforming them into a higher-tiered new color. 
    `,

    "Witchball Froine": `
        A ball-rolling game controller by swipe to guide Froine, a magial witch, in her adventure.
    `,

    "Block Impact": `
        Block Impact is a fun 3D brick breaker game where you control a paddle to bounce a ball and destroy colorful blocks. Clear every level, keep the ball in play, and chase higher scores with precise timing.
    `,

    "Boom Castle": `
        Boom Castle is a fast-paced arcade game where you control a cannon to defend your castle from waves of incoming balloons. 
    `,

    "Wild Balls": `
        A puzzle game where you tilt your device to roll ballshaped animals to their food bowl.
    `,

    "Ninja Math Quest": `
        This educational game transforms 12th-grade topics of permutations, combinations, and probability into a ninja-themed adventure filled with puzzles, where you must solve mathematical challenges using strategy and precision to achieve victory.
    `,

    "Digestive Inside Out": `
        Explore a unique office building where each floor is designed to resemble a human digestive organ, challenging you to visit key locations and discover each stage of the digestive process in an engaging and interactive way.
    `,

    "Periodium": `
        This educational card game brings each chemical element to life based on its periodic properties, such as atomic radius, ionization energy, and electronegativity. Test your creativity 
and logic against the clock to achieve the highest score possible!
    `,

    "Project K": `
        In this game, players complete simple interactive activities such as tapping the screen, dragging and dropping objects, and drawing lines or shapes to solve various educational puzzles and challenges.
    `,

    "Equilibrium Shift": `
        An educational puzzle game based on the chemical equilibrium topic in 11th-grade chemistry, where players must manipulate reaction conditions to achieve specific equilibrium objectives.
    `,

    "Vector Rouge: Petualangan Vektor": `
        This educational roguelike game that turns vector addition and subtraction into a fun strategic challenge. Choose and combine vectors to match target vectors, overcome increasingly difficult challenges, and progress through a series of domains with different vector types and enemies. Players must think carefully about direction, magnitude, and combinations to find the right resultant vector.
    `,
};


/* =========================================================
   GALLERY SETTINGS
   ========================================================= */

/*
 * Maximum number of games on one page.
 */
const GAMES_PER_PAGE = 4;


/*
 * Stores the state of each gallery independently.
 */
const galleryStates = {};


/* =========================================================
   GET GAME DESCRIPTION
   ========================================================= */

function getGameDescription(game) {

    return gameDescriptions[game.name] ||
        "Explore this game from Education Reinvented Studio.";
}


/* =========================================================
   CREATE GAME ICON
   ========================================================= */

function createGameTile(game, isActive) {

    return `
        <article
            class="game-tile ${isActive ? "active" : ""}"
            data-game-name="${game.name}"
            tabindex="0"
            role="button"
            aria-label="Select ${game.name}"
        >

            <img
                src="${game.icon}"
                alt="${game.name}"
                loading="lazy"
            >

        </article>
    `;
}


/* =========================================================
   CREATE PAGINATION
   ========================================================= */

function createPaginationButtons(id, games) {

    /*
     * Automatically calculate the number of pages.
     *
     * 5 games -> 2 pages
     * 6 games -> 2 pages
     * 8 games -> 2 pages
     * 9 games -> 3 pages
     */
    const pageCount = Math.ceil(
        games.length / GAMES_PER_PAGE
    );


    let html = "";


    for (let page = 0; page < pageCount; page++) {

        const active =
            galleryStates[id].page === page
                ? "active"
                : "";


        html += `
            <button
                class="${active}"
                type="button"
                data-page="${page}"
                aria-label="Go to page ${page + 1}"
            >
                ${page + 1}
            </button>
        `;
    }


    return html;
}


/* =========================================================
   RENDER GALLERY
   ========================================================= */

function renderGallery(id) {

    const container =
        document.getElementById(id);


    if (!container) {
        return;
    }


    /*
     * Get the correct game array.
     */
    const games =
        id === "mobile-games"
            ? mobileGames
            : educationGames;


    const state =
        galleryStates[id];


    /*
     * Calculate which games belong to
     * the current page.
     */
    const startIndex =
        state.page * GAMES_PER_PAGE;


    const pageGames =
        games.slice(
            startIndex,
            startIndex + GAMES_PER_PAGE
        );


    /*
     * Safety check.
     */
    if (pageGames.length === 0) {
        return;
    }


    /*
     * Make sure the selected index is
     * valid for this page.
     */
    if (
        state.featuredIndex < 0 ||
        state.featuredIndex >= pageGames.length
    ) {

        state.featuredIndex = 0;
    }


    /*
     * Get the featured game.
     */
    const featured =
        pageGames[state.featuredIndex];


    /*
     * IMPORTANT:
     *
     * DO NOT remove the featured game
     * from the thumbnail list.
     *
     * All games on the page remain visible
     * as icons.
     */
    const thumbnails =
        pageGames;


    /* =====================================================
       BUILD HTML
       ===================================================== */

    container.innerHTML = `

        <div class="game-gallery-feature">

            <div class="game-gallery-feature-image">
                <article class="game-tile">

                    <img
                        src="${featured.screenshot}"
                        alt="${featured.name} screenshot"
                    >

                </article>
            </div>


            <div class="game-gallery-description">

                <h3 class="game-gallery-title">
                    ${featured.name}
                </h3>

                <p>
                    ${getGameDescription(featured)}
                </p>

                ${
                    featured.link
                        ? `
                            <a
                                href="${featured.link}"
                                class="games-play-button"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Play Now
                            </a>
                        `
                        : ""
                }

            </div>

        </div>


        <div class="game-gallery-side">

            <div class="game-gallery-grid">

                ${thumbnails
                    .map(
                        game =>
                            createGameTile(
                                game,
                                game === featured
                            )
                    )
                    .join("")}

            </div>


            <div class="game-pagination">

                ${createPaginationButtons(
                    id,
                    games
                )}

            </div>

        </div>

    `;


    /* =====================================================
       GAME ICON EVENTS
       ===================================================== */

    const tiles =
        container.querySelectorAll(
            ".game-gallery-grid .game-tile"
        );


    tiles.forEach(tile => {

        tile.addEventListener(
            "click",
            () => {

                const selectedName =
                    tile.dataset.gameName;


                /*
                 * Find the selected game inside
                 * the CURRENT page.
                 */
                const selectedIndex =
                    pageGames.findIndex(
                        game =>
                            game.name === selectedName
                    );


                if (selectedIndex === -1) {
                    return;
                }


                /*
                 * Change featured game.
                 */
                galleryStates[id].featuredIndex =
                    selectedIndex;


                /*
                 * Re-render.
                 *
                 * The icon list is recreated,
                 * but the selected game's icon
                 * remains there.
                 */
                renderGallery(id);
            }
        );


        /*
         * Keyboard support.
         */
        tile.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    tile.click();
                }
            }
        );

    });


    /* =====================================================
       PAGINATION EVENTS
       ===================================================== */

    const paginationButtons =
        container.querySelectorAll(
            ".game-pagination button"
        );


    paginationButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const page =
                    Number(
                        button.dataset.page
                    );


                /*
                 * Change page.
                 */
                galleryStates[id].page =
                    page;


                /*
                 * Start the new page with
                 * its first game featured.
                 */
                galleryStates[id].featuredIndex =
                    0;


                renderGallery(id);
            }
        );

    });
}


/* =========================================================
   INITIALIZE GALLERY
   ========================================================= */

function populateGallery(id) {

    const container =
        document.getElementById(id);


    if (!container) {
        return;
    }


    const games =
        id === "mobile-games"
            ? mobileGames
            : educationGames;


    if (games.length === 0) {
        return;
    }


    galleryStates[id] = {
        page: 0,
        featuredIndex: 0
    };


    renderGallery(id);
}


/* =========================================================
   INITIALIZE BOTH GALLERIES
   ========================================================= */

populateGallery("mobile-games");
populateGallery("education-games");