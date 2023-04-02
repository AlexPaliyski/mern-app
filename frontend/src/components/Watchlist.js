import {Link} from "react-router-dom";
import star from '../styles/img.png';
import '../styles/Watchlist.css';
import { useState, useEffect } from 'react';

function Watchlist() {
    const [ MatchesList, setData ] = useState([]);
    useEffect(() => {
        fetch(window.location.protocol + '//' + window.location.hostname + ':3000/matches')
            .then(res => res.json())
            .then(res => {
                    const x = res.map(match => {
                        return (<tr key={match._id}>
                            <td style={{width: '40px'}}> <img src={star}></img> </td>
                            <td>{match.event}</td>
                            <td>{match.homeTeam}</td>
                            <td>{match.awayTeam}</td>
                            <td>{match.startTime}</td>
                            <td><Link to={window.location.protocol + "//" + window.location.hostname + ":3000/"} style={{textDecoration: "none", color:"white"}}>Watch</Link></td>
                        </tr>)
                    })
                console.log("x ", x)
                setData(x)
            })
    }, [])
    return (
        <div className={'mx-5'}>
        <h1>Your Watchlist</h1>
    <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0" >
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
            {MatchesList.map(item => item)}

            </tbody>
        </table>
    </div>
        </div>
    );
}

export default Watchlist;