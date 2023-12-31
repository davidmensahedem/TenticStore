import React, { useEffect } from 'react';
import AppHeader from '../components/Home/AppHeader';
import TopSellingSection from '../components/Home/TopSections';
import TrendingSection from '../components/Home/TrendingSection';
import FooterSection from '../components/Utilities/FooterSection';
import { useDispatch, useSelector } from 'react-redux';
import { setMainProducts } from '../slices/productSlice';
import Notification from '../components/Utilities/Notification';



const Home = (props) => {

    const { trending, topSelling } = useSelector(state => state.products);
    const { notyState } = useSelector(state => state.shoppingCart);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMainProducts());
    }, [dispatch]);

    return (
        <>
            <AppHeader title="Tentic Shop" message="The authentic NFT market platform to safely buy and own products." />
           { notyState && <Notification />}
            <TopSellingSection products={topSelling} />
            <TrendingSection products={trending} />
            <FooterSection />
        </>
    );
}

export default Home;