import React from 'react';
import './styles.scss';

const Front = ({pokemon}) => {

    return (
        <div className="front">
            <div className="image-container">
                    <img className="card-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.url.split("/")[6]}.png`}></img>
                <h1 className="title">{pokemon?.name}</h1>
            </div>
        </div>
      )
}

export default Front;