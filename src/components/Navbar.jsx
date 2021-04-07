import React from 'react';
// import mylogo from "../logo.png";

const Navbar = () => {
    // state = {  }

        return ( 
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <div className="navbar-brand-container">
                            <a className="navbar-brand" href="#">
                                <div className="brand-name-container">
                                    <span className="first-brand-name">MOEKETSI</span>
                                    <span className="second-brand-name">MOTAUNG</span>
                                </div>
                                <div className="slogan-container">
                                    <span className="slogan"><em>Frontend Developer</em></span>
                                </div>
                            </a>
                        </div>
                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">ABOUT ME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">WORK PROCESS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">PORTFOLIO</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CONTACT</a>
                                </li>
                            </ul>        
                        </div>
                    </div>
                    
                </nav>
            </div>
         );
}
 
export default Navbar;