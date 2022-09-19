import React, { useEffect } from "react";
import { useArticle } from "../../hooks/useArticle";
import { ArticleProps } from "../../types";

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="flex flex-col gap-6 rounded border border-gray-300 h-[500px] mb-3">
      <img src={article?.urlToImage} className="w-full h-[200px]" />
      <div className="p-6">
        <a
          href={`${article?.url}`}
          className="font-black text-2xl text-decoration-none underline"
        >
          {article?.title}
        </a>
        <p className="text-sm font-light text-gray-400">
          {article?.description.slice(0, 200)}...
        </p>
      </div>
    </div>
  );
};

export default Article;
