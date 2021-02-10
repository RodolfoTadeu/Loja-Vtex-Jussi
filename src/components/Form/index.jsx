import React, { useState} from 'react';
import {RiSearchLine} from 'react-icons/ri';
import api from '../../services/api';
import { useRepositories } from '../../context/DataContext';

import { FormContainer, Error, ErrorWrapper} from './styles';



const Form = () => {

  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  const { repositories, setRepositories } = useRepositories();

  async function handleAddRepository(event) {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get(`repos/${newRepo}`);
    
      const repository = response.data;
  
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    }catch (err) {
       setInputError('Erro na busca por esse repositório')
    }
  }

    return (     
      <>
        <FormContainer onSubmit={handleAddRepository}>
          <input             
          value={newRepo}
          onChange={event => setNewRepo(event.target.value)}
          placeholder="Buscar"/>
          <button> <RiSearchLine/></button>
        </FormContainer>   
        <ErrorWrapper>
          {inputError && <Error>{inputError}</Error>}
        </ErrorWrapper>
      </>
    );
  };
  
  export default Form;