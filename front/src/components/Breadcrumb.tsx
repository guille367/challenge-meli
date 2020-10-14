import React, { useEffect } from "react";
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
  }, [categoryId, execute]);

  const renderBreadCrumb = () => {
    return (
      <>
        {categoryData?.path.map((category, i) => {
          return (
            <span className="breadcrumb-item" key={i}>
              {" "}
              {category} &gt;{" "}
            </span>
          );
        })}
        <span className="breadcrumb-item" key={categoryData?.name}>
          {categoryData?.name}
        </span>
      </>
    );
  };

  return (
    (categoryData && (
      <div className="breadcrumb">{renderBreadCrumb()}</div>
    )) || <div></div>
  );
}

export default Breadcrumb;
