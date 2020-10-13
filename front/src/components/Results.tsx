import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSearchItems } from "../hooks/items.hooks";
import Breadcrumb from "./Breadcrumb";
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

  const renderResults = () => {
    return (
      <div>
        <Breadcrumb categoryId={"dasd"} />
        {itemsResults?.items.map((item) => {
          return <ResultItem key={item.id} item={item} />;
        })}
      </div>
    );
  };

  return (
    <>
      {isLoading && "Cargando"}
      {error}
      {!isLoading && itemsResults && renderResults()}
    </>
  );
}

export default Results;
