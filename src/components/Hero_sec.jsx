import React from 'react'

export const Hero_sec = () => {
    return (
        <div className="hero-bg">
            <div className="hero-pt">
                <div className="container">
                    <div className="row justify-xl-content-between justify-content-center align-items-center">
                        <div className="col-xl-3">
                            <div className="position-relative dir">
                                <img src="https://pixner.net/dooplo3/main-v2/assets/images/banner-illus-2.png" alt="hero1-img" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="text-center">
                                <div className="mb-5">
                                    <h1 className="mb-2 text-white display-2 fw-bold">Play Games <br /> <span className="text-warning">Win Cash</span></h1>
                                    <p className="banner-p text-white fs-5 font-monospace">Compete game tournaments for cash prizes or play head to head for real money.</p>
                                </div>
                                <div>
                                    <button className="btn btn-warning text-black px-4 py-2 fw-bolder">Let's Play Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="position-relative">
                                <img src="https://pixner.net/dooplo3/main-v2/assets/images/banner-illus-1.png" alt="hero1-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}