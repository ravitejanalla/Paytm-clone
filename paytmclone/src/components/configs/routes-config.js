import LandingPage from '../pages/landing-page';
import BusinessLandingPage from '../pages/business-page';
import ErrorPage from '../pages/error-page';
import React from 'react';
import DashBoardPage from '../pages/dashboard';
import ProductDetails from '../pages/Productdetails';
export const paytm_routes=[
    {
        path:"/",
        component:<LandingPage/>
    },
    {
        path:"/business",
        component:<BusinessLandingPage/>
    },
    {
        path:"/paymentgateway",
        component:<ErrorPage/>
    },
    {
        path:"/DashBoardPage",
        component:<DashBoardPage/>
    },
    {
        path:"/details/:id",
        component:<ProductDetails/>
    }
]
