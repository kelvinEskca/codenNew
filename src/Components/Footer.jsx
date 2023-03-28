import React from "react";
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-boxes">
                    <ul className="footer-list">
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Code of Conduct</Link></li>
                        <li><Link to="/">About</Link></li>
                    </ul>
                    <div className="footer-box">
                        <div className="icons-row">
                            <img src="../assets/icons8-twitter-48.png" alt="icons8-twitter-48" />
                            <img src="../assets/icons8-discord-new-48.png" alt="icons8-discord-new-48" />
                            <img src="../assets/icons8-linkedin-48.png" alt="icons8-linkedin-48" />
                        </div>
                        <small>&copy; 2022 Code & Jobs. All Rights Reserved</small>
                    </div>
                    <div className="footer-box footer-row">
                        <small>Hiring?</small>
                        <Link to="/register"><button className="subscribe-btn">Post A Job</button></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;