import "./index.css";
import DataFetcher from "./components/DataFetcher";

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>Котики з React 🐾</h1>
        <p>
          Проєкт демонструє роботу з асинхронними HTTP-запитами за допомогою{" "}
          <code>useEffect</code> та <code>axios</code>. Отримуйте випадкові фото котиків!
        </p>

        <DataFetcher />
      </div>
    </div>
  );
}

export default App;
