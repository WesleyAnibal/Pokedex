import React from 'react';

const Front = ({pokemon}) => {

    return (
        <div className="front">
            <div className="image-container">
                <img className="card-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.url.split("/")[6]}.png`}></img>
            </div>
            <div>
                <div className="blog-post">
                    <strong>{pokemon?.name}</strong>
                </div>

            </div>
        </div>
      )
}

export default Front;