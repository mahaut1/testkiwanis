import './App.css';
import affiche from './affiche_concours_photo_30012024.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Concours Photos Kiwanis 2024- Revenez le 15 Février
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <img src={affiche} className="Affiche" alt="affiche" />
      </header>
    </div>
  );
}

export default App;
