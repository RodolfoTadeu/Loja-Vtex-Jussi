import React from 'react';

import {SolutionContainer, SolutionContent, SolutionTitle, CardSolutionWrapper} from './styles'
import CardSolution from  '../CardSolution'
import { useRepositories } from '../../context/DataContext'

const Solution = () => {

    const { repositories } = useRepositories();
    
    return (
    
      <SolutionContainer id="solucoes">        
        <SolutionContent>
          <SolutionTitle>
            <div>
              <h2>nossas soluções</h2>      
            </div>            
          </SolutionTitle>
          <CardSolutionWrapper>
            {repositories.map(repository => <CardSolution key={repository.id} repository={repository} />)}
          </CardSolutionWrapper>
        </SolutionContent>
      </SolutionContainer>
  );
  };
  
  export default Solution