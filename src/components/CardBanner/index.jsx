import React from 'react';
import { CardContainer } from './styles';


const Card = (children) => {

    return (
      <CardContainer className={children.card} >
        <div >
          <img src={children.img} alt="batedeira"/>                  
        </div>
        <button type="button">{children.description}</button>   
      </CardContainer>
    );
  };
  
  export default Card;