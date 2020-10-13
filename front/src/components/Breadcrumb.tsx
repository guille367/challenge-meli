import React, { useEffect, useState } from "react";
import { useSearchCategory } from "src/hooks/breadcrumb.hooks";

interface ParamTypes {
  categoryId: string;
}

function Breadcrumb(props: ParamTypes) {
  const { categoryId } = props;
  const { categoryData, execute } = useSearchCategory();

  useEffect(() => {
    if (categoryId !== "") {
      execute(categoryId);
    }
  }, [categoryId]);

  const renderBreadCrumb = () => {
    return categoryData?.path.map((category) => {
      return <span key={category}>{category}</span>;
    });
  };

  return (
    (categoryData && <div className="breadcrumb">{renderBreadCrumb}</div>) || (
      <div></div>
    )
  );
}

export default Breadcrumb;
