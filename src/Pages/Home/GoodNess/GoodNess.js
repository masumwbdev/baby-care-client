// import React from 'react';

// const GoodNess = () => {
//     return (
//         <div className="d-lg-flex">
//             <div>
//                 <img className="img-fluid" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
//             </div>
//             <div>
//                 <h3>Our Goodness Promise</h3>
//                 <p>At Mamaearth, we live to spread a little love and goodness every day. We believe that goodness isn’t a superpower, nor a special gift, it’s inside all of us and it shows in the little choices we make. Our mission is to bring you the best of nature through our purest and most nurturing products that are made without any toxins or harmful chemicals. For us goodness also means being good to the earth. Which is why we recycle more plastic than we use and we're PETA Certified - which means we never test on animals. This is our #GoodnessInside.</p>
//                 <button>OUR PLEDGES</button>
//                 <button>SHOP NOW</button>
//             </div>
//         </div>
//     );
// };

// export default GoodNess;


import { Grid, Typography } from '@mui/material';
import React from 'react';

const GoodNess = () => {
    return (
        <Grid style={{marginTop: '93px'}} container className="container mx-auto" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item sx={12} md={6}>
                <img className="img-fluid rounded" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
            </Grid>
            <Grid item sx={12} md={6}>
                <Typography className="mb-3" variant="h4">
                Our Goodness Promise
                </Typography>
                <Typography variant="p">
                At Mamaearth, we live to spread a little love and goodness every day. We believe that goodness isn’t a superpower, nor a special gift, it’s inside all of us and it shows in the little choices we make. Our mission is to bring you the best of nature through our purest and most nurturing products that are made without any toxins or harmful chemicals. For us goodness also means being good to the earth. Which is why we recycle more plastic than we use and we're PETA Certified - which means we never test on animals. This is our #GoodnessInside.
                </Typography>
                <br />
                <div className="mt-4">
                <button className="btn btn-primary me-3">OUR PLEDGES</button>
                <button className="btn btn-outline-primary">SHOP NOW</button>
                </div>
            </Grid>
        </Grid>
    );
};

export default GoodNess;