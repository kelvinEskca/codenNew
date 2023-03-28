import React from "react";
import Header from "../Components/Header";
import RolesCard from "../Components/RolesCard";
import {Link} from "react-router-dom";
import { GlobalStyle } from '../Components/Style';
const JobView = () => {
    return (
        <>
        <Header/>
        <GlobalStyle>
            <section className="section info">
                <div className="wrapper">
                    <div className="text first">
                        <h3 className="heading">Senior Product Designer</h3>
                        <div className="circle-holder">
                            <img src="../assets/walletconnect.png" alt="logo" className="roundlogo" />
                            <h3 className="heading">WalletConnect</h3>
                        </div>
                    </div>
                    <div className="boxes">
                        <div className="box">
                            <div className="text">
                                <p className="paragraph">WalletConnect is the web3 standard to connect blockchain wallets to dapps. Starting in 2018, our mission is to make web3 accessible to everyone. Every month, millions of people use WalletConnect in thousands of integrations. We have raised over $25M and are looking for a product designer to help us reach the next 100M users.</p>
                            </div>

                            <div className="text">
                                <h3 className="heading">The role:</h3>
                                <p className="paragraph">At WalletConnect we’re looking for a product designer to lead the team crafting our products Web3Inbox, Web3Modal, and Web3Wallet. This is a unique opportunity to land a job where both your input and output are critical in shaping the product, its visual language and product design culture. You will be responsible for developing and executing design strategies, creating user interfaces, and overseeing the design process from concept to launch. You will work closely with the product, engineering, and marketing teams to ensure that our products meet our high standards.</p>
                            </div>

                            <div className="text">
                                <h3 className="heading">Requirements</h3>
                                <h4>The right candidate:</h4>
                                <ul className="list">
                                    <li>Have an online portfolio of product design work that illustrates their critical thinking, craftsmanship, experience and style</li>
                                    <li>Conceptualize and illustrate project briefs from multiple stakeholders: marketing, product, engineering</li>
                                    <li>Display excellence in typography, color, layout, art direction and graphic design</li>
                                    <li>You thrive in a remote-first work culture. Ability to manage your own work</li>
                                    <li>Comfortable working with an engineering-focused org</li>
                                </ul>
                            </div>

                            <div className="text">
                                <h3 className="heading">Nice to haves:</h3>
                                <ul className="list">
                                    <li>Enjoy designing for technical content and audience</li>
                                    <li>Enjoy designing for technical content and audience</li>
                                    <li>Enjoy designing for technical content and audience</li>
                                    <li>Enjoy designing for technical content and audience</li>
                                    <li>Enjoy designing for technical content and audience</li>
                                    <li>Enjoy designing for technical content and audience</li>
                                    <li>Enjoy designing for technical content and audience</li>
                                </ul>
                            </div>

                            <div className="text">
                                <h3 className="heading">Benefits:</h3>
                                <ul className="list">
                                    <li>Enjoy designing for technical content and audience</li>
                                    <li>Enjoy designing for technical content and audience</li>
                                    <li>Enjoy designing for technical content and audience</li>
                                    <li>Enjoy designing for technical content and audience</li>
                                    <li>Enjoy designing for technical content and audience</li>
                                    <li>Enjoy designing for technical content and audience</li>
                                    <li>Enjoy designing for technical content and audience</li>
                                </ul>
                            </div>

                            <div className="text">
                                <Link to="/"><button className="subscribe-btn">Apply Now</button></Link>
                                <p className="paragraph italics">Please let WalletConnect know you found this position on Cryptocurrency Jobs as a way to support us so we can keep providing you with quality crypto jobs.</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="column">
                                <span>Location</span>
                                <p className="paragraph">Remote</p>
                            </div>

                            <div className="column">
                                <span>Job type</span>
                                <p className="paragraph">Full-Time</p>
                            </div>

                            <div className="column">
                                <span>Role</span>
                                <p className="paragraph">Design</p>
                            </div>

                            <div className="column">
                                <span>Keywords</span>
                                <p className="paragraph">Non-Tech, Open Source, Product, Product Designer, Web3</p>
                            </div>

                            <div className="column">
                                <Link to="/"><button className="subscribe-btn">Apply Now</button></Link>
                            </div>

                            <div className="column">
                                <p className="paragraph italics">Please let WalletConnect know you found this position on Cryptocurrency Jobs as a way to support us so we can keep providing you with quality crypto jobs.</p>
                            </div>

                            <div className="column">
                                <span>About WalletConnect</span>
                                <p className="paragraph">Company Profile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section roles">
                <div className="wrapper">
                    <div className="text">
                        <span>Not what you're looking for?</span>
                        <h3 className="heading">Check out these similar roles</h3>
                    </div>
                    <div className="boxes auto-grid">
                        <RolesCard img={'../assets/company-logo.jpg'} title={'Product Designer'} paragraph={'De.Fi'} />

                        <RolesCard img={'../assets/company-logo.jpg'} title={'Product Designer'} paragraph={'De.Fi'} />

                        <RolesCard img={'../assets/company-logo.jpg'} title={'Product Designer'} paragraph={'De.Fi'} />

                        <RolesCard img={'../assets/company-logo.jpg'} title={'Product Designer'} paragraph={'De.Fi'} />

                        <RolesCard img={'../assets/company-logo.jpg'} title={'Product Designer'} paragraph={'De.Fi'} />

                        <RolesCard img={'../assets/company-logo.jpg'} title={'Product Designer'} paragraph={'De.Fi'} />

                        <RolesCard img={'../assets/company-logo.jpg'} title={'Product Designer'} paragraph={'De.Fi'} />

                        <RolesCard img={'../assets/company-logo.jpg'} title={'Product Designer'} paragraph={'De.Fi'} />

                        <RolesCard img={'../assets/company-logo.jpg'} title={'Product Designer'} paragraph={'De.Fi'} />

                        <RolesCard img={'../assets/company-logo.jpg'} title={'Product Designer'} paragraph={'De.Fi'} />

                        <RolesCard img={'../assets/company-logo.jpg'} title={'Product Designer'} paragraph={'De.Fi'} />

                        <RolesCard img={'../assets/company-logo.jpg'} title={'Product Designer'} paragraph={'De.Fi'} />
                    </div>
                </div>
            </section>
        </GlobalStyle>
        </>
    );
}
 
export default JobView;