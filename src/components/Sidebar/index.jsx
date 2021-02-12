import React from 'react';
import {
SidebarContainer,
Icon,
CloseIcon,
SidebarWrapper,
SidebarMenu,
SidebarLink,
} from './styles'

const Sidebar = ({isOpen, toggle}) => {
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
              <CloseIcon />
            </Icon>
            <SidebarWrapper>
              <SidebarMenu>
                <SidebarLink
                to='solucoes'
                onClick={toggle}
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}                
                >
                  Nossas soluções
                </SidebarLink>
                <SidebarLink
                to='jussi'
                onClick={toggle}
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80} 
                >
                  Conheça a Jüssi
                </SidebarLink>                
              </SidebarMenu>      
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;