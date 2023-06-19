import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Dictionary app</header>
        <main>
          <Dictionary />
        </main>
        <footer>
          Coded by <strong>Katie Haughey</strong>
        </footer>
      </div>
    </div>
  );
}

export default App;
