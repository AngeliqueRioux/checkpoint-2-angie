import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>Bienvenue sur {props.name}</h1>;
        </div>
    );
};

export default Header;