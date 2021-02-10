import React from 'react';

import Batedeira from '../../images/banner/batedeira.png';
import Geladeira from '../../images/banner/geladeira.png';
import Bebida from '../../images/banner/bebiba.png';
import {BannerContainer, BannerContent, BannerText, BannerImages} from './styles';

import Card from '../CardBanner/index';

const Banner = () => {
    return (
      <>
        <BannerContainer>
          <BannerContent>
            <BannerText>
              <div>
                <h1>criamos lojas que vendem mais.</h1>
                <p> 
                  A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
                  Precisa criar sua loja ou migrar de plataforma?
                </p>
                <button type="button">Veja nossas soluções</button>
              </div>
            </BannerText>
            
            <BannerImages>

              <Card img={Batedeira} description='Comprar em 12x' card="batedeira"/>
              <Card img={Geladeira} description='Mais detalhes' card="geladeira"/>
              <Card img={Bebida} description='Adicionar à sacola' card="bebida"/>
            
            </BannerImages>  
          </BannerContent>

        </BannerContainer>

      </>
    );
  };
  
  export default Banner;