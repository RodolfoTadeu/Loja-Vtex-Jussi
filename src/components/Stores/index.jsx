import React from 'react';
import {BsArrowRight} from 'react-icons/bs';

import {StoresContainer, StoresContent} from './styles';

import Brastemp from '../../images/brands/logo-brastemp@3x.svg';
import CompraCerta from '../../images/brands/logo-consul@3x.svg';
import Consul from '../../images/brands/logo-consul2@3x.svg';
import Thebar from '../../images/brands/logo-thebar@3x.svg';

const Stores = () => {
  return (
    <StoresContainer> 
      <StoresContent>
        <div>
          <h3>Nossas principais lojas VTEX</h3>   
          <BsArrowRight />       
        </div>

       

        <ul>
          <li>
            <a href="https://www.brastemp.com.br/" target="blank">
              <img src={Brastemp} alt="brastemp"/>
            </a>
          </li>
          <li>
            <a href="https://www.compracerta.com.br/" target="blank">
              <img src={CompraCerta} alt="bompra certa"/>
            </a>
          </li>
          <li>            
            <a href="https://loja.consul.com.br/" target="blank">
              <img src={Consul} alt="consul"/>
            </a>
          </li>
          <li>            
            <a href="https://br.thebar.com/" target="blank">
              <img src={Thebar} alt="the bar"/>
            </a>
          </li>
        </ul>

      </StoresContent>
      
    </StoresContainer>
  );
};

export default Stores