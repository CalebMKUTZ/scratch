import React, { useEffect } from "react";
import { useArticle } from "../../hooks/useArticle";
import Article from "./Article";

const Articles = () => {
  const { articles, fetchArticles } = useArticle();

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      {articles && articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </>
  );
};

export default Articles;
