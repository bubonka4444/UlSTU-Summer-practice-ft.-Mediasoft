import React from "react";

function Footer () {
    return (
        <footer className="page-footer">
            <p className="footer-text"> ©  {new Date().getFullYear()} All rights reserved </p>
        </footer>   
    );
}

export default Footer;