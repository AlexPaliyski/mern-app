import {Link} from "react-router-dom";
import star from '../styles/img.png'
import '../styles/Watchlist.css'

function Watchlist() {
    return (
        <div className={'mx-5'}>
        <h1>Your Watchlist</h1>
    <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
            <thead>
            <tr>
                <th style={{width: '40px'}}></th>
                <th>League</th>
                <th>Home Team</th>
                <th>Away Team</th>
                <th>Date/Time</th>
                <th></th>
            </tr>
            </thead>
        </table>
    </div>
    <div className="tbl-content">
        <table cellPadding="0" cellSpacing="0" border="0">
            <tbody>
            <tr>
                <td style={{width: '40px'}}> <img src={star}></img> </td>
                <td>AUSTRALIAN COMPANY</td>
                <td>$1.38</td>
                <td>+2.01</td>
                <td>-0.36%</td>
                <td><Link to={'./VrVideoPlayer'} style={{textDecoration: "none", color:"white"}}>Watch</Link></td>
            </tr>
            <tr>
                <td style={{width: '40px'}}> <img src={star}></img> </td>
                <td>AUSENCO</td>
                <td>$2.38</td>
                <td>-0.01</td>
                <td>-1.36%</td>
                <td>Watch</td>
            </tr>
            <tr>
                <td style={{width: '40px'}}> <img src={star}></img> </td>
                <td>ADELAIDE</td>
                <td>$3.22</td>
                <td>+0.01</td>
                <td>+1.36%</td>
                <td>Watch</td>
            </tr>
            <tr>
                <td style={{width: '40px'}}> <img src={star}></img> </td>
                <td>ADITYA BIRLA</td>
                <td>$1.02</td>
                <td>-1.01</td>
                <td>+2.36%</td>
                <td>Watch</td>
            </tr>
            <tr>
                <td style={{width: '40px'}}> <img src={star}></img> </td>
                <td>AUSTRALIAN COMPANY</td>
                <td>$1.38</td>
                <td>+2.01</td>
                <td>-0.36%</td>
                <td>Watch</td>
            </tr>
            <tr>
                <td style={{width: '40px'}}> <img src={star}></img> </td>
                <td>AUSENCO</td>
                <td>$2.38</td>
                <td>-0.01</td>
                <td>-1.36%</td>
                <td>Watch</td>
            </tr>
            </tbody>
        </table>
    </div>
        </div>
    );
}

export default Watchlist;