import React from 'react';
import '../styles/Header.css';

const Header = (props) => {
    return (
        <div className='header'>
            <h1>Bienvenue sur {props.name}</h1>         
        </div>
    );
};

export default Header;