
import React from 'react';
import './styles.css';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';


const PokerInfo = ({pokerInfo}) => {
    let history = useHistory();
    function name(url) {
        const id = url.split("/")[6];
        history.push(`/pokemon/${id}/`);            
    }


   return <div className="pokemon-list">
    {pokerInfo.results?.map(pokemon => (
        <article key={pokemon.name} onClick={() => name(pokemon.url) }>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`}  alt="pokeballs" ></img>
            <strong>{pokemon.name}</strong>
        </article>

    ))}
  </div>
}



export default PokerInfo;