import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'

export const SliderFirst = () => {
    return (
        <div className="pb-12">
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-7 col-sm-9">
                        <h2 className="text-white display-4 fw-bold">Browse Games</h2>
                    </div>
                    <div class="col-md-5 col-sm-3 d-flex flex-wrap align-content-center justify-content-sm-end justify-content-start">
                        <div>
                            <a href="#" className="btn-ar">View All</a>
                        </div>
                    </div>
                </div>
                <div>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={25}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="hover-line">
                                <div>
                                    <img src="https://pixner.net/dooplo3/main-v2/assets/images/browse-game-img-5.png" alt="slider-img" className="img-fluid w-100 slide-img" />
                                </div>
                                <h6 className="my-3 mx-2 text-start fs-5">Cyberpunk</h6>
                                <p className="text-start small-s">🔴6 Live Matches</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hover-line">
                                <div>
                                    <img src="https://pixner.net/dooplo3/main-v2/assets/images/browse-game-img-6.png" alt="slider-img" className="img-fluid w-100 slide-img" />
                                </div>
                                <h6 className="my-3 mx-2 text-start fs-5">Cyberpunk</h6>
                                <p className="text-start small-s">🔴6 Live Matches</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hover-line">
                                <div>
                                    <img src="https://pixner.net/dooplo3/main-v2/assets/images/browse-game-img-4.png" alt="slider-img" className="img-fluid w-100 slide-img" />
                                </div>
                                <h6 className="my-3 mx-2 text-start fs-5">Cyberpunk</h6>
                                <p className="text-start small-s">🔴6 Live Matches</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hover-line">
                                <div>
                                    <img src="https://pixner.net/dooplo3/main-v2/assets/images/browse-game-img-1.png" alt="slider-img" className="img-fluid w-100 slide-img" />
                                </div>
                                <h6 className="my-3 mx-2 text-start fs-5">Cyberpunk</h6>
                                <p className="text-start small-s">🔴6 Live Matches</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hover-line">
                                <div>
                                    <img src="https://pixner.net/dooplo3/main-v2/assets/images/browse-game-img-2.png" alt="slider-img" className="img-fluid w-100 slide-img" />
                                </div>
                                <h6 className="my-3 mx-2 text-start fs-5">Cyberpunk</h6>
                                <p className="text-start small-s">🔴6 Live Matches</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hover-line">
                                <div>
                                    <img src="https://pixner.net/dooplo3/main-v2/assets/images/browse-game-img-3.png" alt="slider-img" className="img-fluid w-100 slide-img" />
                                </div>
                                <h6 className="my-3 mx-2 text-start fs-5">Cyberpunk</h6>
                                <p className="text-start small-s">🔴6 Live Matches</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hover-line">
                                <div>
                                    <img src="https://pixner.net/dooplo3/main-v2/assets/images/browse-game-img-4.png" alt="slider-img" className="img-fluid w-100 slide-img" />
                                </div>
                                <h6 className="my-3 mx-2 text-start fs-5">Cyberpunk</h6>
                                <p className="text-start small-s">🔴6 Live Matches</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
