import styled from 'styled-components';
import {Link as LinkR}  from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    overflow: hidden;    
    background: #fff;
    height: 8rem;
    position: fixed;
    z-index: 999;
    width: 100%;
    border-bottom: 1px solid #03FFA5;
    transition: all 0.2s ease;
    top: 0;

    @media only screen and (max-width: 800px) {
      height: 12rem;
      display: flex;
      flex-wrap: wrap;
      order: 1;
      width: 100%
  }
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	@media screen and (max-width: 960px) {
	    transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`

	display: flex;
	justify-content: space-between;
`;


export const NavLogo = styled(LinkR)`
	display: flex;
	color: #fff;
	align-items:center;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
  padding: 0 3.2rem 0 2.4rem;

  @media screen and (max-width: 800px) {        
    padding: 0 3.2rem 0 1rem;
  }

`;

export const NavMenu = styled.ul `
  display: flex;
  list-style: none;
  transition: all 0.2s ease;
  
  @media screen and (max-width: 500px) {
    display: none;  
    
  }
`;


export const NavItem = styled.li`
  display: flex;

    &:not(:last-child){
        margin-right: 3.2rem;
    }  
`;

export const NavLinks = styled(LinkS)`
  font-family: 'Barlow';
  font-size: 1.6rem;  
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #03FFA5;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    order: 1;
    width: 100%
  }
`;

export const SearchLoginCart = styled.div`
    padding: 0 2.5rem 0 0;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;

    @media only screen and (max-width: 800px) {
       width: 100%
  }
`;

export const SearchLoginFormWrapper = styled.div`

  @media only screen and (max-width: 800px) { 
      width: 100%
    }

`;

export const Login = styled.span`
    font-size: 1.8rem;
    font-family: 'Barlow';
    margin-left: 6.2rem;

    @media screen and (max-width: 800px) {        
      margin-left: 4rem;
    } 

`;

export const Cart = styled.div`
    margin-left: 3.5rem;
    svg {
        width: 2.5rem;
        height: 2.5rem;
    }
`;

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 500px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;

    svg {
      width: 3rem;
      height: 3rem;
    }
  }
`;