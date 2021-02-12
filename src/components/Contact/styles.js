import styled from 'styled-components';

export const ContantContainer = styled.div`
    background: #EE0E7D;
    height: 48rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        font-size: 3.2rem;
        font-family: 'Barlow';
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
        max-width: 67.67rem;
        text-align: center;
        line-height: 4.0rem;
        margin-bottom: 3.2rem;

        @media screen and (max-width: 500px) {        
          font-size: 3rem;
        } 
    }

    span {
      font-size: 1.6rem;
      color: #fff;
      font-family: 'Barlow';
      text-align: center;
      margin-bottom: .8rem;

    }

    h3 {
      font-size: 3.2rem;
      font-family: 'Barlow';
      color: #fff;
      font-weight: 500;
      text-align: center;

      @media screen and (max-width: 500px) {        
          font-size: 2.5rem;
        } 
    }
`;