import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Navbar = ({id, name}) => {
    return (
    <Fragment>
        <div className="mainDivNavbar">
        <h2> {name} </h2>
        <Link className="homeLink" to="/"> Home </Link>
        <p>{id.length}</p>
        <Link className="cartLink" to="/cart"> Cart </Link>
        </div>
    </Fragment>
    )
}

export default Navbar