import React from 'react';

import {JussiContainer, JussiContent, JussiText, JussiImages } from './styles' 

import JussiImage from '../../images/jussi/image-jussi.png'

const Jussi = () => {
    return (
      <JussiContainer id="jussi">
        <JussiContent>
          <JussiText>
            <h2>Olá, somos <br/> a Jüssi</h2>
            <p>
              A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
            </p>
            <button>Conheça a Jüssi</button>        
          </JussiText>
           
          <JussiImages>
            <img src={JussiImage} alt=""/>
          </JussiImages>
        </JussiContent>
      </JussiContainer>
    );
  };
  
  export default Jussi