import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>web development and websites promotions</h1>
                <Typed 
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads"]}
                    typeSpeed={55}
                    backSpeed={70}
                    loop
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>
        </div>
    );
}

export default Header;