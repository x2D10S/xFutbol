import React from 'react';
import { Icon } from '../Signin/SigninElements';
import styled from 'styled-components';
import pic from '../images/TextureThemeUCL.jpg'
const UCL = () => {
  return <>
  <Container>
  <Wrapper>
  <Icon to='/'>xFutbol</Icon>
      <Info>UCL fixtures not drawn...</Info>
  </Wrapper>
  </Container>
  </>;
};

export default UCL;

const Container=styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(108deg, rgba(1, 147, 86,1) 0%, rgba(10, 201,122,1) 100%);
background-image: url(${pic});
background-size: cover;
background-repeat: no-repeat;
`;

const Info=styled.h1`
margin-top: 25%;
text-align: center;
`;

const Wrapper=styled.div`
display: flex;
flex-direction: column;
`