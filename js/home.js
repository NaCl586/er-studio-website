/* =========================================================
   ER STUDIO HOME PAGE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       GAME DATA
       ===================================================== */

    /*
     * All game information used by the Home page lives here.
     *
     * logo:
     *   Large logo used by the main featured carousel.
     *
     * screenshot:
     *   Main gameplay image.
     *
     * icon:
     *   Small thumbnail/icon used by the lower carousel.
     *
     * description:
     *   Game description.
     *
     * category:
     *   "mobile" or "education"
     */

    const gameData = [

        /* =================================================
           MOBILE / WEBGL GAMES
           ================================================= */

        {
            name: "Floodfill",
            category: "mobile",

            logo: "images/Corousel/logo/floodFill.png",
            screenshot: "images/Corousel/Floodfill.png",
            icon: "images/Corousel/icon/FloodFill.png",

            description:
                "FloodFill is an endless strategic puzzle game where players drag and drop color-coded pieces onto a board. Tiles can be placed on top of other tiles of the same color, transforming them into a higher-tiered new color.",

            link: "https://forgehub.id/game/floodfill"
        },

        {
            name: "Block Impact",
            category: "mobile",

            logo: "images/Corousel/logo/block impact.png",
            screenshot: "images/Corousel/Block impact.png",
            icon: "images/Corousel/icon/Block impact.png",

            description:
                "Block Impact is a fun 3D brick breaker game where you control a paddle to bounce a ball and destroy colorful blocks. Clear every level, keep the ball in play, and chase higher scores with precise timing.",

            link: "https://forgehub.id/game/block-impact"
        },

        {
            name: "Boom Castle",
            category: "mobile",

            logo: "images/Corousel/logo/boom castle.png",
            screenshot: "images/Corousel/Balon.png",
            icon: "images/Corousel/icon/Boom Caste.png",

            description:
                "Boom Castle is a fast-paced arcade game where you control a cannon to defend your castle from waves of incoming balloons.",

            link: "https://forgehub.id/game/boom-castle"
        },

        {
            name: "Wild Balls",
            category: "mobile",

            logo: "images/Corousel/logo/wild balls.png",
            screenshot: "images/Corousel/Wildball.png",
            icon: "images/Corousel/icon/Wild Balls.png",

            description:
                "A puzzle game where you tilt your device to roll ball-shaped animals to their food bowl.",

            link: "https://nacl586.itch.io/wild-balls"
        },

        {
            name: "Witchball Froine",
            category: "mobile",

            logo: "images/Corousel/logo/witchball.png",
            screenshot: "images/Corousel/Witchball.png",
            icon: "images/Corousel/icon/Witchball.png",

            description:
                "A ball-rolling game controlled by swipe to guide Froine, a magical witch, in her adventure.",

            link: "https://nacl586.itch.io/witchballfroine"
        },


        /* =================================================
           EDUCATION GAMES
           ================================================= */

        {
            name: "Ninja Math Quest",
            category: "education",

            /*
             * No separate education logo was present in the
             * original game data, so the icon is used as
             * the featured logo.
             */
            logo: "images/Corousel/logo/mtk.png",
            screenshot: "images/Preview Edugame/mtk.png",
            icon: "images/Corousel/icon/Mtk.png",

            description:
                "This educational game transforms 12th-grade topics of permutations, combinations, and probability into a ninja-themed adventure filled with puzzles, where you must solve mathematical challenges using strategy and precision to achieve victory.",
        },

        {
            name: "Vector Rouge: Petualangan Vektor",
            category: "education",

            logo: "images/Corousel/logo/fisika vektor.png",
            screenshot: "images/Preview Edugame/Fisika.png",
            icon: "images/Corousel/icon/Fisika vektor.png",

            description:
                "This educational roguelike game turns vector addition and subtraction into a fun strategic challenge. Choose and combine vectors to match target vectors, overcome increasingly difficult challenges, and progress through a series of domains with different vector types and enemies. Players must think carefully about direction, magnitude, and combinations to find the right resultant vector.",

        },

        {
            name: "Periodium",
            category: "education",

            logo: "images/Corousel/logo/kimia kartu.png",
            screenshot: "images/Preview Edugame/Kimia Kartu.png",
            icon: "images/Corousel/icon/Kimia kartu.png",

            description:
                "This educational card game brings each chemical element to life based on its periodic properties, such as atomic radius, ionization energy, and electronegativity. Test your creativity and logic against the clock to achieve the highest score possible!",

        },

        {
            name: "Equilibrium Shift",
            category: "education",

            logo: "images/Corousel/logo/kimia  kesetimbangan.png",
            screenshot: "images/Preview Edugame/Kimia kesetimbangan.png",
            icon: "images/Corousel/logo/Kimia  kesetimbangan.png",

            description:
                "An educational puzzle game based on the chemical equilibrium topic in 11th-grade chemistry, where players must manipulate reaction conditions to achieve specific equilibrium objectives.",

        },

        {
            name: "Project TK",
            category: "education",

            logo: "images/Corousel/logo/project tk.png",
            screenshot: "images/Preview Edugame/Project tk.png",
            icon: "images/Corousel/logo/project tk.png",

            description:
                "In this game, players complete simple interactive activities such as tapping the screen, dragging and dropping objects, and drawing lines or shapes to solve various educational puzzles and challenges.",

        },

        {
            name: "Digestive Inside Out",
            category: "education",

            logo: "images/Corousel/logo/biologi.png",
            screenshot: "images/Preview Edugame/Biologi.png",
            icon: "images/Corousel/logo/biologi.png",

            description:
                "Explore a unique office building where each floor is designed to resemble a human digestive organ, challenging you to visit key locations and discover each stage of the digestive process in an engaging and interactive way.",

        }

    ];


    /* =====================================================
       FEATURED GAME CAROUSEL
       ===================================================== */

    const backgroundImageElement =
        document.getElementById("featured-game-background-image");

    const logoElement =
        document.getElementById("featured-game-logo");

    const iconElement =
        document.getElementById("featured-game-icon");

    const descriptionElement =
        document.getElementById("featured-game-description");

    const playElement =
        document.getElementById("featured-game-play");

    const progressFill =
        document.getElementById("featured-progress-fill");

    const progressDots =
        document.getElementById("featured-progress-dots");

    const previousButton =
        document.querySelector(".featured-prev");

    const nextButton =
        document.querySelector(".featured-next");


    /*
     * Games shown in the large featured carousel.
     *
     * Keep this separate from gameData so we can decide
     * which games are promoted on the Home page.
     *
     * Education games are included here as well.
     */

    const featuredGameNames = [
        "Block Impact",
        "Witchball Froine",
        "Dice on Delivery",
        "Floodfill",
        "Wild Balls",
        "Ninja Math Quest",
        "Vector Rouge: Petualangan Vektor",
        "Periodium",
        "Equilibrium Shift",
        "Project TK",
        "Digestive Inside Out"
    ];


    /*
     * Dice on Delivery is not part of the regular
     * mobileGames array above, so define it here.
     */

    const diceOnDelivery = {
        name: "Dice on Delivery",
        category: "mobile",

        logo: "images/Corousel/Logo/Dice on Delivery.png",
        screenshot: "images/Corousel/Dice on Delivery.png",
        icon: "images/Corousel/icon/Dice on Delivery.png",

        description:
            "Deliver packages through an absurd city while using dice to determine your abilities and overcome unexpected obstacles.",

        link: "https://nacl586.itch.io/dice-on-delivery"
    };


    /*
     * Add Dice on Delivery to the lookup data.
     */

    const allGames = [
        diceOnDelivery,
        ...gameData
    ];


    /*
     * Convert featured game names into actual game objects.
     */

    const featuredGames = featuredGameNames
        .map(name =>
            allGames.find(game => game.name === name)
        )
        .filter(Boolean);


    let currentGame = 0;

    const autoPlayDuration = 6000;

    let autoPlayTimer = null;
    let progressTimer = null;
    let progressStartTime = 0;


    /* =====================================================
       FEATURED PROGRESS DOTS
       ===================================================== */

    if (progressDots) {

        progressDots.innerHTML = "";

        featuredGames.forEach((_, index) => {

            const dot =
                document.createElement("span");

            dot.dataset.index = index;

            if (index === 0) {
                dot.classList.add("active");
            }

            progressDots.appendChild(dot);

        });
    }


    function updateDots() {

        if (!progressDots) {
            return;
        }

        const dots =
            progressDots.querySelectorAll("span");

        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentGame
            );

        });
    }


    /* =====================================================
       SHOW FEATURED GAME
       ===================================================== */

    function showFeaturedGame(index) {

        if (featuredGames.length === 0) {
            return;
        }

        currentGame =
            (index + featuredGames.length) %
            featuredGames.length;

        const game =
            featuredGames[currentGame];


        if (backgroundImageElement) {

            /*
             * Some versions of the Home HTML use this
             * element as the large background image.
             */
            backgroundImageElement.src =
                game.screenshot;

            backgroundImageElement.alt =
                "";
        }


        /*
         * Newer Home layouts use a separate image element.
         */

        const featuredImage =
            document.getElementById(
                "featured-game-image"
            );

        if (featuredImage) {

            featuredImage.src =
                game.screenshot;

            featuredImage.alt =
                game.name;
        }


        if (logoElement) {

            logoElement.src =
                game.logo || game.icon;

            logoElement.alt =
                game.name;
        }


        if (iconElement) {

            iconElement.src =
                game.icon;

            iconElement.alt =
                game.name;
        }


        if (descriptionElement) {

            descriptionElement.textContent =
                game.description;
        }


        if (playElement) {
            const canPlay =
                game.category === "mobile" &&
                !!game.link;

            playElement.classList.toggle(
                "is-hidden",
                !canPlay
            );

            if (canPlay) {
                playElement.href =
                    game.link;

                playElement.target =
                    "_blank";

                playElement.rel =
                    "noopener noreferrer";
            } else {
                playElement.removeAttribute(
                    "href"
                );

                playElement.removeAttribute(
                    "target"
                );

                playElement.removeAttribute(
                    "rel"
                );
            }
        }


        updateDots();

        resetAutoPlay();
    }


    /* =====================================================
       FEATURED AUTOPLAY
       ===================================================== */

    function stopAutoPlay() {

        clearTimeout(autoPlayTimer);

        if (progressTimer) {

            cancelAnimationFrame(
                progressTimer
            );

            progressTimer = null;
        }
    }


    function startProgress() {

        if (!progressFill) {
            return;
        }

        progressStartTime =
            performance.now();

        progressFill.style.width =
            "0%";


        function updateProgress(currentTime) {

            const elapsed =
                currentTime -
                progressStartTime;

            const percentage =
                Math.min(
                    (elapsed / autoPlayDuration) * 100,
                    100
                );


            progressFill.style.width =
                percentage + "%";


            if (percentage < 100) {

                progressTimer =
                    requestAnimationFrame(
                        updateProgress
                    );
            }
        }


        progressTimer =
            requestAnimationFrame(
                updateProgress
            );
    }


    function resetAutoPlay() {

        stopAutoPlay();

        startProgress();

        autoPlayTimer =
            setTimeout(() => {

                showFeaturedGame(
                    currentGame + 1
                );

            }, autoPlayDuration);
    }


    /* =====================================================
       FEATURED ARROWS
       ===================================================== */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            () => {

                showFeaturedGame(
                    currentGame + 1
                );

            }
        );
    }


    if (previousButton) {

        previousButton.addEventListener(
            "click",
            () => {

                showFeaturedGame(
                    currentGame - 1
                );

            }
        );
    }


    /* =====================================================
       FEATURED DOTS
       ===================================================== */

    if (progressDots) {

        progressDots.addEventListener(
            "click",
            event => {

                const dot =
                    event.target.closest("span");

                if (!dot) {
                    return;
                }

                const index =
                    Number(dot.dataset.index);

                if (Number.isInteger(index)) {

                    showFeaturedGame(index);

                }
            }
        );
    }


    /* =====================================================
       PAUSE FEATURED AUTOPLAY ON HOVER
       ===================================================== */

    const featuredHero =
        document.querySelector(".featured-games");

    if (featuredHero) {

        featuredHero.addEventListener(
            "mouseenter",
            stopAutoPlay
        );

        featuredHero.addEventListener(
            "mouseleave",
            resetAutoPlay
        );
    }


    /* =====================================================
       INITIALIZE FEATURED CAROUSEL
       ===================================================== */

    if (featuredGames.length > 0) {

        showFeaturedGame(0);
    }


    /* =====================================================
       LOWER GAME CAROUSEL
       ===================================================== */

    /* =====================================================
   LOWER WORKS CAROUSEL
   ===================================================== */

