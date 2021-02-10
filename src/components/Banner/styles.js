import styled from 'styled-components';

export const BannerContainer = styled.section`

  background: #03FFA5;
  height: 65rem;
  width: 100%;  
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`;

export const BannerContent = styled.div`
  display: flex;
  margin-top: 8rem;
`;


export const BannerText = styled.div`
  position: relative;
  width: 53.8rem;

  &:before {
    content: '//';
    font-size: 6rem;
    font-family: "Barlow";
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
  }        

  div {
    width: 45.1rem;
    margin-left: 8rem;

    h1 {
      font-size: 6.4rem;
      font-family: 'Barlow';
      text-transform: uppercase;
      font-weight: 500;   
      width: 45.1rem;
      text-align: left;
      margin: 0 auto;
      
      line-height: 77px;
    }

    p {
      font-family: 'Barlow';
      font-size: 1.6rem;
      width: 32.9rem;
      margin: 1.6rem 0 3.2rem 0;
      line-height: 2.4rem;  
    }

    button {
      width: 19.6rem;
      height: 4.8rem;
      font-size: 1.6rem;
      font-family: 'Barlow';
      padding: 0.25rem 1rem;
      border-radius: 0.6rem;
      border: 2px solid #000;
      background-color: transparent;
      transition: all .3s ease-in;

      &:hover{
        background-color: #000;
        color: #fff;

      }
    }
  }
`;

export const BannerImages = styled.div`
  position: relative;
  width: 56rem;
  height: 50rem;

`;



