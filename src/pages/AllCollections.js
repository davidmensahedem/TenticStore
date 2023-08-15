import React from 'react';
import FooterSection from '../components/Utilities/FooterSection';
import AllProducts from '../components/Products/AllProducts';
import AppHeader from '../components/Home/AppHeader';

const AllCollections = () => {

    return (<>
        <AppHeader 
        title="At Tentic, we are the best" 
        message="The authentic NFT market platform to safely buy and own products." />
        <AllProducts />
        <FooterSection />
    </>);
}

export default AllCollections;