import styled from 'styled-components'


export const JussiContainer = styled.section`
 
  background: linear-gradient(90deg, #FFFFFF 50%, #F2F2F2 50%);
`;

export const JussiContent = styled.div`

  display: flex;
  max-width: 102.4rem;
  margin: 0 auto;  
  padding: 6.4rem 0 6.4rem 0;
  
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const JussiText = styled.div`
  width: 24.1rem;
  

  @media screen and (max-width: 800px) {
    padding: 1rem;
    width: 100%;
  }

  h2 {
    font-family: 'Barlow';
    font-weight: 700;
    font-size: 3.2rem;
    text-transform: uppercase;
    margin-bottom: 2.4rem;
    line-height: 4.2rem;
    width: 20rem;

    @media screen and (max-width: 800px) {
      padding: 1rem;
      width: 100%;
      text-align: center;
    }
    
  }

  p {
    font-family: 'Barlow';
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-bottom: 3.6rem;

    @media screen and (max-width: 800px) {
      text-align: justify;
    }
  }

  button {
      width: 16.2rem;
      height: 4.8rem;
      font-size: 1.6rem;
      font-family: 'Barlow';
      padding: 0.25rem 1rem;
      border-radius: 0.6rem;
      border: 2px solid #000;
      background-color: transparent;
      transition: all .3s ease-in;

    @media screen and (max-width: 800px) {      
      margin-bottom: 2.6rem;
    }

      &:hover{
        background-color: #000;
        color: #fff;

      }
    }

`;

export const JussiButtonWrapper = styled.div`

  width: 100%;
  text-align: left;

  @media screen and (max-width: 800px) {      
    text-align: center;
    }
`;

export const JussiImages = styled.div`
    width: 80%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 800px) {      
      margin: 0 auto;
      width: 95%;
    }

  img {
    width: 85%;

    @media screen and (max-width: 800px) {
      width: 100%;
      margin: 0 auto;
    }
  }
`;

