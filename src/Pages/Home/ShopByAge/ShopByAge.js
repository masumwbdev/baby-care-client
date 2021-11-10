import React from 'react';

const ShopByAge = () => {
    return (
        <div>
            <h3 className="mt-5 mb-4 container">Shop by age</h3>
            <div class="row row-cols-1 row-cols-md-4 g-4 container mx-auto">
                <div class="col">
                    <div class="card border-0">
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-16cd/k2-_9002ee83-b675-4fad-baaf-b8bcecc840a2.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"  className="img-fluid" alt="..." />
                        <div class ="card-body">
                        <h5 class ="card-title text-center">0-03 months</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0">
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-40c8/k2-_2bca4eb0-6c64-4a2f-8672-66d6bd71b605.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"  className="img-fluid" alt="..." />
                        <div class ="card-body">
                        <h5 class ="card-title text-center">03-06 months</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0">
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-3181/k2-_4237c172-85ba-40a2-9efb-74ba93d0693e.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"  className="img-fluid" alt="..." />
                        <div class ="card-body">
                        <h5 class ="card-title text-center">06-12 months</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0">
                        <img className="img-fluid" src="https://i5.walmartimages.com/dfw/4ff9c6c9-160e/k2-_838e00b4-b35a-4bbc-a590-b5f09e4a44cf.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF" alt="..." />
                        <div class ="card-body">
                        <h5 class ="card-title text-center">12+ months</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopByAge;