import styled from 'styled-components';

export const CardSolutionContainer = styled.div`
    width: 24.1rem;
    height: 38.1rem;
    //background: goldenrod;
    border: 1px solid #F2F2F2;
    border-radius: .4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:not(:last-child) {
        margin-right: 2rem;
    }
`;

export const CardSolutionimageWrapper = styled.div`
   
    margin: 0 12.5rem 5.3rem 1.6rem; 
    img {
        border-radius: 50%;
        width: 100%;
    }
`;

export const CardSolutionContent = styled.div`

  width: 20.9rem;
  button {
    height: 4.8rem;
    width: 100%;
    border-radius: 0.6rem;
    border: 0;
    font-family: "Barlow";
    font-size: 1.6rem;
    background: #03FFA5;
    font-family: "Barlow";
    transition: all 0.4s ease;

    &:hover {
      background: #00c881;
    }
    
  }
`;

export const CardSolutionProduct = styled.div`

  h3 {
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
    font-family: "Barlow";
    font-weight: 500;
  }

  span {
    display: flex;
    font-size: 1.2rem;
    font-family: "Barlow";
    margin-bottom: 1.6rem;
    color: #EE0E7D;
  }

  ul {
    color: #5B5B5B;
    font-size: 1.2rem;
    margin-bottom: 1.6rem;
    

    li {
      list-style: inside;
      padding: 0;
      font-family: "Barlow";
      font-size: 1.2rem;
      line-height: 1.8rem;
    }
  }  
`;