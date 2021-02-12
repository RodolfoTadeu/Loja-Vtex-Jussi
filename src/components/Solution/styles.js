import styled from  'styled-components';

export const SolutionContainer = styled.section`
    background: #fff;
    padding: 5.6rem 0 5.6rem 0;
`;

export const SolutionContent = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 102.4rem;
    margin: 0 auto;

`; 

export const SolutionTitle = styled.div`
           
    div {
        
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;      

      &:before {
        content: '//';
        font-size: 3.2rem;
        font-family: "Barlow";
        font-weight: 700;
        position: absolute;
        left: 0;
        color: #03FFA5; 

        @media screen and (max-width: 800px) {        
         left: 1rem
        }        
      }  

      h2 {
        font-size: 3.2rem;
        font-weight: 700;
        font-family: 'Barlow';
        text-transform: uppercase;
        margin-left: 4rem;

        @media screen and (max-width: 800px) {        
         margin-left: 5rem;
        }
      }      

    }
`;

export const CardSolutionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.4rem;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {        
    justify-content: center;  
  } 
`;