import React from "react";
import { Link } from "react-router-dom";
 
const Menu=() =>{
    return(
        <>
        <Link to="/">Dashboard</Link>
        <br>
        </br>
        <Link to="/">Adopt a pet</Link>
        </>
    );
}
export default Menu;