import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleSheCodesResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiURL).then(handleDictionaryResponse);

    let sheCodesApiKey = "1693401bba301of7bbf9t44f55436a1a";
    let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${sheCodesApiKey}`;
    axios.get(sheCodesApiUrl).then(handleSheCodesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeWord(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form id="searchEngine" className="search" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a word..."
                  onChange={changeWord}
                  name="search"
                  autoComplete="off"
                />
              </div>
              <div className="col-3">
                <input type="submit" value="Search" />
              </div>
            </div>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
