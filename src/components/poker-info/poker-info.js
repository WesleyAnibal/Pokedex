
import React from 'react';
import './styles.css';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import BlogCard from '../card/blog-card';


const PokerInfo = ({pokerInfo}) => {
    let history = useHistory();
    function name(url) {
        const id = url.split("/")[6];
        history.push(`/pokemon/${id}/`);            
    }


   return <div className="pokemon-list">
    {pokerInfo.results?.map(pokemon => (
        <article key={pokemon.name}>
            <BlogCard pokemon={pokemon} className="card" ></BlogCard>
        </article>
    ))}
  </div>
}



export default PokerInfo;