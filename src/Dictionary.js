import React, { useState } from "react";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`searching for ${word}`);
  }

  function changeWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="search" onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word..."
          onChange={changeWord}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
