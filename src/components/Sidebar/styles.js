import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 50%;
  height: 50%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '12rem' : '-100%')};
  
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;


export const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #03FFA5;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 4rem);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(2, 4rem);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-family: 'Barlow';
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #03FFA5;
    transition: 0.2s ease-in-out;
  }
`;


export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 5rem;
  background: #03FFA5;
  white-space: nowrap;
  padding: 1.6rem 6.4rem;
  color: #010606;
  font-size: 1.6rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s  ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;