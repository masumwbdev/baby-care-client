import React from 'react';

const Faq = () => {
    return (
        <div className="container w-75 mx-auto my-5">
            <h1 className="text-center mt-5">FAQ's</h1>
            <hr className="w-25 mx-auto bg-primary" />
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Are Mamaearth Baby Care Products Natural & Organic?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Mamaearth Baby Products are made with the goodness of natural ingredients for the ultimate nourishment for your munchkins. They are Made Safe certified, Toxin-Free and Cruelty-Free making them some of the best baby care products in India. </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Are Mamaearth Baby Care Products Paraben & Sulphate Free?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Yes, Mamaearth products for babies are free from any harmful chemicals, Parabens, silicones, SLS, sulfates, mineral oils or dyes.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        How Do I Take Care of My Newborn Baby's Skin?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Yes indeed! Babies have highly sensitive skin and thus they require  a constant dose of care and nourishment. Indulge in the goodness of Mamaearth Baby Care products to get the best of nature for your baby. To keep your child’s skin protected and nourished, you need a gentle skincare regimen for them. </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Are Mamaearth Products Safe for Babies?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Yes, absolutely! Mamaearth Baby Care Products are crafted with the goodness of natural ingredients that are Toxin-Free, Cruelty-Free and are free of silicones, sulfates, SLS, parabens, mineral oil or dyes. They are toxin-free and absolutely safe to be used for babies.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;