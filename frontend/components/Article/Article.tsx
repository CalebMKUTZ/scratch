import React, { useEffect } from "react";
import { useArticle } from "../../hooks/useArticle";
import { ArticleProps } from "../../types";

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="flex flex-col gap-6 h-[300px] p-10 rounded border border-gray-300 bg-white">
      <a
        href={`${article?.url}`}
        className="font-black text-2xl text-decoration-none underline"
      >
        {article?.title}
      </a>
      <p className="text-sm font-light text-gray-400">{article?.source}</p>
    </div>
  );
};

export default Article;
