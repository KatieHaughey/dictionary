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
          Coded by <strong>Katie Haughey</strong>
        </footer>
      </div>
    </div>
  );
}

export default App;
