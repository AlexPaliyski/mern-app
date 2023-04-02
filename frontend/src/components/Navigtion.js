import '../styles/Navigation.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import WatchlistButton from './WatchlistButton'
import logo from '../styles/lllogo-black.png'

function Navigation() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>LifeLens</Navbar.Brand>
                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end">
                    <WatchlistButton/>
                    <Navbar.Text>
                        <a>Account</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;