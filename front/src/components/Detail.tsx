import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSearchItemDetail } from "src/hooks/items.hooks";
import CURRENCIES from "src/shared/currencies";
import CONDITIONS from "../shared/condtitions";
import Breadcrumb from "./Breadcrumb";
import Error from "./Error";

interface ParamTypes {
  id: string;
}

function Detail() {
  let { id } = useParams<ParamTypes>();
  const { isLoading, error, data: item, execute } = useSearchItemDetail();

  useEffect(() => {
    execute(id);
  }, [id, execute]);

  const renderItem = () => {
    return (
      <div>
        <Breadcrumb categoryId={item?.category_id || ""} />
        <div className="item-detail grid grid-cols-12">
          <div className="item-detail-image col-span-6">
            <img id="item-image" alt={item?.title} src={item?.picture} />
          </div>
          <div className="item-detail-checkout col-span-3">
            <div
              id="item-conditions"
              className="item-detail-checkout condition"
            >
              <span>{CONDITIONS[item?.condition || "new"]}</span>
              {item?.sold_quantity && item.sold_quantity === 0 ? (
                <span> {item.sold_quantity} vendidos</span>
              ) : null}
            </div>
            {<h4 className="item-detail-checkout title">{item?.title}</h4>}
            <div className="item-detail-checkout price">
              <h2>
                {CURRENCIES[item?.price.currency || "ars"]}
                {item?.price.amount}
              </h2>
            </div>
            <div className="item-detail-checkout buy">
              <button className="btn-primary">Comprar</button>
            </div>
          </div>
          <div className="item-detail-description col-span-6">
            <h3 className="item-detail-description title">
              Descripción del producto
            </h3>
            <p id="item-description" className="item-detail-description text">
              {item?.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Error message={error} />
      {isLoading && "Cargando"}
      {!isLoading && item && renderItem()}
    </div>
  );
}

export default Detail;
