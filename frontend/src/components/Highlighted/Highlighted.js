import React from "react";

const Highlighted = (articles) => {
  console.log(articles.articles);
  return (
    <div className="highlighted">
      <div className="article">
        <p className="animated">technology.</p>
        <p className="animated">innovation.</p>
        <p className="animated">mocknews.</p>
        <p className="animated">technology.</p>
        <p className="animated">innovation.</p>
        <p className="animated">mocknews.</p>
      </div>
      <div className="main"></div>
    </div>
  );
};

export default Highlighted;
