import styled from 'styled-components';

export const FooterContainer = styled.footer`
    height: 8rem;
    display: flex;
    align-items: center;
    background: #000;
`;

export const FooterContent = styled.div`
    width: 102.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    @media screen and (max-width: 900px) {        
      padding: 0 1.5rem;
    } 

`;

export const FooterSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

    a { 
      display: flex;
      align-items: center;
      justify-content: center;

      &:not(:last-child) {
          margin-right: 1.7rem;
      }
    }

    svg {
      height: 2.4rem;
      width: 2.4rem;
      color: #fff;
    
    }
`;


