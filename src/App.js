import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <>
            <div className="header">
                <h2>Let's Collaborate</h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">
                <div className="row">
                    <div className="leftcolumn">
                        <div className="card">
                            <div className="card_heading">
                                <h2>AI + RPA is what we do</h2>
                            </div>
                            <div className="card" id="hidden_card">
                                <img
                                    className="serviceImage"
                                    src="https://www.xivtech.io./rp2.jpg"
                                    alt=""
                                />
                            </div>
                            <h3 className="card_para">
                                Future-Proof your business. Drive efficiency,
                                profitability and deliver on customer experience
                            </h3>
                            <div className="card_p">
                                <a href="">
                                    <p>
                                        AI + RPA Automation
                                        <img
                                            src="https://www.xivtech.io./Arrow-black.svg"
                                            alt="arrow-black"
                                        />
                                    </p>
                                    {/* <i className="fa fa-arrow-right" aria-hidden="true"></i> */}
                                    {/* <img src="https://www.xivtech.io./Arrow-black.svg" alt="arrow-black"/> */}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="rightcolumn">
                        <div className="card" id="show_card">
                            <img
                                className="serviceImage"
                                src="https://www.xivtech.io./rp2.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="leftcolumn">
                        <div className="card">
                            <div className="card_heading">
                                <h2>Make Bolder Choices</h2>
                            </div>
                            <div className="card" id="hidden_card">
                                <img
                                    className="serviceImage"
                                    src="https://www.xivtech.io./p1.png"
                                    alt=""
                                />
                            </div>
                            <h3 className="card_para">
                                Digital focused strategies to realize
                                market-changing ideas
                            </h3>
                            <div className="card_p">
                                <a href="">
                                    <p>
                                        Build Better Apps
                                        <img
                                            src="https://www.xivtech.io./Arrow-black.svg"
                                            alt="arrow-black"
                                        />{" "}
                                    </p>
                                    {/* <i className="fa fa-arrow-right" aria-hidden="true"></i> */}
                                    {/* <img src="https://www.xivtech.io./Arrow-black.svg" alt="arrow-black"/> */}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="rightcolumn">
                        <div className="card" id="show_card">
                            <img
                                className="serviceImage"
                                src="https://www.xivtech.io./p1.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="leftcolumn">
                        <div className="card">
                            <div className="card_heading">
                                <h2>Innovate with Speed</h2>
                            </div>
                            <div className="card" id="hidden_card">
                                <img
                                    className="serviceImage"
                                    src="https://www.xivtech.io./p2.jpg"
                                    alt=""
                                />
                            </div>
                            <h3 className="card_para">
                                Create higher quality software, deliver on
                                customer expectations and business goals
                            </h3>
                            <div className="card_p">
                                <a href="">
                                    <p>
                                        DevOps
                                        <img
                                            src="https://www.xivtech.io./Arrow-black.svg"
                                            alt="arrow-black"
                                        />{" "}
                                    </p>
                                    {/* <i className="fa fa-arrow-right" aria-hidden="true"></i> */}
                                    {/* <img src="https://www.xivtech.io./Arrow-black.svg" alt="arrow-black"/> */}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="rightcolumn">
                        <div className="card" id="show_card">
                            <img
                                className="serviceImage"
                                src="https://www.xivtech.io./p2.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="leftcolumn">
                        <div className="card">
                            <div className="card_heading">
                                <h2>Embrace Cloud</h2>
                            </div>
                            <div className="card" id="hidden_card">
                                <img
                                    className="serviceImage"
                                    src="https://www.xivtech.io./p3.jpg"
                                    alt=""
                                />
                            </div>
                            <h3 className="card_para">
                                With Cloud-First accelerate innovation and
                                optimize performance
                            </h3>
                            <div className="card_p">
                                <a href="">
                                    <p>
                                        Cloud Services
                                        <img
                                            src="https://www.xivtech.io./Arrow-black.svg"
                                            alt="arrow-black"
                                        />{" "}
                                    </p>
                                    {/* <i className="fa fa-arrow-right" aria-hidden="true"></i> */}
                                    {/* <img src="https://www.xivtech.io./Arrow-black.svg" alt="arrow-black"/> */}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="rightcolumn">
                        <div className="card" id="show_card">
                            <img
                                className="serviceImage"
                                src="https://www.xivtech.io./p3.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
