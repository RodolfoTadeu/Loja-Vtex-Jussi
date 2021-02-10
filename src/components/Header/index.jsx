import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {FiShoppingCart} from 'react-icons/fi';
import logoImg from '../../images/jussi/logoJussi.svg';
import { animateScroll as scroll } from 'react-scroll';

import Form from '../Form/index'

import {
HeaderContainer,
Nav,
NavbarContainer,
NavLogo,
NavMenu,
NavItem,
NavLinks,
MobileIcon,
SearchLoginCart,
SearchLoginFormWrapper,
Login,
Cart,
}
from './styles';


const Header = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', changeNav);
    }, []);
  
    const toggleHome = () => {
      scroll.scrollToTop(); //eslint-disable-line
    };
    
    return (
      <>
        <HeaderContainer>
            <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo onClick={toggleHome}  to='/'>
                    <img src={logoImg} alt="logo Jussi"/>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                <FaBars />
                </MobileIcon>
                <NavMenu>
                <NavItem>
                    <NavLinks
                      to='solucoes'
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}>
                      Nossas soluções
                    </NavLinks> 
                </NavItem>
                <NavItem>
                    <NavLinks
                        to='jussi' 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >Conheça a Jüssi</NavLinks> 
                </NavItem>
   
                </NavMenu>
            </NavbarContainer>
            </Nav>
            <SearchLoginCart>                
              <SearchLoginFormWrapper>
                <Form />                  
              </SearchLoginFormWrapper> 
              <Login>Login</Login>
              <Cart> <FiShoppingCart /></Cart> 
            </SearchLoginCart>            
        </HeaderContainer>
      </>
    );
  };
  
  export default Header;