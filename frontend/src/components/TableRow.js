import star from "../styles/img.png";
import {Link} from "react-router-dom";

function TableRow(){
    return(
            <tr>
                <td style={{width: '40px'}}> <img src={star}></img> </td>
                <td>AUSTRALIAN COMPANY</td>
                <td>$1.38</td>
                <td>+2.01</td>
                <td>-0.36%</td>
                <td><Link to={'./VrVideoPlayer'} style={{textDecoration: "none", color:"white"}}>Watch</Link></td>
            </tr>
        )
} export default TableRow;