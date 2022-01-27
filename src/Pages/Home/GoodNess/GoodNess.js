import { Grid, Typography } from '@mui/material';
import React from 'react';
import './GoodNess.css'

const GoodNess = () => {
    return (
        <div className='width-control'>
            <Grid style={{ marginTop: '93px' }} container className="mx-auto" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item sx={12} md={6}>
                    <img className="goodness-img rounded" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                </Grid>
                <Grid className="good-ness" item sx={12} md={6}>
                    <Typography className="mb-3" variant="h4">
                        Our Goodness Promise
                    </Typography>
                    <Typography className='p' variant="p">
                        At Mamaearth, we live to spread a little love and goodness every day. We believe that goodness isn’t a superpower, nor a special gift, it’s inside all of us and it shows in the little choices we make. Our mission is to bring you the best of nature through our purest and most nurturing products that are made without any toxins or harmful chemicals. For us goodness also means being good to the earth. Which is why we recycle more plastic than we use and we're PETA Certified - which means we never test on animals. This is our #GoodnessInside.
                    </Typography>
                    <br />
                    <div className="mt-4">
                        <button className="our-ple me-3">OUR PLEDGES</button>
                        <button className="shop-now">SHOP NOW</button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default GoodNess;