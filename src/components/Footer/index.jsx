import React from 'react';
import { FooterContainer, FooterContent, FooterSocialMedia } from './styles';
import {FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

import Logo from '../../images/footer/wppcompany.png'


const Footer = () => {
    return (
        <FooterContainer>
          <FooterContent>
            <div>
                <img src={Logo} alt="logo wpp"/>
            </div>

            <FooterSocialMedia>
                <a href="teste">
                < FaFacebookF/>                       
                </a>

                <a href="teste">
                < FaInstagram/>                       
                </a>

                <a href="teste">
                < FaLinkedinIn/>                       
                </a>
              </FooterSocialMedia>
            </FooterContent>
        </FooterContainer>
    )
};

export default Footer;