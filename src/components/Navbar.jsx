import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <header className="h-bg">
                <div className="container">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid align-middle">
                            <a class="navbar-brand d-flex gap-2" href="#">
                                <img src="https://pixner.net/dooplo3/main-v2/assets/images/fav.png" alt="" />
                                <img src="https://pixner.net/dooplo3/main-v2/assets/images/logo-alt.png" alt="" />
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 h5  align-middle gap-3 py-4 py-lg-0 m-auto align-self-center">
                                    <li className="nav-item fw-bold">
                                        <a class="nav-link text-white" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item fw-bold">
                                        <a class="nav-link text-white" aria-current="page" href="#">Play</a>
                                    </li>
                                    <li className="nav-item fw-bold">
                                        <a class="nav-link text-white" aria-current="page" href="#">Game</a>
                                    </li>
                                    <li className="nav-item fw-bold">
                                        <a class="nav-link text-white" aria-current="page" href="#">Matchfinders</a>
                                    </li>
                                    <li className="nav-item fw-bold">
                                        <a class="nav-link text-white" aria-current="page" href="#">leaderboard</a>
                                    </li>
                                    <li className="nav-item fw-bold">
                                        <a class="nav-link text-white" aria-current="page" href="#">Pages</a>
                                    </li>
                                    <li className="nav-item fw-bold">
                                        <a class="nav-link text-white" aria-current="page" href="#">Shop</a>
                                    </li>
                                </ul>
                                <form className="d-flex align-middle justify-content-between gap-3" role="search">
                                    <div>
                                        <button className="gap-3 p-3 align-middle me-3 bg-transparent border-1 border-secondary rounded-circle">
                                            <div className="">
                                                <img src="https://pixner.net/dooplo3/main-v2/assets/images/icon/search-icon.png" alt="" />
                                            </div>
                                        </button>
                                    </div>
                                    <div className="d-flex gap-1 align-items-center justify-content-center">
                                        <h5 className="text-light mb-0">Sign in</h5>
                                        <button class="btn btn-outline-warning py-2 ms-2 px-3 fs-4 bg-warning text-black fw-bold" type="submit">Sign up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}