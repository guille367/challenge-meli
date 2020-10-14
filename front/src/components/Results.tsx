import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSearchItems } from "../hooks/items.hooks";
import Breadcrumb from "./Breadcrumb";
import Error from "./Error";
import ResultItem from "./ResultItem";

function Results() {
  const location = useLocation();
  const [query, setQuery] = useState<string>("");
  const [maxResultsCategory, setMaxResultsCategory] = useState<string>("");
  const { isLoading, data: itemsResults, error, execute } = useSearchItems();

  useEffect(() => {
    const newQuery = new URLSearchParams(location.search).get("q") || "";
    setQuery(newQuery);
  }, [location.search]);

  useEffect(() => {
    execute(query);
  }, [query]);

  useEffect(() => {
    if (itemsResults && itemsResults.categories.length > 0) {
      const category = itemsResults.categories.sort((a, b) => {
        return a.results < b.results ? 1 : -1;
      });
      setMaxResultsCategory(category[0].id);
    }
  }, [itemsResults]);

  const renderResults = () => {
    return (
      <div>
        <Breadcrumb categoryId={maxResultsCategory} />
        {itemsResults?.items.map((item) => {
          return <ResultItem key={item.id} item={item} />;
        })}
      </div>
    );
  };

  return (
    <>
      <Error message={error} />
      {isLoading && "Cargando"}
      {!isLoading && itemsResults && renderResults()}
    </>
  );
}

export default Results;
