import React, { useEffect, useState } from "react";
import { useArticle } from "../../hooks/useArticle";
import Button from "../Button";
import Input from "../Input";
import Article from "./Article";

const Articles: React.FC = () => {
  const { articles } = useArticle();

  return (
    <>
      {articles &&
        articles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
    </>
  );
};

export default Articles;
