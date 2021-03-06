import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    align-items: center;

    input {
        width: 24rem;
        height: 4rem;
        border-radius: 2.4rem;
        border: 0;
        margin-right: -4rem;
        padding: 0 4rem 0 1rem;
        font-size: 1.6rem;
        font-family: 'Barlow';
        border: 1px solid #F2F2F2;
        color: #3a3a3a;
        outline: none;

        &::placeholder {
        color: #EE0E7D; 
        }  

        @media only screen and (max-width: 800px) {
          border-radius: 0;
          width: 100%
        }
    }

    button {
        height: 4rem;
        border: 0;
        background: transparent;
        outline: none;
        cursor: pointer;

        svg {
            height: 2.5rem;
            width: 2.5rem;
        }        
    }
`; 
export const ErrorWrapper = styled.span`
    text-align: center;
    font-size: 1.4rem;
    font-family: 'Barlow';

    @media screen and (max-width: 800px) {        
        text-align: left;
    } 
`; 

export const Error = styled.div`
    display: block;
    color: #c53030;
    margin-top: .5rem;

`;
