import React from 'react';
import { Button, Col, Container, Image, Row, Stack } from 'react-bootstrap';
import AppNavbar from '../components/Utilities/AppNavbar';
import AppHeader from '../components/Home/AppHeader';
import ProductCard from '../components/Products/ProductCard';
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