import {Link} from "react-router-dom";
import star from '../styles/img.png'
import TableRow from "./TableRow";
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
            <TableRow/>
            <TableRow/>
            <TableRow/>
            <TableRow/>
            <TableRow/>
            <TableRow/>
            </tbody>
        </table>
    </div>
        </div>
    );
}

export default Watchlist;