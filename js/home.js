/* =========================================================
   ER STUDIO HOME PAGE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       FEATURED GAME CAROUSEL
       ===================================================== */

    const backgroundImageElement = document.getElementById("featured-game-background-image");
    const logoElement = document.getElementById("featured-game-logo");
    const iconElement = document.getElementById("featured-game-icon");
    const descriptionElement = document.getElementById("featured-game-description");
    const playElement = document.getElementById("featured-game-play");
    const progressFill = document.getElementById("featured-progress-fill");
    const progressDots = document.getElementById("featured-progress-dots");
    const previousButton = document.querySelector(".featured-prev");
    const nextButton = document.querySelector(".featured-next");

    /* =====================================================
       FEATURED GAME DATA
       ===================================================== */

    const featuredGames = [
        {
            name: "Block Impact",
            logo: "images/Corousel/Logo/Block impact.png",
            background: "images/Corousel/Block impact.png",
            icon: "images/Corousel/icon/Block impact.png",
            description: "Block Impact is a fun 3D brick breaker game where you control a paddle to bounce a ball and destroy colorful blocks. Clear every level, keep the ball in play, and chase higher scores with precise timing.",
            link: "games.html"
        },
        {
            name: "Witchball Froine",
            logo: "images/Corousel/Logo/witchball.png",
            background: "images/Corousel/witchball.png",
            icon: "images/Corousel/icon/witchball.png",
            description: "A 3D platforming adventure where you navigate challenging environments and obstacles.",
            link: "games.html"
        },
        {
            name: "Dice on Delivery",
            logo: "images/Corousel/Logo/Dice on Delivery.png",
            background: "images/Corousel/Dice on Delivery.png",
            icon: "images/Corousel/icon/Dice on Delivery.png",
            description: "Deliver packages through an absurd city while using dice to determine your abilities and overcome unexpected obstacles.",
            link: "games.html"
        },
        {
            name: "FloodFill",
            logo: "images/Corousel/Logo/FloodFill.png",
            background: "images/Corousel/Floodfill.png",
            icon: "images/Corousel/icon/Floodfill.png",
            description: "A colorful puzzle game where players strategically fill the board and solve increasingly challenging puzzles.",
            link: "games.html"
        },
        {
            name: "Wild Balls",
            logo: "images/Corousel/Logo/Wild Balls.png",
            background: "images/Corousel/Wildball.png",
            icon: "images/Corousel/icon/Wild Balls.png",
            description: "A fun puzzle experience featuring colorful balls, challenging levels, and simple mechanics that are easy to learn.",
            link: "games.html"
        }
    ];

    let currentGame = 0;
    const autoPlayDuration = 6000;
    let autoPlayTimer = null;
    let progressTimer = null;
    let progressStartTime = 0;

    /* =====================================================
       CREATE & UPDATE PROGRESS DOTS
       ===================================================== */

    if (progressDots) {
        progressDots.innerHTML = "";
        featuredGames.forEach((_, index) => {
            const dot = document.createElement("span");
            dot.dataset.index = index;
            if (index === 0) dot.classList.add("active");
            progressDots.appendChild(dot);
        });
    }

    function updateDots() {
        if (!progressDots) return;
        const dots = progressDots.querySelectorAll("span");
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentGame);
        });
    }

    /* =====================================================
       UPDATE FEATURED GAME DISPLAY
       ===================================================== */

    function showFeaturedGame(index) {
        currentGame = (index + featuredGames.length) % featuredGames.length;
        const game = featuredGames[currentGame];

        if (backgroundImageElement) {
            backgroundImageElement.src = game.background;
            backgroundImageElement.alt = "";
        }
        if (logoElement) {
            logoElement.src = game.logo;
            logoElement.alt = game.name;
        }
        if (iconElement) {
            iconElement.src = game.icon;
            iconElement.alt = game.name;
        }
        if (descriptionElement) {
            descriptionElement.textContent = game.description;
        }
        if (playElement) {
            playElement.href = game.link;
        }

        updateDots();
        resetAutoPlay();
    }

    /* =====================================================
       PROGRESS BAR & TIMERS
       ===================================================== */

    function stopAutoPlay() {
        clearTimeout(autoPlayTimer);
        if (progressTimer) {
            cancelAnimationFrame(progressTimer);
            progressTimer = null;
        }
    }

    function startProgress() {
        if (!progressFill) return;

        progressStartTime = performance.now();
        progressFill.style.width = "0%";

        function updateProgress(currentTime) {
            const elapsed = currentTime - progressStartTime;
            const percentage = Math.min((elapsed / autoPlayDuration) * 100, 100);

            progressFill.style.width = percentage + "%";

            if (percentage < 100) {
                progressTimer = requestAnimationFrame(updateProgress);
            }
        }

        progressTimer = requestAnimationFrame(updateProgress);
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startProgress();
        autoPlayTimer = setTimeout(() => {
            showFeaturedGame(currentGame + 1);
        }, autoPlayDuration);
    }

    /* =====================================================
       FEATURED CAROUSEL CONTROLS
       ===================================================== */

    if (nextButton) {
        nextButton.addEventListener("click", () => showFeaturedGame(currentGame + 1));
    }

    if (previousButton) {
        previousButton.addEventListener("click", () => showFeaturedGame(currentGame - 1));
    }

    if (progressDots) {
        progressDots.addEventListener("click", (event) => {
            const dot = event.target.closest("span");
            if (!dot) return;

            const index = Number(dot.dataset.index);
            if (Number.isInteger(index)) {
                showFeaturedGame(index);
            }
        });
    }

    const featuredHero = document.querySelector(".featured-games");
    if (featuredHero) {
        featuredHero.addEventListener("mouseenter", stopAutoPlay);
        featuredHero.addEventListener("mouseleave", resetAutoPlay);
    }

    // Initialize Featured Carousel
    if (featuredGames.length > 0) {
        showFeaturedGame(0);
    }

    /* =====================================================
       LOWER WORKS CAROUSEL
       ===================================================== */

    const carousel = document.querySelector("[data-carousel]");
    if (!carousel) return;

    const track = carousel.querySelector(".carousel-track");
    const thumbnails = carousel.querySelectorAll(".game-thumb");
    const previous = carousel.querySelector(".carousel-arrow.prev");
    const next = carousel.querySelector(".carousel-arrow.next");

    if (!track || thumbnails.length === 0) return;

    let lowerCurrent = 0;

    function updateLowerCarousel() {
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.classList.toggle("active", index === lowerCurrent);
        });

        const active = thumbnails[lowerCurrent];
        if (active) {
            active.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
        }
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            lowerCurrent = index;
            updateLowerCarousel();
        });
    });

    if (previous) {
        previous.addEventListener("click", () => {
            lowerCurrent = (lowerCurrent - 1 + thumbnails.length) % thumbnails.length;
            updateLowerCarousel();
        });
    }

    if (next) {
        next.addEventListener("click", () => {
            lowerCurrent = (lowerCurrent + 1) % thumbnails.length;
            updateLowerCarousel();
        });
    }
});