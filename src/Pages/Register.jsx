import {Link} from "react-router-dom";
const Register = () => {
    return (
        <>
        <section className="section auth">
            <div className="wrapper">
                
                <div className="boxes">
                    <div className="box">
                        <div className="text">
                            <Link to="/"><img src="../assets/logo.svg" alt="logo" className="logo" /></Link>
                            <h3 className="heading">Create a free account or <Link to="/">Sign In</Link></h3>
                        </div>
                        <form action="#" className="form">
                            <div className="label"><input type="email"/><label>Email *</label></div>
                            <div className="label"><input type="text"/><label>Username *</label></div>
                            <div className="label"><input type="password"/><label>Password *</label></div>
                            <div className="label">
                                <p className="paragraph">By creating an account, you agree to the <Link to="/">Terms</Link> of our services and have read our <Link to="/">Privacy Statement</Link></p>
                            </div>
                            <div className="label"><button className="subscribe-btn">Sign Up</button></div>
                        </form>
                        <div className="social-wrapper">
                            <div className="social-box"><img src="../assets/icons8-discord-new-48.png" alt="icons8-discord-new-48" /></div>
                            <div className="social-box"><img src="../assets/icons8-linkedin-48.png" alt="icons8-linkedin-48" /></div>
                            <div className="social-box"><img src="../assets/icons8-github-48.png" alt="icons8-github-48" /></div>
                            <div className="social-box"><img src="../assets/icons8-twitter-48.png" alt="icons8-twitter-48" /></div>
                        </div>
                    </div>
                    <div className="box">
                        <img src="../assets/register_desktop.svg" alt="register_desktop" />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
 
export default Register;