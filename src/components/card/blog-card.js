import React, { useState } from 'react';
import Front from './front';
import Back from './back';
import './styles.scss';

const BlogCard = ({pokemon}) => {

    const [flipped, setFlipped] = useState(false);
    
    let flip = () => {
        setFlipped(!flipped);
    }

    return (

        <div onMouseEnter={flip} onMouseLeave={flip} className={"card-container" + (flipped ? " flipped" : "")}>
  
          <Front pokemon={pokemon}/>
          <Back pokemon={pokemon}/>
        </div>
  
      )
}

export default BlogCard;