import React from 'react';
import AppHeader from '../components/Home/AppHeader';
import TopSection from '../components/Home/TopSections';
import TrendingSection from '../components/Home/TrendingSection';
import FooterSection from '../components/Utilities/FooterSection';



const Home = (props) => {
    return (
        <>
            <AppHeader />
            <TopSection />
            <TrendingSection />
            <FooterSection />
        </>
    );
}

export default Home;