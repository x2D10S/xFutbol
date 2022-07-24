import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer,
FooterLinksWrapper, FooterLinkTitle, FooterLink, FooterLinkItems,
FinalView, FinalViewWrap, FinalLogo, WebsiteRights, SocialIconLinks, SocialIcons} from './FooterElements'
const Footer = () => {
    const toggleHome=()=>{
        scroll.scrollToTop();
    }
    return (
        <div>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About This</FooterLinkTitle>
                                    <FooterLink to="/">How It Works</FooterLink>
                                    <FooterLink to="/">Tools Used</FooterLink>
                                    <FooterLink to="/">Design Ideas</FooterLink>
                                    <FooterLink to="/">Logos</FooterLink> 
                            </FooterLinkItems>
                           
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Contact</FooterLinkTitle>
                                    <FooterLink to="/">Syed's Instagram</FooterLink>
                                    <FooterLink to="/">Syed's Facebook</FooterLink>
                                    <FooterLink to="/">Yashas's LinkedIn</FooterLink>
                                    <FooterLink to="/">Yashas's Github</FooterLink> 
                            </FooterLinkItems>
                            
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <FinalView>
                        <FinalViewWrap>
                            <FinalLogo to="/" onClick={toggleHome}>
                                xFutbol
                            </FinalLogo>
                            <WebsiteRights>
                                xFutbol © {new Date().getFullYear()} All rights reserved.
                            </WebsiteRights>
                            <SocialIcons>
                            <SocialIconLinks href='/' target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLinks> 
                            <SocialIconLinks href='/' target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLinks> 
                            <SocialIconLinks href='/' target="_blank" aria-label="YouTube"><FaYoutube /></SocialIconLinks> 
                            <SocialIconLinks href='/' target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLinks> 
                            <SocialIconLinks href='/' target="_blank" aria-label="LinkedIn"><FaLinkedin /></SocialIconLinks> 
                            </SocialIcons>
                        </FinalViewWrap>
                    </FinalView>
                </FooterWrap>
            </FooterContainer>
        </div>
    )
}

export default Footer
