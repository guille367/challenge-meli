import React, { useEffect, useState } from "react";
import logo from "../images/logo_ml_mini.png";
import search from "../images/ic_search.png";
import { useHistory, useLocation } from "react-router-dom";

function Search(_props: any) {
  const history = useHistory();
  const location = useLocation();

  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`/items?q=${text}`);
  };

  const handleTextSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  useEffect(() => {
    const newQuery = new URLSearchParams(location.search).get("q") || "";
    setText(newQuery);
  }, [location.search]);

  return (
    <header>
      <form
        onSubmit={handleSubmit}
        className="search-nav grid grid-cols-12 gap-12"
      >
        <a className="link-home col-start-2 col-span-1" href="/">
          <img alt="meli logo" src={logo} />
        </a>
        <div className="col-span-9 search-nav--input">
          <input
            id="input-search"
            onChange={handleTextSearch}
            value={text}
            placeholder="Nunca dejes de buscar"
            className="input-search"
            type="text"
          />
          <button
            id="btn-submit"
            type="submit"
            disabled={text === ""}
            className="btn-search"
          >
            <img alt="search" src={search} />
          </button>
        </div>
      </form>
    </header>
  );
}

Search.propTypes = {};

export default Search;
