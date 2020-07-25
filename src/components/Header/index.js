import React from 'react';
import './styles.css';
import Search from '../search/search';
const Header = () => (
    <header id="main-header">
        <div className="main-search">
            <Search />
        </div>
        <div className="main-logo">
            Pokédex
            <img src="https://image.flaticon.com/icons/svg/188/188940.svg" alt="pokedex" className="pokedex-img"></img>
    
        </div>
    </header>

);

export default Header;