import axios from "axios";
import { createContext, useState } from "react";
import { NewsContextProps, NewsProviderProps } from "../types";

export const NewsContext = createContext<NewsContextProps>(null);

export const NewsProvider: React.FC<NewsProviderProps> = ({ children }) => {
  const [articles, setArticles] = useState();
  const [error, setError] = useState("");

  const fetchArticles = async () => {
    try {
      const response = await axios.request({
        method: "GET",
        url: "https://global-news-api.p.rapidapi.com/news/news24/election",
        headers: {
          "X-RapidAPI-Key":
            "7e13738764mshf269b65b399187fp1b41e2jsnbdf68f29276b",
          "X-RapidAPI-Host": "global-news-api.p.rapidapi.com",
        },
      });
      setArticles(response.data.articles);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <NewsContext.Provider value={{ articles, error, fetchArticles }}>
      {children}
    </NewsContext.Provider>
  );
};
