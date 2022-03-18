import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails'
import './styles/Header.css'

function App() {
  return (
    <BrowserRouter>
      <Header name='React Gamer' />
      <Routes>
        <Route exact path="/" element={<GameList />} />
        <Route path="/games/:id" element={<GameDetails />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;
