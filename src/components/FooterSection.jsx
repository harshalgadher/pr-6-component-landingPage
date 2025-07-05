import React from 'react'

export const FooterSection = () => {
    return (
        <div className="footer-section">
            <div className="container ">
                <div className="main-content ">
                    <div className="tp-30">
                        <div className="row gap-4 gap-lg-0  align-items-center justify-content-between position-relative" >
                            <div className="col-lg-6 tp-30">
                                <div className="mb-3">
                                    <h3 className="display-5 fw-bold text-white">Ready to start Your Journey?</h3>
                                </div>
                                <p className="text-white font-monospace m-0">Stop Scrolling, Start Playing.Create your account now and earn 500 coins</p>
                            </div>
                            <div className="col-lg-5 d-flex justify-content-lg-end">
                                <div className="btn-area">
                                    <button className="cmn-btn fw-bold">
                                        Register Now!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <nav className="navbar navbar-expand-lg ">
                    <div className="d-flex align-middle justify-content-between w-100">
                        <div class=" d-flex align-middle justify-content-between navbar-collapse justify-content-end " id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 h5  align-middle gap-3 py-4 py-lg-0 align-self-center">
                                <a class="navbar-brand d-flex gap-2" href="#">
                                    <img src="https://pixner.net/dooplo3/main-v2/assets/images/fav.png" alt="" />
                                </a>
                                <li className="nav-item fw-bold d-flex justify-content-center align-items-center">
                                    <a class="nav-link text-white fs-6 p-0 font-monospace" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item fw-bold d-flex justify-content-center align-items-center">
                                    <a class="nav-link text-white fs-6 p-0 font-monospace" aria-current="page" href="#">Play</a>
                                </li>
                                <li className="nav-item fw-bold d-flex justify-content-center align-items-center">
                                    <a class="nav-link text-white fs-6 p-0 font-monospace" aria-current="page" href="#">Game</a>
                                </li>
                                <li className="nav-item fw-bold d-flex justify-content-center align-items-center">
                                    <a class="nav-link text-white fs-6 p-0 font-monospace" aria-current="page" href="#">Matchfinders</a>
                                </li>
                                <li className="nav-item fw-bold d-flex justify-content-center align-items-center">
                                    <a class="nav-link text-white fs-6 p-0 font-monospace" aria-current="page" href="#">leaderboard</a>
                                </li>
                                <li className="nav-item fw-bold d-flex justify-content-center align-items-center">
                                    <a class="nav-link text-white fs-6 p-0 font-monospace" aria-current="page" href="#">Pages</a>
                                </li>
                                <li className="nav-item fw-bold d-flex justify-content-center align-items-center">
                                    <a class="nav-link text-white fs-6 p-0 font-monospace" aria-current="page" href="#">Shop</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <ul className="navbar-nav me-auto mb-2 h5  align-middle gap-3 py-4 py-lg-0 m-auto align-self-center ps-3">
                                    <li className="nav-item fw-bold social ">
                                        <a class="nav-link text-white text-light d-flex justify-content-center align-items-center font-monospace p-0" aria-current="page" href="#"><i class="ri-facebook-fill"></i></a>
                                    </li>
                                    <li className="nav-item fw-bold social ">
                                        <a class="nav-link text-white text-light d-flex justify-content-center align-items-center font-monospace p-0" aria-current="page" href="#"><i class="ri-youtube-fill"></i></a>
                                    </li>
                                    <li className="nav-item fw-bold social ">
                                        <a class="nav-link text-white text-light d-flex justify-content-center align-items-center font-monospace p-0" aria-current="page" href="#"><i class="ri-instagram-line"></i></a>
                                    </li>
                                    <li className="nav-item fw-bold social ">
                                        <a class="nav-link text-white text-light d-flex justify-content-center align-items-center font-monospace p-0" aria-current="page" href="#"><i class="ri-linkedin-fill"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
