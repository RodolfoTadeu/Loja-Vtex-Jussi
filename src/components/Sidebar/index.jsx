import React from 'react';
import {
SidebarContainer,
Icon,
CloseIcon,
SidebarWrapper,
SidebarMenu,
SidebarLink,
SideBtnWrap,
SidebarRoute
} from './styles'

const Sidebar = ({isOpen, toggle}) => {
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
              <CloseIcon />
            </Icon>
            <SidebarWrapper>
              <SidebarMenu>
                <SidebarLink to='solucao' onClick={toggle}>Nossas soluções</SidebarLink>
                <SidebarLink to='jussi' onClick={toggle}>Conheça a Jüssi</SidebarLink>                
              </SidebarMenu>
              <SideBtnWrap>
                <SidebarRoute to="/login">Login</SidebarRoute>
              </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;