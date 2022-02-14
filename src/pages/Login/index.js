import React, { useContext, useState } from 'react';
import {
    Wrapper,
    WrapperForm,
    TextField
} from './styles'
import logo from '../../images/payfriendslogo.svg'
import homeImage from '../../images/homeImage.svg'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/AuthContext'

const formSize = '70%'

function Home() {

    const { handleSignIn } = useContext(Context)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e) {
        e.preventDefault();
        handleSignIn(email, password);
    }

    return (
        <Wrapper>
            <WrapperForm>
                <div style={{ width: formSize }}>
                    <img src={logo} alt="picapayfriend" />
                    <h2>Bem vindo de volta</h2>
                </div>
                <div style={{ width: formSize }}>
                    <Form onSubmit={(e) => handleLogin(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Seu email</Form.Label>
                            <TextField value={email} onChange={(e) => setEmail(e.target.value)} stype="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <TextField value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" />
                        </Form.Group>
                        <Button style={{ width: '100%' }} variant="primary" type="submit">
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