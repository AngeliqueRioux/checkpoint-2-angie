import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/GameDetails.css'

const GameDetails = () => {
    const { id } = useParams()
    const [simpleGame, setSimpleGame] = useState({})

    useEffect(() => {
        axios
            .get(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then((res) => {
                setSimpleGame(res.data)
            })
            .catch(error => console.log(error))
    }, [id]);

    return (
        <div className='game-details'>
            <Link to={'/'}>
                <p className='game-details__back'>Retour page 1</p>
            </Link>
            <h2>{simpleGame.name}</h2>
            <p>Rating : {simpleGame.rating}</p>
            <h3>Date de création : {simpleGame.released}</h3>
            <img className='game__img' src={simpleGame.background_image} alt={simpleGame.name} />
        </div>
    );
};

export default GameDetails;