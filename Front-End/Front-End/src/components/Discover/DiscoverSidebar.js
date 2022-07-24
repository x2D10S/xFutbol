import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './DiscoverElements'
import Cookies from 'universal-cookie'
const Sidebar = ({isOpen, toggle, logIn}) => {
let cookies=new Cookies();
    return (
        <div>
            <SidebarContainer isOpen={isOpen} onClick={toggle}> 
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>
                         Home
                        </SidebarLink>
                        <SidebarLink to="/aboutus" onClick={toggle}>
                         About 
                        </SidebarLink>
                        <SidebarLink to="/" onClick={toggle}>
                         Leagues 
                        </SidebarLink>
                        {logIn ?
                            <SidebarLink to="/transferlist" onClick={toggle}>
                         Transfers
                        </SidebarLink> :
                        <SidebarLink to="/signup" onClick={toggle}>
                         Sign Up 
                        </SidebarLink>}
                    </SidebarMenu>
                    {logIn?
                        <SideBtnWrap>
                        <SidebarRoute to="/">{cookies.get('user')}</SidebarRoute>
                    </SideBtnWrap>
                    :
                    <SideBtnWrap>
                        <SidebarRoute to="/signin">Sign In</SidebarRoute>
                    </SideBtnWrap>}
                </SidebarWrapper>
            </SidebarContainer>
        </div>
    )
}

export default Sidebar
