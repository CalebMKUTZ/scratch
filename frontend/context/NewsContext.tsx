import axios from "axios";
import { createContext, useState } from "react";
import { NewsContextProps, NewsProviderProps } from "../types";

export const NewsContext = createContext<NewsContextProps>(null);

export const NewsProvider: React.FC<NewsProviderProps> = ({ children }) => {
  const [articles, setArticles] = useState();
  const [error, setError] = useState("");

  const fetchArticles = async (query: string) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_KEY}`
      );
      setArticles(response.data.articles.slice(0, 6));
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
