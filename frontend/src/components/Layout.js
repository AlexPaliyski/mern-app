import Navigtion from "./Navigtion";
import {Outlet} from "react-router-dom";

function Layout(){
    return (
        <div>
            <Navigtion/>
          <center>
              <Outlet/>
          </center>

        </div>
    )
} export default Layout;