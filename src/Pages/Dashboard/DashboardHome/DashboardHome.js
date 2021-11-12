import React from 'react';
import Grid from '@mui/material/Grid';
import MyOrders from '../MyOrders/MyOrders';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <MyOrders></MyOrders>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;