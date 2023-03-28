import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className="header">
            <nav className="mobile">
                <div className="left">
                    <img src="../assets/logo.svg" alt="logo" className="logo" />
                </div>
                <div className="right">
                    <img src="../assets/Wallet-98729253.svg" alt="menu" />
                    <img src="../assets/image.svg" alt="menu" />
                    <div className="right-end">
                        <img src="../assets/menu.svg" alt="menu" />
                    </div>
                </div>
            </nav>
            <nav className="desktop">
                <div className="left">
                    <img src="../assets/logo.svg" alt="logo" className="logo" />
                </div>
                <div className="right">
                    <ul className="list">
                        <li><Link to="/">Jobs</Link></li>
                        <li><Link to="/">For Hire</Link></li>
                        <li><Link to="/">Market Place</Link></li>
                        <li><Link to="/">Blog</Link></li>
                    </ul>
                    <div className="end">
                        <Link to="/"><div className="survey"><h3 className="heading">Survey</h3></div></Link>
                        <img src="../assets/Wallet-98729253.svg" alt="menu" />
                        <img src="../assets/image.svg" alt="menu" />
                    </div>
                </div>
            </nav>
            <aside className="aside">
                <div className="left-pane">
                    <div className="top">
                        <h3 className="heading">CodenJobs</h3>
                        <img src="../assets/close.svg" alt="close" />
                    </div>

                    <div className="bottom">
                        <ul className="list"></ul>
                    </div>
                </div>
                <div className="right-pane"></div>
            </aside>
        </header>
    );
}
 
export default Header;