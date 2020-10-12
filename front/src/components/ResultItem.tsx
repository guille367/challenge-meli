import { IItemSearch } from "../models/items.models";
import React from "react";
import shippingIcon from "../images/ic_shipping.png";
import CURRENCIES from "../shared/currencies";
import { Link } from "react-router-dom";

interface ResultItemProps {
  item: IItemSearch;
}

function ResultItem(props: ResultItemProps) {
  const { item } = props;

  return (
    <Link to={`/items/${item.id}`}>
      <div className="item-result grid grid-cols-8">
        <div className="item-result--image col-span-1">
          <img alt={item.title} src={item.picture} />
        </div>
        <div className="item-result--description col-span-4">
          <h5 className="item-price">
            {CURRENCIES[item.price.currency || "ars"]}
            {item.price.amount}
            {item.free_shipping && (
              <img alt="free shiping" className="pl-2" src={shippingIcon} />
            )}
          </h5>
          <h5 className="item-title">{item.title}</h5>
        </div>
        <div className="item-location col-span-3">
          <span className="item-location--description"></span>
        </div>
      </div>
    </Link>
  );
}

export default ResultItem;
