import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
*,
*::after,
*::before{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html{
  /*font-size: 1rem = 10px 10px/16 = 62.5 */
  font-size: 62.5%; 

  @media only screen and (max-width: 1024px) {
        font-size: 50%;
    }
}

body{ 
  box-sizing: border-box;  
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}

`;