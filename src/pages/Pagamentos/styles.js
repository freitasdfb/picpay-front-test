import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const ContainerPag = styled.div`
background-color: #F2F2F2;
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh; 
`
export const WrapperContent = styled.div`
  padding: 4% 6%;
  width: 100%;
  height: 100%;

  h2 { 
    font-weight: 600;
  }
`

export const PicButton = styled(Button)`
  font-family: 'Roboto';
  font-weight: 300;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 16px;
  height: 36px;
`
