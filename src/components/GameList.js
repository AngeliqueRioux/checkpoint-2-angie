import React, { useEffect, useState } from 'react';
import '../styles/GameList.css'
import Game from './Game';
import axios from 'axios'

const GameList = () => {
    const [gamer, setGamer] = useState([])
    const [click, setClick] = useState(false)


    useEffect(() => {
        axios
            .get("https://apis.wilders.dev/wild-games/games")
            .then((res) => {
                setGamer(res.data)
            })
            .catch(error => console.log(error))

    }, [click]);

    const handleChange = () => {
        setClick(!click)
    }

    const deleteId = (id) => {
        const suppId = gamer.filter(game => {
            return game.id !== id
        })
        setGamer(suppId)
    }

    return (
        <div className='gamer'>
            <h1>La liste de nos jeux</h1>

            <div className='gamer__cards'>
                <div>
                    <button className='gamer__cards__button' onClick={handleChange}>{click ? 'Tous les Games !' : 'Les meilleurs Games !'}</button>
                </div>
                {gamer.length > 0 && gamer
                    .filter((game) => {
                        return !click || game.rating >= 4.5
                    })
                    .map((game, id) => {
                        return <Game key={id} id={game.id} name={game.name} images={game.background_image} rating={game.rating} released={game.released} onDeleted={deleteId} />
                    })}
            </div>
        </div>
    );
};


export default GameList;