import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]]);
  }

  function search(event) {
    event.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiURL).then(handleResponse);
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
