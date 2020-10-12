import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ISearchItemResponse } from "../models/items.models";
import { getItemByQuery } from "../services/items.service";
import ResultItem from "./ResultItem";

function Results() {
  const location = useLocation();
  const [query, setQuery] = useState<string>("");
  const [itemsResults, setItemsResults] = useState<ISearchItemResponse>();

  useEffect(() => {
    const newQuery = new URLSearchParams(location.search).get("q") || "";
    setQuery(newQuery);
  }, [location.search]);

  useEffect(() => {
    (async () => {
      const itemsReponse = await getItemByQuery(query);
      itemsReponse.items = itemsReponse.items.slice(0, 4);

      setItemsResults(itemsReponse);
    })();
  }, [query]);

  return (
    <div>
      {itemsResults &&
        itemsResults.items.map((item) => {
          return <ResultItem key={item.id} item={item} />;
        })}
    </div>
  );
}

export default Results;
