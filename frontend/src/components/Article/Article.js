import "./Article.scss";
import Img from "./Img";
import { useHistory } from "react-router-dom";

const Article = (articles) => {
  console.log(articles.articles);
  let history = useHistory();

  const showDesc = (e) => {
    console.log("show description", e.target.nextElementSibling);
    if (e.target.innerHTML === "less") {
      e.target.innerHTML = "more";
      e.target.nextElementSibling.classList.toggle("article-details");
    } else {
      e.target.nextElementSibling.classList.toggle("article-details");
      e.target.innerHTML = "less";
    }

    // history.push("/article/1");
  };

  return articles.articles.map((article) => (
    <div key={article.publishedAt + article.title} className="article-card">
      <div className="article-top">
        <h2>{article.title}</h2>
      </div>

      <div className="article-bottom">
        <Img src={article.urlToImage} alt="" />

        <div className="text">
          <p>{article.description}</p>
          <button onClick={showDesc}>more</button>

          <div className="article-details">
            <p>{article.content}</p>
            <p>source: {article.source.id}</p>
          </div>
          <div>
            <p className="author">{article.author}</p>
            <p className="date">
              {article.publishedAt.substr(0, 10).replaceAll("-", ".")}
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Article;
