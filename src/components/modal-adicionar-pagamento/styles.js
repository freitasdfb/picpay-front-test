import { Modal, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

export const AddModal = styled(Modal)`

  .modal-title {
    font-size: 18px;
    font-weight: 700;
  }
  .modal-header{
    border-bottom: none;
  }

  .modal-footer {
    border-top: none;
  }

  .modal-body{
    input {
      font-family: 'Lato', sans-serif;
    }
    .container{
      .row{
        margin: 5% 0px;
      }
    }
  }

`

export const TextField = styled(Form.Control)`
  background: none; 

  &:focus { 
    background: none;
  }

`

export const PicButton = styled(Button)`
  width: 150px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 16px;
  height: 36px;
  letter-spacing: 1.25px;

  &.cancel {
    background-color: #F5F5F5;
    color: black;
    border: none;
  }

  &.save { 
    color: white;
  }

`