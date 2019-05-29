import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
    	return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{backgroundColor:"teal"}}> 
                    <Link to="/" className="navbar-brand" href="#">4MOMS</Link>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">HOME<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">ABOUT US</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="/contact">CONTACT US</Link>
                            </li>
                        </ul>
                        <form className="form-inline mt-2 mt-md-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search 4MOMS" aria-label="Search"/>
                            <Link to="/signIn" style={{color:"black"}}>Log in</Link>
                        </form>
                    </div>
                </nav>
            </header>
        );  
    }
}

export default Header;