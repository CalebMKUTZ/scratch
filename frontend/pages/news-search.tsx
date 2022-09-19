import MainGrid from "../components/MainGrid";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { useArticle } from "../hooks/useArticle";
import { useRouter } from "next/router";

const NewsSearchPage = () => {
  const [search, setSearch] = useState("");
  const { fetchArticles } = useArticle();
  const router = useRouter();

  const fetchNewsArticlesFromQuery = (query: string) => {
    fetchArticles(query);
    router.push("/news");
  };

  return (
    <MainGrid>
      <div className="flex flex-col gap-3">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search..."
          type="text"
        />
        <Button
          color="primary"
          onClick={() => fetchNewsArticlesFromQuery(search)}
        >
          submit
        </Button>
      </div>
    </MainGrid>
  );
};

export default NewsSearchPage;
