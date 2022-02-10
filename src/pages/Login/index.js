import React from 'react';
import {
    Wrapper,
    WrapperForm,
    TextField
} from './styles'
import logo from '../../images/payfriendslogo.svg'
import homeImage from '../../images/homeImage.svg'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const formSize = '70%'

function Home() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `pagamentos`;
        navigate(path);
    }


    return (
        <Wrapper>
            <WrapperForm>
                <div style={{ width: formSize }}>
                    <img src={logo} alt="picapayfriend" />
                    <h2>Bem vindo de volta</h2>
                </div>
                <div style={{ width: formSize }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Seu email</Form.Label>
                            <TextField type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <TextField type="password" placeholder="Senha" />
                        </Form.Group>
                        <Button style={{ width: '100%' }} variant="primary" onClick={routeChange}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </WrapperForm>
            <div>
                <img src={homeImage} alt="picapayfriend2" />
            </div>
        </Wrapper>
    );
}

export default Home;