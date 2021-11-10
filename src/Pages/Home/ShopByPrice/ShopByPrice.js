import React from 'react';

const ShopByPrice = () => {
    return (
        <div>
            <h3 className="mt-5 mb-4 container">Shop by price</h3>
            <div class="row row-cols-1 row-cols-md-4 g-4 container mx-auto">
                <div class="col">
                    <div class="card">
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-45f6/k2-_261f456c-173b-456b-9480-5cc6659394de.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"  className="img-fluid" alt="..." />
                        <div class ="card-body">
                        <h5 class ="card-title text-center">Under $10</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-ba1c/k2-_51cbf49d-5ae2-4dad-a47c-91e48c07b3e1.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"  className="img-fluid" alt="..." />
                        <div class ="card-body">
                        <h5 class ="card-title text-center">Under $25</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-464f/k2-_ee25a72c-338f-461e-9a40-25f1e4ce8362.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"  className="img-fluid" alt="..." />
                        <div class ="card-body">
                        <h5 class ="card-title text-center">Under $50</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img className="img-fluid" src="https://i5.walmartimages.com/dfw/4ff9c6c9-4489/k2-_f83c802d-ab8b-45bc-98f7-059daec898b3.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF" alt="..." />
                        <div class ="card-body">
                        <h5 class ="card-title text-center">Over $75</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopByPrice;