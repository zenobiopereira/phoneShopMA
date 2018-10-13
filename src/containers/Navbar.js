import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Navbar = ({id, name}) => {
    var cout = 0;
    id.map(obj => (obj) 
    ? cout++
    : cout
    )
    return (
    <Fragment>
        <div className="mainDivNavbar">
        <h2> {name} </h2>
        <Link className="homeLink" to="/"> Home </Link>
        <p>{cout}</p>
        <Link className="cartLink" to="/cart"> Cart </Link>
        </div>
    </Fragment>
    )
}

export default Navbar