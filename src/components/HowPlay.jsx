import React from 'react'

export const HowPlay = () => {
  return (
    <div className="play-bg">
      <div className="container p-5">
        <div className="row rounded-4 position-relative overflow-hidden justify-content-end align-middle bg-area">
            <div className="col-9">
              <div className="m-60">
                  <div>
                      <img src="https://pixner.net/dooplo3/main-v2/assets/images/how-play-illus.png" alt="img" className="position-absolute top-0 start-0 mw-100" />
                  </div>
                  <div className="section-text">
                    <h2>How To Play</h2>
                  </div>
                  <div className="row justify-content-evenly">
                    <div className="cus-mar">
                      <div className="col-4">
                        <div className="single-box shadow-none position-relative text-center p-0 mb-4 align-items-center d-flex justify-content-center">
                          <div className="img-area position-relative">
                            <img src="https://pixner.net/dooplo3/main-v2/assets/images/icon/how-play-icon-1.png" alt="img" className="shadow-none" />
                            <span className="abs-area">1</span>
                          </div>
                        </div>
                          <h5 className="position-relative text-center p-0 text-white fs-3 fw-bold mt-5">Register</h5>
                      </div>
                      <div className="col-4">
                        <div className="single-box shadow-none position-relative text-center p-0 mb-4 align-items-center d-flex justify-content-center">
                          <div className="img-area position-relative">
                            <img src="https://pixner.net/dooplo3/main-v2/assets/images/icon/how-play-icon-2.png" alt="img" className="shadow-none" />
                            <span className="abs-area">1</span>
                          </div>
                        </div>
                          <h5 className="position-relative text-center p-0 text-white fs-3 fw-bold mt-5">Play</h5>
                      </div>
                      <div className="col-4">
                        <div className="single-box shadow-none position-relative text-center p-0 mb-4 align-items-center d-flex justify-content-center">
                          <div className="img-area position-relative">
                            <img src="https://pixner.net/dooplo3/main-v2/assets/images/icon/how-play-icon-3.png" alt="img" className="shadow-none" />
                            <span className="abs-area">1</span>
                          </div>
                        </div>
                          <h5 className="position-relative text-center p-0 text-white fs-3 fw-bold mt-5">Get Paid</h5>
                      </div>
                    </div>
                  </div>
              </div>  
            </div>
        </div>
      </div>
    </div>
  )
}
