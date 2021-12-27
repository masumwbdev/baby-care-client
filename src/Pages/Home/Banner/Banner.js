import React from 'react';
import sliderOne from '../../../images/banner/banner-one.jpg'
import sliderTwo from '../../../images/banner/banner-two.jpg'
import sliderThree from '../../../images/banner/banner-three.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
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
            </div>
        </div>
    );
};

export default Banner;