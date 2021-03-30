import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import classnames from "classnames";
import "./index.scss";
import Article from "../Article/Article";
import {
  RiInstagramFill,
  RiFacebookBoxFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import Highlighted from "../Highlighted/Highlighted";
import Newsletter from "../Newsletter/Newsletter";
import Title from "../Title/Title";
import Loading from "../Loading/Loading";

const Index = () => {
  const [articles, setArticles] = useState(null);
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  let lastArticle;

  const redirect = localStorage.getItem("welcome") !== "false";

  useEffect(() => {
    if (!redirect) {
      axios
        .get("/news")
        .then((response) => {
          setArticles(response.data.articles);
        })
        .catch((error) => console.log(error));
    }
  }, [redirect]);

  if (redirect) {
    return <Redirect to="/welcome" />;
  }

  const handleGetArticles = (e) => {
    lastArticle = { title: articles[articles.length - 1].title };

    setLoading(true);

    setTimeout(() => {
      axios({
        url: "/news",
        params: lastArticle,
      })
        .then((response) => {
          setArticles(articles.concat(response.data.articles));
          setMsg(response.data.message);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, 700);
  };

  return (
    <div className="landing">
      <Title />

      <div className="articles-container">
        {articles && <Article articles={articles} />}
      </div>

      {loading ? (
        <Loading />
      ) : (
        <button
          onClick={handleGetArticles}
          className={classnames("btn", {
            "no-more-articles": msg,
          })}
        >
          more
        </button>
      )}

      <Newsletter />

      <div>
        <footer>
          <h2>contact us.</h2>
          <ul>
            <li>
              <RiInstagramFill />
            </li>
            <li>
              <RiFacebookBoxFill />
            </li>
            <li>
              <MdEmail />
            </li>
            <li>
              <RiYoutubeFill />
            </li>
            <li>
              <AiFillPhone /> 06 1 666 6666
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Index;
