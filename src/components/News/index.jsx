import React from 'react';
import { NewsContainer, NewsContent } from './styles';


const News = () => {
    return (
      <NewsContainer>
        <NewsContent>
          <div>
              <h2>receba novidades da nossa área <br/> de produtos digitais.</h2>
          </div>

          <form>
              <input type="text" placeholder="Digite seu e-mail"/>
              <button>cadastrar</button>
          </form>
        </NewsContent>
      </NewsContainer>
    )
};

export default News;