const carousel = document.querySelector("[data-carousel]");

if (carousel) {

    const track = carousel.querySelector(".carousel-track");
    const previous = carousel.querySelector(".carousel-arrow.prev");
    const next = carousel.querySelector(".carousel-arrow.next");

    if (track) {

        const lowerCarouselGames = gameData;

        track.innerHTML = "";

        lowerCarouselGames.forEach((game, index) => {

            const thumbnail = document.createElement("button");
            thumbnail.type = "button";
            thumbnail.className = "game-thumb";
            thumbnail.dataset.index = index;

            if (index === 0) {
                thumbnail.classList.add("active");
            }

            thumbnail.innerHTML = `
                <img src="${game.icon}" alt="${game.name}" loading="lazy">
            `;

            track.appendChild(thumbnail);
        });

        const thumbnails = track.querySelectorAll(".game-thumb");

        let lowerCurrent = 0;

        function updateLowerCarousel() {
            thumbnails.forEach((thumb, index) => {
                thumb.classList.toggle("active", index === lowerCurrent);
            });

            thumbnails[lowerCurrent]?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
        }

        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener("click", () => {
                lowerCurrent = index;
                updateLowerCarousel();

                const game = lowerCarouselGames[index];
                const featuredIndex = featuredGames.findIndex(
                    g => g.name === game.name
                );

                if (featuredIndex !== -1) {
                    showFeaturedGame(featuredIndex);
                }
            });
        });

        previous?.addEventListener("click", () => {
            lowerCurrent =
                (lowerCurrent - 1 + thumbnails.length) %
                thumbnails.length;

            updateLowerCarousel();

            const featuredIndex = featuredGames.findIndex(
                g => g.name === lowerCarouselGames[lowerCurrent].name
            );

            if (featuredIndex !== -1) {
                showFeaturedGame(featuredIndex);
            }
        });

        next?.addEventListener("click", () => {
            lowerCurrent =
                (lowerCurrent + 1) %
                thumbnails.length;

            updateLowerCarousel();

            const featuredIndex = featuredGames.findIndex(
                g => g.name === lowerCarouselGames[lowerCurrent].name
            );

            if (featuredIndex !== -1) {
                showFeaturedGame(featuredIndex);
            }
        });

        updateLowerCarousel();
    }
}


    /*
     * Determine which games should appear in the
     * lower carousel.
     *
     * This now comes directly from gameData.
     *
     * That means education games are automatically
     * included.
     */

    const lowerCarouselGames =
        gameData;


    /* =====================================================
       CREATE LOWER CAROUSEL
       ===================================================== */

    track.innerHTML = "";


    lowerCarouselGames.forEach(
        (game, index) => {

            const thumbnail =
                document.createElement("button");

            thumbnail.type =
                "button";

            thumbnail.className =
                "game-thumb";

            if (index === 0) {

                thumbnail.classList.add(
                    "active"
                );
            }


            thumbnail.dataset.index =
                index;

            thumbnail.dataset.gameName =
                game.name;


            const image =
                document.createElement("img");

            image.src =
                game.icon;

            image.alt =
                game.name;

            image.loading =
                "lazy";


            thumbnail.appendChild(
                image
            );


            track.appendChild(
                thumbnail
            );

        }
    );


    const thumbnails =
        track.querySelectorAll(
            ".game-thumb"
        );


    if (thumbnails.length === 0) {
        return;
    }


    let lowerCurrent = 0;


    /* =====================================================
       LOWER CAROUSEL UPDATE
       ===================================================== */

    function updateLowerCarousel() {

        thumbnails.forEach(
            (thumbnail, index) => {

                thumbnail.classList.toggle(
                    "active",
                    index === lowerCurrent
                );

            }
        );


        const active =
            thumbnails[lowerCurrent];


        if (active) {

            active.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });

        }
    }


    /* =====================================================
       LOWER CAROUSEL GAME SELECTION
       ===================================================== */

    thumbnails.forEach(
        (thumbnail, index) => {

            thumbnail.addEventListener(
                "click",
                () => {

                    lowerCurrent =
                        index;

                    updateLowerCarousel();


                    /*
                     * Also change the main featured
                     * carousel to the selected game
                     * if it exists there.
                     */

                    const game =
                        lowerCarouselGames[
                            lowerCurrent
                        ];


                    const featuredIndex =
                        featuredGames.findIndex(
                            featured =>
                                featured.name ===
                                game.name
                        );


                    if (featuredIndex !== -1) {

                        showFeaturedGame(
                            featuredIndex
                        );

                    }

                }
            );

        }
    );


    /* =====================================================
       LOWER CAROUSEL PREVIOUS
       ===================================================== */

    if (previous) {

        previous.addEventListener(
            "click",
            () => {

                lowerCurrent =
                    (
                        lowerCurrent - 1 +
                        thumbnails.length
                    ) %
                    thumbnails.length;

                updateLowerCarousel();


                const game =
                    lowerCarouselGames[
                        lowerCurrent
                    ];


                const featuredIndex =
                    featuredGames.findIndex(
                        featured =>
                            featured.name ===
                            game.name
                    );


                if (featuredIndex !== -1) {

                    showFeaturedGame(
                        featuredIndex
                    );

                }

            }
        );
    }


    /* =====================================================
       LOWER CAROUSEL NEXT
       ===================================================== */

    if (next) {

        next.addEventListener(
            "click",
            () => {

                lowerCurrent =
                    (
                        lowerCurrent + 1
                    ) %
                    thumbnails.length;

                updateLowerCarousel();


                const game =
                    lowerCarouselGames[
                        lowerCurrent
                    ];


                const featuredIndex =
                    featuredGames.findIndex(
                        featured =>
                            featured.name ===
                            game.name
                    );


                if (featuredIndex !== -1) {

                    showFeaturedGame(
                        featuredIndex
                    );

                }

            }
        );
    }

});