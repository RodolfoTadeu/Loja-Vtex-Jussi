import React from 'react';

import {
CardSolutionContainer,
CardSolutionimageWrapper,
CardSolutionContent,
CardSolutionProduct
}
from './styles'

const CardSolution = ({ repository }) => {
  return(
    <CardSolutionContainer>
      <CardSolutionimageWrapper>
        <img src={repository.owner.avatar_url} alt={repository.full_name}/>
      </CardSolutionimageWrapper>
    
      <CardSolutionContent>
        <CardSolutionProduct>
          <h3>{repository.full_name}</h3>
          <span>{repository.homepage}</span>
          <ul>
            <li>{repository.full_name}</li>
            <li>{repository.language}</li>
            <li>{repository.name}</li>
          </ul>          
        </CardSolutionProduct>
          <button>Ver solução</button>
      </CardSolutionContent>  
    </CardSolutionContainer>
  )
}

export default CardSolution