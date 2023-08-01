import React from 'react';

// Styles
import styles from "../styles/HomePage/HomePage.module.scss";

// Components
import HomePageHero from '../Components/HomePageHero';
import Categories from '../Components/Categories';
import MealDisplay from '../Components/MealDisplay';
import Footer from '../Components/Footer';


const HomePage = () => {
    return (
        <div className={styles.HomePage}>
            <HomePageHero />
            <Categories />
            <MealDisplay />
            <Footer />
        </div>
    );
}
 
export default HomePage;