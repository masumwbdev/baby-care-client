import React from 'react';
import sliderOne from '../../../images/banner/ban3.png'
// import sliderTwo from '../../../images/banner/banner-two.jpg'
// import sliderThree from '../../../images/banner/banner-three.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            {/* <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={sliderOne} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={sliderTwo} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={sliderThree} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> */}

            <div className="row container-fluid mx-auto align-items-center justify-content-around">
                <div className='col-sm-12 col-lg-6'>
                    <h2>Xiaomi Redmi 9 Activ</h2>
                    <p>with qualified activation and trade-in of Xiaomi <br /> Redmi 9 Activ or newer.</p>
                    <span>Terms and conditions apply.</span>
                    <br />
                    <a href="#">See this offer</a>
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <img className="img-fluid" src={sliderOne} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;