import React from 'react'
import Cookies from 'universal-cookie'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarLink1, SideBtnWrap, SidebarRoute} from './SidebarElement'

const Sidebar = ({logIn, isOpen, toggle}) => {
    let cookies=new Cookies();
    return (
        <div>
            <SidebarContainer isOpen={isOpen} onClick={toggle}> 
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="discover" onClick={toggle}>
                         Discover 
                        </SidebarLink>
                        <SidebarLink to="leagues" onClick={toggle}>
                         Leagues 
                        </SidebarLink>
                        <SidebarLink to="about" onClick={toggle}>
                         About 
                        </SidebarLink>
                       {logIn? <SidebarLink1 to="/transferlist" onClick={toggle}>
                           Transfers
                       </SidebarLink1>
                       : <SidebarLink to="signup" onClick={toggle}>
                         Sign Up 
                        </SidebarLink>}
                    </SidebarMenu>
                    {logIn?<ul style={{listStyle: 'none'}} >
                    <SidebarLink to="user" onClick={toggle}>
                         {cookies.get('user')}
                        </SidebarLink>
                    </ul>
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

