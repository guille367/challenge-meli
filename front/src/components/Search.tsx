import React from "react";
import PropTypes from "prop-types";
import logo from "../images/logo_ml_mini.png";

function Search(_props: any) {
  return (
    <header className="search-nav">
      <div className="grid grid-cols-12 w-full">
        <div className="col-start-2 col-span-1">
          <a href="#">
            <img className="logo_mini" src={logo} />
          </a>
        </div>
        <div className="col-span-9">
          <input className="search-nav--input" type="text" />
        </div>
      </div>
    </header>
  );
}

Search.propTypes = {};

export default Search;
