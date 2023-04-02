import '../styles/LandingPage.css'
import logo from '../styles/lllogo.png'
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


function LandingPage(){

    const navigate = useNavigate();

    const navigateToMatches= () => {
        navigate('/Layout');
    }

    return(
        <div className="container h-100 landing-page-container">
            <div className="justify-content-md-center align-items-center vh-100">

                <center>
                    <img src={logo} className={"spin-img"}></img>
                    <h1 className={'firstPageHeader'}>LifeLens</h1>
                    <h2 className={"moto"}>Bringing the Stadium to your Home</h2>
                    <Button variant="outline-light" className={"my-4 mx-3 btn-lg buttons-animation"} onClick={navigateToMatches}>
                        Watch Live!
                    </Button>
                </center>

            </div>
        </div>
    )
} export default LandingPage;