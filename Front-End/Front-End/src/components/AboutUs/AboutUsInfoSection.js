import React, {useEffect} from 'react'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap,
    Img
} from './AboutUsElements'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt}) => {
    const {ref, inView}= useInView({
        threshold: 0.3
    });
    const animation=useAnimation();
    useEffect(()=>{
        if(inView){
            animation.start({
                opacity: 1, scale: 1, transition: { duration: 0.4 }
            });
        }
            if(!inView){
                animation.start({
                    opacity: 0.7, scale: 0.8
                })
            }
    }, [inView, animation])
    return (
        <div>
            <InfoContainer ref={ref} lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                      <Column1>
                          <TextWrapper animate={animation}>
                              <TopLine>{topLine}</TopLine>
                              <Heading lightText={lightText}>{headline}</Heading>
                              <Subtitle darkText={darkText}>{description}</Subtitle>
                              {/* <BtnWrap>
                                  <Button to={path}
                                //   smooth={true}
                                  duration={500}
                                //   spy={true}
                                  exact='true'
                                  offset={-80}
                                  primary={primary?1:0}
                                  dark={dark?1:0}
                                  dark2={dark2?1:0} >{buttonLabel}</Button>
                              </BtnWrap> */}
                          </TextWrapper>
                      </Column1>
                      <Column2>
                          <ImgWrap animate={animation}>
                               <Img src={img} alt={alt}/> 
                          </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>  
        </div>
    )
}

export default InfoSection
