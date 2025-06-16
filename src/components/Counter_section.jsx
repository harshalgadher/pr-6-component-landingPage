import React from 'react'

export const Counter_section = () => {
  return (
    <div className="pb-12">
        <div className="container">
            <div className="row mt-30">
                <div className="col-xl-4 col-lg-6 z-2">
                  <div className="single-box rounded-4 flex gap-5 bg-black d-flex">
                    <div className="icon">
                      <img src="https://pixner.net/dooplo3/main-v2/assets/images/icon/counter-icon-1.png" alt="img" />
                    </div>
                    <div className="counter">
                      <h3 className="text-white mb-2 h1">28,328</h3>
                      <p className="text-success fw-bold">Profiles Created</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 z-2">
                  <div className="single-box rounded-4 flex gap-5 bg-black d-flex">
                    <div className="icon">
                      <img src="https://pixner.net/dooplo3/main-v2/assets/images/icon/counter-icon-1.png" alt="img" />
                    </div>
                    <div className="counter">
                      <h3 className="text-white mb-2 h1">383</h3>
                      <p className="text-success fw-bold">Upcoming Tournaments</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 z-2">
                  <div className="single-box rounded-4 flex gap-5 bg-black d-flex">
                    <div className="icon">
                      <img src="https://pixner.net/dooplo3/main-v2/assets/images/icon/counter-icon-1.png" alt="img" />
                    </div>
                    <div className="counter">
                      <h3 className="text-white mb-2 h1">2,956</h3>
                      <p className="text-success fw-bold">Profiles Created</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
