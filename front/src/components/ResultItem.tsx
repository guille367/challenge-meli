import { IItemSearch } from "../models/items.models";
import React from "react";

interface ResultItemProps {
  item: IItemSearch;
}

function ResultItem(props: ResultItemProps) {
  console.log(props.item);
  return <div></div>;
}

export default ResultItem;
