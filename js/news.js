const news = [
  {
    title: "Hello World!",
    text: "An example ER Studio news article.",
    date: "2026",
    image: "images/News/hello-world.png"
  },
  {
    title: "ER Studio Activity",
    text: "A placeholder for your latest company activity.",
    date: "2026",
    image: "images/News/er-studio-activity.png"
  },
  {
    title: "New Project",
    text: "A placeholder for a new project announcement.",
    date: "2026",
    image: "images/News/new-project.png"
  },
  {
    title: "Coming Soon",
    text: "Replace this with the next ER Studio update.",
    date: "2026",
    image: "images/News/coming-soon.png"
  }
];

function newsCard(item) {
  return `
    <article class="news-card">

      <div class="news-image">
        <img
          src="${item.image}"
          alt="${item.title}"
        >
      </div>

      <div class="news-content">
        <small>${item.date}</small>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <a class="read-more" href="#">Read More →</a>
      </div>

    </article>
  `;
}

const homeNews = document.querySelector('#home-news');

if (homeNews) {
  homeNews.innerHTML = news
    .slice(0, 3)
    .map(newsCard)
    .join('');
}

const allNews = document.querySelector('#all-news');

if (allNews) {
  allNews.innerHTML = news
    .map(newsCard)
    .join('');
}
