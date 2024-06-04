"use client";
import React, { useState } from "react";
import { useStore } from "../_providers/StoreProvider";

const Search = ({ searchProduct }) => {
  const { setSearchElement } = useStore();
  const keySearchDown = (event) => {
    if (event.key === "Enter") {
      searchProduct();
    }
  };
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search an item..."
        onChange={(e) => setSearchElement(e.target.value)}
        onKeyDown={keySearchDown}
      />
      <button type="submit" className="btn btn-primary" onClick={searchProduct}>
        <i className="fas fa-search" />
        Search
      </button>
    </div>
  );
};

export default Search;
