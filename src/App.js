import './styles/App.css';
import Header from './components/Header';
import GameList from './components/GameList';

function App() {
  return (
    <div className="App">
      <Header className="header" name='React Gamer'/>
      <GameList />
    </div>
  );
}

export default App;
