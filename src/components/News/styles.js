import styled from 'styled-components';

export const NewsContainer = styled.section`
  background: #000;
  height: 43.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {

    position: relative;
    width: 67.6rem;
    display: flex;
    align-items: center;   
    justify-content: start;   
    
    

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
      font-family: 'Barlow';
      font-weight: 700;
      line-height: 4.0rem;
      color: #fff;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 4.2rem;
    }
  }

  form {
    
    width: 52rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #03FFA5;


    input {
      border: none;
      height: 6rem;
      width: 32rem;
      background: transparent;
      color: #fff;
      font-family: "Barlow";
      font-size: 1.6rem;

      &::placeholder {
        color: #fff; 
      }

      &::-moz-placeholder { 
        color: #fff;
      }
      
    }

    button {
      background: none;
      border: none;
      text-transform: uppercase;
      font-size: 1.6rem;
      font-family: "Barlow";
      font-weight: 700;
      color: #03FFA5;
    }
  }
`;

export const NewsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


