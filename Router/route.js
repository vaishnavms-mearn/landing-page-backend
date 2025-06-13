//import express
const express =require('express')
    const router =new express.Router()
    const { getAllDestinations } = require('../Controllers/destinationsController');
    const { getTopSellingPackages } = require('../Controllers/packagesController');
     const { getAllPackages} = require('../Controllers/packagesController');


router.get('/api/destinations', getAllDestinations);
router.get('/api/packages/top-selling', getTopSellingPackages);
router.get('/api/packages', getAllPackages);
module.exports=router