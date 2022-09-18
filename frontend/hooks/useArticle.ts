import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";

export const useArticle = () => {
  const newsContext = useContext(NewsContext);

  if (newsContext == undefined) {
    console.error("Pad context is undefined");
  }

  return newsContext;
};
