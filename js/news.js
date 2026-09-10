/* =========================================================
   ER STUDIO NEWS SYSTEM
   ========================================================= */

/*
 * =========================================================
 * ADD NEWS HERE
 * =========================================================
 *
 * To add a new article, copy one of the objects below.
 *
 * category:
 *     "headline"
 *     "highlight"
 *
 * images:
 *     Add as many images as you want.
 *
 * imageLayout:
 *     "row"   = images displayed horizontally
 *     "grid"  = images displayed in a grid
 *
 * paragraphs:
 *     Each string becomes one paragraph.
 *
 * The newest article should normally go first.
 */

const news = [

    /* =====================================================
       main-main-fest-2026
       ===================================================== */

    {
        id: "main-main-fest-2026",

        title:
            "ER Studio participated in Main Main Fest 2026",

        date:
            "2026-05-21",

        paragraphs: [
            `ER Studio participated in Main Main Fest 2026, held from May 19–21, 2026, at Universitas Bunda Mulia Ancol, Jakarta. During the event, ER Studio showcased five hypercasual games that visitors could play directly: Block Impact, Flood Fill, Boom Castle, Witchball Froine, and Wildballs.`,

            `Visitors could try the games by scanning the QR codes provided on ER Studio's brochures, which were distributed throughout the event. Featuring these five games gave ER Studio an opportunity to showcase its work while allowing visitors to directly experience the games developed by the studio.`,

            `Beyond playing the games, visitors were also encouraged to provide suggestions and feedback for future development. Player feedback is an important part of ER Studio's development process, as it provides direct insight into players' experiences, opinions, and expectations. These responses offer valuable perspectives that can be considered in improving and developing future games.`,

            `Participating in Main Main Fest 2026 also provided ER Studio with an opportunity to connect with visitors who share an interest in games. By presenting playable games, ER Studio was able to introduce its work in a more interactive way and give visitors the chance to experience the games firsthand.`
        ],

        images: [
          "images/News/main-main-fest-2026/Section.png",
          "images/News/main-main-fest-2026/Section (1).png",
          "images/News/main-main-fest-2026/Section (2).png"
        ],

        imageLayout: "row"
    },


    /* =====================================================
       getting-to-know-er-studio
       ===================================================== */

    {
        id: "getting-to-know-er-studio",

        title:
            "Getting to Know Education Reinvented Studio",

        date:
            "2026-05-21",

        paragraphs: [
            `In addition to showcasing hypercasual games, ER Studio also introduced its identity and creative focus to visitors at Main Main Fest 2026. ER Studio stands for Education Reinvented Studio, reflecting one of the studio's key focuses: developing games for educational purposes.`,

            `ER Studio does not only create games for entertainment, but also develops interactive educational games and gamification experiences. Through a game-based approach, educational materials can be transformed into experiences that are more interactive, engaging, and enjoyable for players.`,

            `Through its participation in Main Main Fest 2026, ER Studio aims to showcase how games can serve different purposes and take various forms, ranging from educational games and gamification to fun games and hypercasual games.`,

            `The event provided ER Studio with an opportunity to showcase its work, interact directly with players, and gather valuable feedback for future game development.`
        ],

        images: [
          "images/News/getting-to-know-er-studio/1.jpg",
          "images/News/getting-to-know-er-studio/2.jpg",
          "images/News/getting-to-know-er-studio/3.jpg"
        ],

        imageLayout: "row"
    }

];


/* =========================================================
   UTILITIES
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function formatNewsDate(dateString) {

    const date = new Date(dateString + "T00:00:00");

    if (Number.isNaN(date.getTime())) {
        return dateString;
    }

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}


function getCategoryTitle(category) {

    if (category === "headline") {
        return "Headline News";
    }

    return "Highlights";
}


/* =========================================================
   IMAGE RENDERING
   ========================================================= */

function renderNewsImages(article) {

    if (!article.images || article.images.length === 0) {
        return "";
    }

    const layout =
        article.imageLayout || "row";

    const images =
        article.images
            .filter(Boolean)
            .map(image => `
                <figure class="news-article-image">
                    <img
                        src="${escapeHTML(image)}"
                        alt="${escapeHTML(article.title)}"
                        loading="lazy"
                    >
                </figure>
            `)
            .join("");

    return `
        <div class="news-article-images news-images-${layout}">
            ${images}
        </div>
    `;
}


/* =========================================================
   ARTICLE RENDERING
   ========================================================= */

function renderArticle(article) {
    const paragraphs = article.paragraphs.map(paragraph => `
        <p>${escapeHTML(paragraph)}</p>
    `).join("");

    return `
        <article class="news-article">

            <span
                id="news-${escapeHTML(article.id)}"
                class="news-anchor"
                aria-hidden="true"
            ></span>

            <header class="news-article-header">
                <h2>
                    ${escapeHTML(article.title)}
                </h2>

                <time datetime="${escapeHTML(article.date)}">
                    ${escapeHTML(formatNewsDate(article.date))}
                </time>
            </header>

            <div class="news-article-body">
                ${paragraphs}
            </div>

            ${renderNewsImages(article)}

        </article>
    `;
}


/* =========================================================
   TABLE OF CONTENTS
   ========================================================= */

function renderTableOfContents() {
    return `
        <nav class="news-toc" aria-label="News table of contents">
            <div class="news-toc-title">
                TABLE OF CONTENTS
            </div>

            <ul>
                ${news.map(article => `
                    <li>
                        <a href="#news-${escapeHTML(article.id)}">
                            ${escapeHTML(article.title)}
                        </a>
                    </li>
                `).join("")}
            </ul>
        </nav>
    `;
}


/* =========================================================
   FULL NEWS PAGE
   ========================================================= */

function renderAllNews() {
    const container = document.getElementById("all-news");
    if (!container) return;

    container.innerHTML = `
        <div class="news-layout">
            ${renderTableOfContents()}

            <div class="news-articles">
                ${news.map(renderArticle).join("")}
            </div>
        </div>
    `;
}


/* =========================================================
   HOME NEWS CARDS
   ========================================================= */

function renderHomeNews() {

    const container =
        document.getElementById("home-news");

    if (!container) {
        return;
    }


    /*
     * Show the newest three articles on Home.
     */

    const homeArticles =
        news.slice(0, 3);


    container.innerHTML =
        homeArticles
            .map(article => {

                return `
                    <article class="news-card">

                        ${
                            article.images &&
                            article.images.length > 0
                                ? `
                                    <div class="news-image">
                                        <img
                                            src="${escapeHTML(
                                                article.images[0]
                                            )}"
                                            alt="${escapeHTML(
                                                article.title
                                            )}"
                                            loading="lazy"
                                        >
                                    </div>
                                `
                                : ""
                        }

                        <div class="news-content">

                            <small>
                                ${escapeHTML(
                                    formatNewsDate(
                                        article.date
                                    )
                                )}
                            </small>

                            <h3>
                                ${escapeHTML(
                                    article.title
                                )}
                            </h3>

                            <p>
                                ${escapeHTML(
                                    article.paragraphs[0]
                                )}
                            </p>

                            <a
                                class="read-more"
                                href="news.html#news-${escapeHTML(article.id)}"
                            >
                                Read More →
                            </a>

                        </div>

                    </article>
                `;

            })
            .join("");
}


/* =========================================================
   INITIALIZE
   ========================================================= */

renderAllNews();
renderHomeNews();