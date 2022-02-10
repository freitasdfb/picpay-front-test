import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const PicTable = styled.table`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
  td { 
    padding: 10px;
  }

  #mainHead th {
    border-bottom: 2px solid #CFDCE5;
  }
  
  th { 
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    text-align: left;
    padding: 10px 30px;
  }

  tbody>tr:nth-child(odd)>td, 
  tbody>tr:nth-child(odd)>th {
      background-color: #F5F8FA;
  }

`

export const TextField = styled(Form.Control)`
  background: none; 

  &:focus { 
    background: none;
  }
`