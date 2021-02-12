import styled from 'styled-components'

export const StoresContainer = styled.section`

  display: flex;
  align-items: center;
  justify-content: center;
  background: #F2F2F2;
  height: 8rem; 

  @media screen and (max-width: 800px) {        
   padding: 1rem
  } 

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    svg {
      height: 1.6rem;
      width: 2.4rem;

      @media screen and (max-width: 650px) {        
        display: none;
      } 
    }

    @media screen and (max-width: 650px) {        
     flex-wrap: wrap;
     margin-bottom: 0;
    } 
  }

  h3 {
    font-size: 1.6rem;
    font-family: 'Barlow';
    font-weight: 500;
    margin-right: 4rem;


    @media screen and (max-width: 650px) {        
      margin-right: 4rem;
    } 
  }

  ul {
    list-style: none;
    display: flex;
    margin-left: auto;

    @media screen and (max-width: 650px) {        
      justify-content: space-between;
      width: 100%;
    } 

    li {

      &:not(last-child) {
        margin-left: 4.8rem;
        display: flex;
        align-items: center;

        @media screen and (max-width: 650px) {        
          margin: 0 1rem 0 0;
          display: flex;
          align-items: center;
        }
      }

      a{
        img {
          width: 100% 
          
        }
      }
    }
  }
`;

export const StoresContent = styled.div`
  width: 102.4rem;
`;


