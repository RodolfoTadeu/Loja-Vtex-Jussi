import styled from 'styled-components';

export const BannerContainer = styled.section`

  background: #03FFA5;
  height: 56rem;
  width: 100%;  
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 8rem;

  @media screen and (max-width: 900px) {    
    height: 95rem;
    margin-top: 2rem;
  }

  @media screen and (max-width: 500px) {    
    height: auto;
    margin-top: 8rem;
  }

`;

export const BannerContent = styled.div`
  display: flex;

  @media screen and (max-width: 900px) {    
    
    flex-wrap: wrap;
  }
`;

export const BannerText = styled.div`
  position: relative;
  width: 53.8rem;
  padding: 5rem 0 0;
  

  @media screen and (max-width: 900px) {
    width: 100%;
    transition: all 0.4s ease;
  }

  &:before {
    content: '//';
    font-size: 6rem;
    font-family: "Barlow";
    position: absolute;
    left: 1rem;
    top: auto;
    color: #fff;

    @media screen and (max-width: 550px) {
      content: ''
    }
  }        

  div {
    width: 45.1rem;
    margin-left: 8rem;

    @media screen and (max-width: 900px) {
      width: 100%;
      margin-left: 0;
      text-align: center;
    }

    h1 {
      font-size: 6.4rem;
      font-family: 'Barlow';
      text-transform: uppercase;
      font-weight: 500;   
      width: 45.1rem;
      text-align: left;
      margin: 0 auto;    
      
      @media screen and (max-width: 900px) {
        text-align: center;
        width: 90%;
      }

      @media screen and (max-width: 500px) {        
        width: 90%;
      } 
             
    }

    p {
      font-family: 'Barlow';
      font-size: 1.6rem;
      width: 32.9rem;
      margin: 1.6rem 0 3.2rem 0;
      line-height: 2.4rem; 

      @media screen and (max-width: 900px) {        
        width: 100%;
        padding: 0 1rem;
      } 

    
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
      margin-bottom: 3.2rem; 

      &:hover{
        background-color: #000;
        color: #fff;

      }
    }
  }
`;

export const BannerImages = styled.div`
 
  transition: all 0.4s ease;
  display: grid;
  grid-template-columns: repeat(8,6rem);
  grid-template-rows: repeat(9, 5rem);
  margin: 0 auto;

  @media screen and (max-width: 500px) {        
    grid-template-columns: repeat(6,6rem);
    grid-template-rows: repeat(11,6rem);
    margin: 0 auto;
  } 
`;



