import React, { useState } from "react";
import Header from "../Components/Header";
import Box from "../Components/Box";
import {Link} from "react-router-dom";
import { GlobalStyle } from '../Components/Style';
const Home = () => {
    const [data] = useState(false);
    return (
        <>
            <Header/>
            <GlobalStyle>
                <section className="section data">
                    <div className="wrapper">
                        <h3 className="heading">Dashboard</h3>
                        <form action="#" className="form">
                            <select name="filter" id="filter">
                                <option value="Posts" selected>Posts {0}</option>
                                <option value="Followers">Followers {0}</option>
                                <option value="Followers tags">Followers tags {0}</option>
                                <option value="Followers users">Followers users {0}</option>
                                <option value="Followers organizations">Followers organizations {0}</option>
                                <option value="Followers podcasts">Followers podcasts {0}</option>
                                <option value="Lisitinga">Lisitinga</option>
                                <option value="Analytics">Analytics</option>
                            </select>
                        </form>
                        <div className="boxes auto-grid">
                            <Box count={'0'} title={'Total post reactions'} />
                            <Box count={'< 500'} title={'Total post views'} />
                            <Box count={'0'} title={'Listings created'} />
                            <Box count={'0'} title={'Credits available'} />
                        </div>
                    </div>
                </section>

                <section className="section post">
                    <div className="wrapper">
                        <div className="boxes">
                            
                            <div className="box post-box">
                                <ul className="postlist">
                                    <li className="active"><Link to="/">
                                        <p className="paragraph">Blog post</p>
                                        <div className="count"><p className="paragraph">{0}</p></div>
                                    </Link></li>

                                    <li><Link to="/">
                                        <p className="paragraph">Jobs</p>
                                        <div className="count"><p className="paragraph">{0}</p></div>
                                    </Link></li>

                                    <li><Link to="/">
                                        <p className="paragraph">Hire</p>
                                        <div className="count"><p className="paragraph">{0}</p></div>
                                    </Link></li>

                                    <li><Link to="/">
                                        <p className="paragraph">For hire</p>
                                        <div className="count"><p className="paragraph">{0}</p></div>
                                    </Link></li>

                                    <li><Link to="/">
                                        <p className="paragraph">Followers</p>
                                        <div className="count"><p className="paragraph">{0}</p></div>
                                    </Link></li>

                                    <li><Link to="/">
                                        <p className="paragraph">Following </p>
                                        <div className="count"><p className="paragraph">{0}</p></div>
                                    </Link></li>

                                    <li><Link to="/">
                                        <p className="paragraph">Files</p>
                                        <div className="count"><p className="paragraph">{0}</p></div>
                                    </Link></li>

                                    <li><Link to="/">
                                        <p className="paragraph">Companies</p>
                                        <div className="count"><p className="paragraph">{0}</p></div>
                                    </Link></li>

                                    <li><Link to="/">
                                        <p className="paragraph">Listings <img src="../assets/redirect.svg" alt="redirect" /> </p>
                                        <div className="count"><p className="paragraph">{0}</p></div>
                                    </Link></li>

                                    <li><Link to="/">
                                        <p className="paragraph">Analytics</p>
                                        <div className="count"><p className="paragraph">{0}</p></div>
                                    </Link></li>
                                </ul>
                            </div>
                            <div className="box">
                                <div className="top"><h3 className="heading">Posts</h3></div>
                                <div className="bottom">
                                    {data ? (
                                        <>
                                            <div className="table">
                                                <div className="table-data">
                                                    <div className="table-left">
                                                        <div className="row">
                                                            <h3 className="heading">The interview with the Code&Jobs</h3>
                                                            <p className="paragraph">Published: 15 March 2022</p>
                                                        </div>
                                                        <div className="icons">
                                                            <div className="icons-row"><img src="../assets/icons8-favorite-30.png" alt="dots" /><p className="pargraph">5</p></div>
                                                            <div className="icons-row"><img src="../assets/icons8-chat-room-30.png" alt="dots" /><p className="pargraph">5</p></div>
                                                            <div className="icons-row"><img src="../assets/icons8-retweet-30.png" alt="dots" /><p className="pargraph">5</p></div>
                                                        </div>
                                                    </div>
                                                    <div className="table-right">
                                                        <Link to="/">Manage</Link>
                                                        <Link to="/">Edit</Link>
                                                        <img src="../assets/icons8-dots-loading-30.png" alt="dots" />
                                                    </div>
                                                </div>

                                                <div className="table-data">
                                                    <div className="table-left">
                                                        <div className="row">
                                                            <h3 className="heading">The interview with the Code&Jobs</h3>
                                                            <p className="paragraph">Published: 15 March 2022</p>
                                                        </div>
                                                        <div className="icons">
                                                            <div className="icons-row"><img src="../assets/icons8-favorite-30.png" alt="dots" /><p className="pargraph">5</p></div>
                                                            <div className="icons-row"><img src="../assets/icons8-chat-room-30.png" alt="dots" /><p className="pargraph">5</p></div>
                                                            <div className="icons-row"><img src="../assets/icons8-retweet-30.png" alt="dots" /><p className="pargraph">5</p></div>
                                                        </div>
                                                    </div>
                                                    <div className="table-right">
                                                        <Link to="/">Manage</Link>
                                                        <Link to="/">Edit</Link>
                                                        <img src="../assets/icons8-dots-loading-30.png" alt="dots" />
                                                    </div>
                                                </div>

                                                <div className="table-data">
                                                    <div className="table-left">
                                                        <div className="row">
                                                            <h3 className="heading">The interview with the Code&Jobs</h3>
                                                            <p className="paragraph">Published: 15 March 2022</p>
                                                        </div>
                                                        <div className="icons">
                                                            <div className="icons-row"><img src="../assets/icons8-favorite-30.png" alt="dots" /><p className="pargraph">5</p></div>
                                                            <div className="icons-row"><img src="../assets/icons8-chat-room-30.png" alt="dots" /><p className="pargraph">5</p></div>
                                                            <div className="icons-row"><img src="../assets/icons8-retweet-30.png" alt="dots" /><p className="pargraph">5</p></div>
                                                        </div>
                                                    </div>
                                                    <div className="table-right">
                                                        <Link to="/">Manage</Link>
                                                        <Link to="/">Edit</Link>
                                                        <img src="../assets/icons8-dots-loading-30.png" alt="dots" />
                                                    </div>
                                                </div>

                                                <div className="table-data">
                                                    <div className="table-left">
                                                        <div className="row">
                                                            <h3 className="heading">The interview with the Code&Jobs</h3>
                                                            <p className="paragraph">Published: 15 March 2022</p>
                                                        </div>
                                                        <div className="icons">
                                                            <div className="icons-row"><img src="../assets/icons8-favorite-30.png" alt="dots" /><p className="pargraph">5</p></div>
                                                            <div className="icons-row"><img src="../assets/icons8-chat-room-30.png" alt="dots" /><p className="pargraph">5</p></div>
                                                            <div className="icons-row"><img src="../assets/icons8-retweet-30.png" alt="dots" /><p className="pargraph">5</p></div>
                                                        </div>
                                                    </div>
                                                    <div className="table-right">
                                                        <Link to="/">Manage</Link>
                                                        <Link to="/">Edit</Link>
                                                        <img src="../assets/icons8-dots-loading-30.png" alt="dots" />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <img src="../assets/y5767q6brm62skiyywvc.png" alt="images" />
                                            <p className="paragraph">This is where you can manage your posts, but you haven't written anything yet.</p>
                                            <Link to="/"><button>Write your first post now</button></Link>
                                        </>
                                    )}
                                    

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </GlobalStyle>
        </>
    );
}
 
export default Home;