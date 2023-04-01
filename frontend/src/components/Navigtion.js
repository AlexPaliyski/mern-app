import '../styles/Navigation.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from "react-bootstrap";

function Navigation() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>LifeLens</Navbar.Brand>
                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end">
                    <Button variant={'primary'} className={'mx-4'}>Your Watchlist</Button>
                    <Navbar.Text>
                        <a>Account</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;