import React from "react";
import { Link } from "react-router-dom";


const Topbar = () => {
    return (
        <>



            {/* ✅ Top Bar */}
            <div className="header-top" style={{ backgroundColor: "#98c014", color: "#fff" }}>
                <div className="container">
                    <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">

                        {/* ✅ Left: Location & Email */}
                        <div className="col-auto d-none d-lg-flex align-items-center gap-4">
                            <p className="mb-0">
                                <i className="fas fa-map-marker-alt me-2" style={{ color: "#bf8283" }}></i>
                                Subhadra Nagar lane, Bidanasi, Cuttack-753014
                            </p>
                            <p className="mb-0 ms-4">
                                <i className="fas fa-envelope me-2" style={{ color: "#bf8283" }}></i>
                                seedodisha1971@gmail.com
                            </p>
                        </div>

                        {/* ✅ Right: Social Icons + Registration */}
                        <div className="col-auto d-flex align-items-center gap-4">
                            <div className="header-links ps-0">
                                <ul>
                                    <li>
                                        <div className="social-links">
                                            <span className="me-3">Follow Us </span>
                                            <a href="https://www.facebook.com/" style={{ color: "#fff" }}>
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="https://www.instagram.com/" style={{ color: "#fff" }}>
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                            <a href="https://www.youtube.com/" style={{ color: "#fff" }}>
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* ✅ Registration Button */}
                            <a
                                href="/register"
                                className="btn px-4 py-1 rounded"
                                style={{ backgroundColor: "#bf8283", color: "#fff" }}
                            >
                                Registration
                            </a>
                        </div>

                    </div>
                </div>
            </div>



        </>

    );
};

export default Topbar;
