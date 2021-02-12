import styled from 'styled-components';

export const CardContainer = styled.div`

  background-color: #fff;
  width: 20.9rem;
  height: 27.1rem;
  text-align: center;
  border-radius: 0.8rem;
  box-shadow: 0 3.2rem 3.2rem rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  div {
    width: 18.3rem;
    height: 19.1rem;
    display: flex;
    align-items: center;
    justify-content: center;  
    
    img {

      @media only screen and (max-width: 1024px) {
        width: 100%;
      }

    }  
    
  } 

  button {
    height: 4.8rem;
    width: 16rem;
    border-radius: 2.4rem;
    border: 2px solid #EE0E7D;
    color: #EE0E7D;
    background-color: transparent;
    font-size: 1.6rem;
    font-family: 'Barlow';
    transition: all .4s ease-in;

    &:hover {
      background: #EE0E7D;
      color: #fff;
    }
  }

  &.geladeira{
    grid-row: 4/6;

    @media screen and (max-width: 500px) {        
      grid-row: 5/5; 
      z-index: 3; 
    } 
  }

  &.batedeira{
    grid-column: 3/5;
    grid-row: 1/4;
    z-index: 3;

    @media screen and (max-width: 500px) {        
    
      grid-column: 3/5;
      grid-row: 1/4;
      z-index: 4;
    } 
  }

  &.bebida{
    grid-row: 5/9;
    grid-column: 5/5;

    @media screen and (max-width: 500px) {        
      grid-row: 8/7; 
      grid-column: 3/6;
    }
  }
`;