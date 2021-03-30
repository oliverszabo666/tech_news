const express = require("express");
const _ = require("lodash");
const path = require("path");

const port = 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dotenv = require("dotenv");
// load and parse .env
const result = dotenv.config();
if (result.error) {
  throw result.error;
}

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
// db.defaults({ lastQuery: {}, articles: [] }).write();

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.API_KEY);

const updateInterval = 60000 * 60; // every hour
const setNextUpdate = () => {
  const lastUpadte = new Date(db.get("lastQuery").value());
  const passed = new Date() - lastUpadte;

  if (passed > updateInterval) {
    fetchArticles();
    db.update("lastQuery", () => new Date().toUTCString()).write();
    setTimeout(setNextUpdate, updateInterval);
  } else {
    setTimeout(setNextUpdate, updateInterval - passed);
  }
};

// To query everything
// You must include at least one q, source, or domain
// sources: 'bbc-news,the-verge',
// domains: 'bbc.co.uk,techcrunch.com',
// from: '2017-12-01',
// to: '2017-12-12',
// sortBy: 'relevancy',
// page: 2

const fetchArticles = () => {
  newsapi.v2
    .everything({
      q: "tech",
      language: "en",
      pageSize: 100,
    })
    .then((response) => {
      if (response.status === "ok") {
        db.set("articles", response.articles).write();
      }
    });
};

setNextUpdate();

app.use("/", express.static(path.join(__dirname, "../frontend/build")));
app.use("/welcome", express.static(path.join(__dirname, "../frontend/build")));
app.use(
  /\/article\/[0-9]+/,
  express.static(path.join(__dirname, "../frontend/build"))
);

app.get("/news", (req, res) => {
  if (typeof req.query.title === "undefined") {
    const firstTenArticles = { articles: [] };
    firstTenArticles.articles = db.get("articles").take(10).value();
    res.json(firstTenArticles);
  } else {
    const index =
      db
        .get("articles")
        .value()
        .findIndex((article) => article.title === req.query.title) + 1;

    let lastRequestedArticleIndex = index + 10;
    if (lastRequestedArticleIndex > db.get("articles").value().length - 1) {
      lastRequestedArticleIndex = db.get("articles").value().length;
    }

    let requestedArticles = { articles: [], message: null };

    for (let i = index; i < lastRequestedArticleIndex; i++) {
      requestedArticles.articles.push(db.get("articles").value()[i]);

      if (db.get("articles").value().length === lastRequestedArticleIndex) {
        requestedArticles.message = "No more articles";
      }
    }
    res.json(requestedArticles);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
