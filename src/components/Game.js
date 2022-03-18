import { Link } from 'react-router-dom';
import '../styles/Game.css'

const Game = (props) => {
    const games = props

    const handleClick = () => {
         games.onDeleted(games.id)
    }

    return (
        <div className='game'>

            <Link to={`/games/${games.id}`}>
                <h2 className='game__title-rating'>{games.name} ({games.rating} / 5)</h2>
                <img className='game__image' src={games.images} alt='{games.name}' />
            </Link>

            <button type='button' className='game__button' onClick={handleClick}>Supprimer le jeu ci-dessus</button> 
        </div>
    );
};

export default Game;
