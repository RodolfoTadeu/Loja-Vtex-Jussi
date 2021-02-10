import styled from  'styled-components';

export const SolutionContainer = styled.section`
    background: #fff;
    height: 55.7rem; 

    padding: 5.6rem 0 5.6rem 0;
`;

export const SolutionContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 102.4rem;
    height: 44.5rem;
    //background: greenyellow;
    margin: 0 auto;

`; 

export const SolutionTitle = styled.div`
           
    div {
        
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;      
      /* height: 4rem; */

      &:before {
        content: '//';
        font-size: 3.5rem;
        font-family: "Barlow";
        font-weight: 700;
        position: absolute;
        left: 0;
        color: #03FFA5;
        
      }  

      h2 {
        font-size: 3.2rem;
        font-weight: 700;
        font-family: 'Barlow';
        text-transform: uppercase;
        margin-left: 4rem;
      }      

    }
`;

export const CardSolutionWrapper = styled.div`
  //background: red;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 2.4rem;
`;