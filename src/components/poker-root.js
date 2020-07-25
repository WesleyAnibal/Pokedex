import React, { Component } from 'react';
import Search from './search/search';
import PokerInfo from './poker-info/poker-info';
import Habilidades from './habilidade/habilidade';

class PokerRoot extends Component {
    constructor () {
        super();
        this.state = {

        }
    }
    
    render () {
        return (
            <div className="App">

                <Search />

                <PokerInfo />
                <Habilidades />
            </div>
        );
    }
}

export default PokerRoot;