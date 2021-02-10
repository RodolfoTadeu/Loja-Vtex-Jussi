import styled from 'styled-components'


export const JussiContainer = styled.section`
 
  background: linear-gradient(90deg, #FFFFFF 50%, #F2F2F2 50%);
  height: 64.8rem;
`;


export const JussiContent = styled.div`

  display: flex;

  width: 102.4rem;
  height: 64.8rem;
  margin: 0 auto;
  
  padding: 6.4rem 0 6.4rem 0;
`;

export const JussiText = styled.div`
  width: 24.1rem;

  h2 {
    font-family: 'Barlow';
    font-weight: 700;
    font-size: 3.2rem;
    text-transform: uppercase;
    margin-bottom: 2.4rem;
    line-height: 4.2rem;
    
  }

  p {
    font-family: 'Barlow';
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-bottom: 3.6rem;
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

      &:hover{
        background-color: #000;
        color: #fff;

      }
    }

`;

export const JussiImages = styled.div`
    width: 80%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

  img {
    height: 52rem;
    width: 67.6rem;  
  }
`;

