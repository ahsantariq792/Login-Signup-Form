import React from "react";
import '../App.css'
import {Link} from "react-router-dom";

function Navbar() {


    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link className="item" exact to="/">Signup</Link>
                    </li>
                    <li>
                        <Link  className="item" to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );

}
export default Navbar;