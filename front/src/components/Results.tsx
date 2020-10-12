import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ISearchItemResponse } from "../models/items.models";
import { getItemByQuery } from "../services/items.service";

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
      setItemsResults(itemsReponse);
    })();
  }, [query]);

  return <div>Results!</div>;
}

export default Results;
