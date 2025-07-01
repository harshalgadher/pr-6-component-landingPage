export const Form = () => {
    return (
        <div className="form-bg-img">
            <div className="container">
                <div className="py-120">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-6">
                            <div className="mb-5">
                                <h3 className="mb-3 display-4 fw-bold text-white">Competitive Gaming Platform</h3>
                                <p className="text-white font-monospace">In Dooplo, you can participate in online duels and tournaments for the games you like to start winning big prize money.</p>
                            </div>
                            <div className="cus-mart">
                                <div className="single-box d-flex gap-3 align-items-center shadow-none">
                                    <div className="icon-rr d-flex align-items-center justify-content-center">
                                        <img src="https://pixner.net/dooplo3/main-v2/assets/images/icon/info-icon-1.png" alt="img" />
                                    </div>
                                    <div className="text-area text-white">
                                        <h5 className="fw-fw-bold">Find an Opponent</h5>
                                        <p className="font-monospace">Find similarly skilled players to compete with on the games you love.</p>
                                    </div>
                                </div>
                                <div className="single-box d-flex gap-3 align-items-center shadow-none">
                                    <div className="icon-rr d-flex align-items-center justify-content-center">
                                        <img src="https://pixner.net/dooplo3/main-v2/assets/images/icon/info-icon-2.png" alt="img" />
                                    </div>
                                    <div className="text-area text-white">
                                        <h5 className="fw-fw-bold">Find an Opponent</h5>
                                        <p className="font-monospace">Find similarly skilled players to compete with on the games you love.</p>
                                    </div>
                                </div>
                                <div className="single-box d-flex gap-3 align-items-center shadow-none">
                                    <div className="icon-rr d-flex align-items-center justify-content-center">
                                        <img src="https://pixner.net/dooplo3/main-v2/assets/images/icon/info-icon-3.png" alt="img" />
                                    </div>
                                    <div className="text-area text-white">
                                        <h5 className="fw-fw-bold">Find an Opponent</h5>
                                        <p className="font-monospace">Find similarly skilled players to compete with on the games you love.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 mt-5 mt-lg-0">
                            <div className="form-content">
                                <form action="#">
                                    <div className="mb-4 text-center">
                                        <h4 className="text-white display-6 fw-bold">Create Account</h4>
                                        <p className="font-monospace text-white">Already have an account? <span className="color-sign font-monospace">Sign in</span> </p>
                                    </div>
                                    <div className="">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-input" placeholder="Full Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-input" placeholder="Email Address" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-input" placeholder="Username" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <input type="text" className="form-input" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <input type="text" className="form-input" placeholder="Confirm Password" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-input" placeholder="Date Of Birth" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <input type="text" className="form-input" placeholder="Country" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <input type="text" className="form-input" placeholder="Region" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <label class="checkbox-single">
                                                    <span class="left-area d-flex">
                                                        <span class="checkbox-area d-center">
                                                            <input type="checkbox" />
                                                        </span>
                                                        <span class="item-title">
                                                            <span className="text-white ms-2 fs-6">By checking this box I agree to <a href="#" className="color-sign">Terms and privacy</a></span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="btn-area mt-4 gap-3">
                                            <button type="button" class="cmn-btn w-100">Free Signup</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}