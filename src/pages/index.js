import React, {useState} from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Header toggle={toggle}/>
      </>
  )
}

export default Home 

