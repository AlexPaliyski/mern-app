import { Button, Form } from 'react-bootstrap';
import '../styles/App.css';
import {useNavigate} from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const navigateToLayout= () => {
        navigate('/Layout');
    }

    return (
        <div className={'mb-3 d-flex justify-content-md-center align-items-center vh-100'}>
            <Form>
                <center>
                    <h2>Login</h2>
                </center>

                <Form.Group controlId="formUsername" className={"mt-4"}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formPassword" className={"mt-4"}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className={"mb-3"}>
                    <Form.Check type={"checkbox"} label={"Remember me"}></Form.Check>
                </Form.Group>

                <center>

                    <Button variant="primary" type="submit" className={"mt-4 mb-3 loginButton"} onClick={navigateToLayout}>
                        Login
                    </Button>

                    <p>or</p>

                    <div className="my-3">
                        <Button variant="outline-danger" className={"mb-3"}>
                            Login with Google
                        </Button>
                        <Button variant="outline-primary">
                            Login with Facebook
                        </Button>
                    </div>
                    <p> <span className={"dont-have-an-account"}>Dont have an account?</span> <span className={"sign-up-text"}>Sign Up.</span></p>
                </center>
            </Form>
        </div>
    );
}

export default Login;