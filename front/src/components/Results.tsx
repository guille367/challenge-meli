import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSearchItems } from "../hooks/items.hooks";
import ResultItem from "./ResultItem";

function Results() {
  const location = useLocation();
  const [query, setQuery] = useState<string>("");
  const { isLoading, data: itemsResults, error, execute } = useSearchItems();

  useEffect(() => {
    const newQuery = new URLSearchParams(location.search).get("q") || "";
    setQuery(newQuery);
  }, [location.search]);

  useEffect(() => {
    execute(query);
  }, [query]);

  return (
    <>
      {isLoading && "Cargando"}
      {error}

      {!isLoading &&
        itemsResults &&
        itemsResults.items.map((item) => {
          return <ResultItem key={item.id} item={item} />;
        })}
    </>
  );
}

export default Results;
