import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

`;

export const Card = styled.div`
  background: #fff;
  width: 550px;
  border-radius: 8px;
  padding: 20px;
  margin-top: 15px;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.20);
  h2 {
    font-size: 22px;
    color: #392D2D;
    margin-bottom: 10px;
  }
`;


export const WrapperForm = styled.div`
  width: 45%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #F2F2F2;

  h2 { 
    font-weight: 600;
  }

`

export const TextField = styled(Form.Control)`
  background: none; 

  &:focus { 
    background: none;
  }
`

export const Templates = styled.div`
  width: 100%;
  height: 90px;
  background: #eee;
  border-radius: 8px;
  overflow-y: auto;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 30px;
  button {
    background: transparent;
    margin-right: 10px;
    border: 2px solid transparent;
    &.selected {
      border-color: #4395D8;
    }
    img {
      width: 53px;
      height: 53px;
    }
  }
`;


export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background: #4395D8;
  color: #fff;
  font-weight: bold;
  transition: background 0.2s ease-in;
  font-size: 14px;
  border: 2px solid transparent;
  &:hover {
    background: #3672A3;
  }
`;