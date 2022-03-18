import React, { useEffect, useState } from 'react';
import '../styles/GameList.css'
import Game from './Game';
import axios from 'axios'

const GameList = () => {
    const [gamer, setGamer] = useState([])

    useEffect(() => {
        axios
          .get("https://apis.wilders.dev/wild-games/games/")
          .then((res) => {
          setGamer(res.data);
          console.log(res)
          })
          
      }, []);

    return (
        <div className='gamer'>
            <div className='gamer__card'>
                {gamer.map((games) => (
                <Game name={games.name} key={games.id} images={games.background_image} released={games.released} />
                 ))}     
            </div>   
        </div>
    );
};


export default GameList;