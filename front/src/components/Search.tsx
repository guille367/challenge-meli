import React from "react";
import logo from "../images/logo_ml_mini.png";
import search from "../images/ic_search.png";

function Search(_props: any) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert();
  };

  return (
    <header>
      <form
        onSubmit={handleSubmit}
        className="search-nav grid grid-cols-12 gap-12"
      >
        <a className="link-home col-start-2 col-span-1" href="#">
          <img src={logo} />
        </a>
        <div className="col-span-9 search-nav--input">
          <input
            placeholder="Nunca dejes de buscar"
            className="input-search"
            type="text"
          />
          <button type="submit" className="btn-search">
            <img src={search} />
          </button>
        </div>
      </form>
    </header>
  );
}

Search.propTypes = {};

export default Search;
