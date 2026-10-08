/* =========================================================
   ER STUDIO - FEEDBACK CAROUSEL
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const feedbackData = {

        /* =====================================================
           CLIENT / TEACHER FEEDBACK
           ===================================================== */

        clients: [

            {
                name: "Heru",
                role: "Physics Teacher at SMAK 3 Penabur",
                text: "The vector game helps students understand vector addition through interactive problems, from basic difficulty to advanced challenges that require deeper reasoning."
            },

            {
                name: "Desy",
                role: "Physics Teacher at SMAK 3 Penabur",
                text: "An engaging visual gamification approach that lets students learn through realistic and fun problems while encouraging critical and logical thinking."
            },

            {
                name: "Martin",
                role: "Mathematics Teacher at SMAK 3 Penabur",
                text: "The cartoon approach makes the game engaging and varied. It connects mathematical concepts with realistic problems instead of relying only on formulas."
            },

            {
                name: "Hendri",
                role: "Mathematics Teacher at SMAK 3 Penabur",
                text: "A fresh approach to learning mathematics through an exciting storyline, light gameplay, interesting topics, and a good variety of challenges."
            },

            {
                name: "Nirma",
                role: "Chemistry Teacher at SMAK 3 Penabur",
                text: "The game combines an engaging cartoon style with challenging gameplay and helps students see how mathematical and combinatorial concepts can connect to everyday life."
            }

        ],


        /* =====================================================
           PLAYER FEEDBACK
           ===================================================== */

        players: [

            /* -------------------------------------------------
               BLOCK IMPACT
               ------------------------------------------------- */

            {
                name: "Player",
                role: "Block Impact",
                text: "The game is interesting, especially its concept and 3D graphics. It feels like a nostalgic trip back to older games."
            },

            {
                name: "Player",
                role: "Block Impact",
                text: "The colorful Tampilan and nostalgic style are enjoyable, while the concept still feels different enough to be exciting."
            },


            /* -------------------------------------------------
               WITCHBALL FROINE
               ------------------------------------------------- */

            {
                name: "Player",
                role: "Witchball Froine",
                text: "The game is cute and fun, although the sensitivity could use a little tweaking. Overall, it is really enjoyable."
            },

            {
                name: "Player",
                role: "Witchball Froine",
                text: "The game is interesting and brings back memories of playing Hamsterball. More variations of balls and characters could make it even better."
            },


            /* -------------------------------------------------
               BOOM CASTLE
               ------------------------------------------------- */

            {
                name: "Player",
                role: "Boom Castle",
                text: "The concept is simple and engaging, with fun gameplay, enemies, power-ups, and gimmicks. It also gives off classic PSP vibes."
            },

            {
                name: "Player",
                role: "Boom Castle",
                text: "The game is fun, but more enemy variety and a castle health indicator could make the experience even better."
            },


            /* -------------------------------------------------
               FLOOD FILL
               ------------------------------------------------- */

            {
                name: "Player",
                role: "Floodfill",
                text: "The game is fun and the colorful presentation is interesting. Mixing up the colors can be confusing, but the rest is easy to understand."
            },

            {
                name: "Player",
                role: "Floodfill",
                text: "The concept is already good and could be refined further. It is fun and exercises the brain through strategic block-stacking."
            },


            /* -------------------------------------------------
               WILD BALLS
               ------------------------------------------------- */

            {
                name: "Player",
                role: "Wild Balls",
                text: "The difficulty makes the game engaging and mentally challenging. The graphics are pleasing to the eye and the game is fun to play."
            },

            {
                name: "Player",
                role: "Wild Balls",
                text: "The game is simple yet fun, while the later challenges require strategic thinking. The difficulty could be improved further for experienced players."
            }

        ]
    };


    /* =========================================================
       CREATE EACH CAROUSEL
       ========================================================= */

    document.querySelectorAll(".feedback-group").forEach(group => {

        const title = group.querySelector("h3");
        const container = group.querySelector(".feedback-card-container");
        const prevButton = group.querySelector(".feedback-prev");
        const nextButton = group.querySelector(".feedback-next");

        if (!title || !container || !prevButton || !nextButton) {
            return;
        }

        const type =
            title.textContent
                .trim()
                .toLowerCase()
                .startsWith("client")
                ? "clients"
                : "players";

        const data = feedbackData[type];

        if (!data || data.length === 0) {
            return;
        }

        let currentIndex = 0;
        let animating = false;

        container.innerHTML = "";


        /* =====================================================
           CREATE CARDS
           ===================================================== */

        data.forEach(feedback => {

            const card = document.createElement("div");

            card.className =
                "feedback-card-stack-item";

            card.innerHTML = `
                <div class="feedback-card-inner">

                    <div class="feedback-avatar">
                        <span>●</span>
                    </div>

                    <div class="feedback-card-header">

                        <strong>
                            ${feedback.name}
                        </strong>

                        <span>
                            ${feedback.role}
                        </span>

                    </div>

                    <div class="feedback-card-body">

                        <p>
                            “${feedback.text}”
                        </p>

                    </div>

                </div>
            `;

            container.appendChild(card);
        });


        const cards = Array.from(
            container.querySelectorAll(
                ".feedback-card-stack-item"
            )
        );


        /* =====================================================
           AUTO SIZE TEXT
           ===================================================== */

        function autoSizeText() {

            cards.forEach(card => {

                const body =
                    card.querySelector(
                        ".feedback-card-body"
                    );

                const text =
                    card.querySelector(
                        ".feedback-card-body p"
                    );

                if (!body || !text) {
                    return;
                }

                const maxFontSize = 13;
                const minFontSize = 7;

                /*
                 * Start at the normal font size.
                 */
                text.style.fontSize =
                    `${maxFontSize}px`;

                /*
                 * Force browser layout.
                 */
                void text.offsetHeight;

                const availableHeight =
                    body.clientHeight;

                if (availableHeight <= 0) {
                    return;
                }

                /*
                 * Measure the actual rendered text.
                 */
                let textHeight =
                    text.getBoundingClientRect().height;

                /*
                 * If it already fits, keep 13px.
                 */
                if (textHeight <= availableHeight) {
                    return;
                }

                /*
                 * Binary search for the largest
                 * font size that fits.
                 */
                let low = minFontSize;
                let high = maxFontSize;

                for (let i = 0; i < 20; i++) {

                    const mid =
                        (low + high) / 2;

                    text.style.fontSize =
                        `${mid}px`;

                    void text.offsetHeight;

                    textHeight =
                        text.getBoundingClientRect().height;

                    if (textHeight <= availableHeight) {

                        low = mid;

                    } else {

                        high = mid;
                    }
                }

                /*
                 * Small safety margin.
                 */
                const finalSize =
                    Math.max(
                        minFontSize,
                        low - 0.15
                    );

                text.style.fontSize =
                    `${finalSize.toFixed(2)}px`;
            });
        }


        /* =====================================================
           GET CARD INDEX
           ===================================================== */

        function getIndex(offset) {

            return (
                (
                    currentIndex +
                    offset +
                    cards.length
                ) % cards.length
            );
        }


        /* =====================================================
           UPDATE CARD POSITIONS
           ===================================================== */

        function updatePositions() {

            const frontIndex =
                currentIndex;

            const leftIndex =
                getIndex(-1);

            const rightIndex =
                getIndex(1);

            cards.forEach((card, index) => {

                card.classList.remove(
                    "feedback-position-front",
                    "feedback-position-left",
                    "feedback-position-right",
                    "feedback-position-hidden"
                );

                if (index === frontIndex) {

                    card.classList.add(
                        "feedback-position-front"
                    );

                } else if (index === leftIndex) {

                    card.classList.add(
                        "feedback-position-left"
                    );

                } else if (index === rightIndex) {

                    card.classList.add(
                        "feedback-position-right"
                    );

                } else {

                    card.classList.add(
                        "feedback-position-hidden"
                    );
                }
            });
        }


        /* =====================================================
           NEXT
           ===================================================== */

        function next() {

            if (
                animating ||
                cards.length <= 1
            ) {
                return;
            }

            animating = true;

            container.classList.add(
                "feedback-animate-next"
            );

            currentIndex =
                getIndex(1);

            updatePositions();

            setTimeout(() => {

                container.classList.remove(
                    "feedback-animate-next"
                );

                animating = false;

                autoSizeText();

            }, 550);
        }


        /* =====================================================
           PREVIOUS
           ===================================================== */

        function previous() {

            if (
                animating ||
                cards.length <= 1
            ) {
                return;
            }

            animating = true;

            container.classList.add(
                "feedback-animate-prev"
            );

            currentIndex =
                getIndex(-1);

            updatePositions();

            setTimeout(() => {

                container.classList.remove(
                    "feedback-animate-prev"
                );

                animating = false;

                autoSizeText();

            }, 550);
        }


        /* =====================================================
           BUTTON EVENTS
           ===================================================== */

        prevButton.addEventListener(
            "click",
            previous
        );

        nextButton.addEventListener(
            "click",
            next
        );


        /* =====================================================
           INITIALIZE
           ===================================================== */

        updatePositions();

        /*
         * Wait for Poppins / DM Sans to finish loading
         * before measuring the text.
         */
        if (
            document.fonts &&
            document.fonts.ready
        ) {

            document.fonts.ready.then(() => {

                requestAnimationFrame(() => {
                    autoSizeText();
                });

            });

        } else {

            requestAnimationFrame(() => {
                autoSizeText();
            });
        }


        /* =====================================================
           RESIZE
           ===================================================== */

        let resizeTimeout;

        window.addEventListener(
            "resize",
            () => {

                clearTimeout(
                    resizeTimeout
                );

                resizeTimeout =
                    setTimeout(() => {

                        autoSizeText();

                    }, 100);
            }
        );

    });

});