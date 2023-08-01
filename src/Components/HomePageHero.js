import React, { useContext, useState, useEffect } from 'react';

// Styles
import styles from "../styles/HomePage/HomePageHero.module.scss";

// Functions
import { fetchRandomMeal } from '../Functions/fetchRandomMeal';

// Context
import { mainContext } from '../Context/mainContext';

// Images
import heroImage from "../images/7938331_3812201.svg";


const HomePageHero = () => {

    return (
        <div className={`${styles.heroBackground}`}>
            <div className={`${styles.HomePageHero} context-wrapper`}>
                <section className={styles.heroLeft}>
                    <h1>Thinking of<br />what to cook?</h1>
                    <p>Pick a perfect, delicious recipe from our large collection of meals.</p>
                    <a href="#meal-categories">
                        <button className={styles.cta}>
                            <span>Start Cooking!</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </a>
                    
                </section>

                <section className={styles.heroRight}>
                    <img src={heroImage} alt="hero-img" />
                </section>
            </div>
        </div>
    );
}
 
export default HomePageHero;