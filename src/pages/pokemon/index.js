import React, { useEffect, useState }from 'react';
import { render } from '@testing-library/react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import './styles.css';

const Pokemon = props => {
    let { id } = useParams();
    const [ pokemon, setPokemon ] = useState({});

    useEffect(() => {
        async function fetch() {
            const res = await api.get(`/pokemon/${id}/`);
            setPokemon(res.data);
        }
        fetch();

    }, []);

    return (
        <div className="pokemon-info">
            <h1>{pokemon.name}</h1>
            <div>
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
            </div>
            <div>
                <img src={pokemon.sprites?.front_default} className="pokemon-img"></img>
            </div>
        </div>
    )

}


export default Pokemon;