import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary app</h1>
        </header>
        <main>
          <Dictionary defaultWord="forest" />
        </main>
        <footer>
          Coded by{" "}
          <a
            href="https://www.katiehaughey.com"
            target="_blank"
            rel="norefferer"
          >
            <strong>Katie Haughey</strong>
          </a>{" "}
          and is open sourced on{" "}
          <a
            href="https://github.com/KatieHaughey/dictionary"
            target="_blank"
            rel="norefferer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
