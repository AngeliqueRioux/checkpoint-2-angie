import React from 'react';
import '../styles/Game.css'
const Game = (props) => {
    const { games }= props
    return (
        <div className='game'>
            <h2 className='game__title'>{games.name}</h2>
            <img className='game__image' src={games.images} alt= 'Show gamer' />
            <p className='game__released'>{games.released}</p>
        </div>
    );
};

export default Game;