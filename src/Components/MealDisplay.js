import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from "../styles/HomePage/MealDisplay.module.scss";

// Functions
import { fetchAllMeals } from '../Functions/fetchAllMeals';
import { fetchMealByCategory } from '../Functions/fetchMealByCategory';
import { fetchMealById } from '../Functions/fetchMealById';

// Data
import categoriesData from "../data/categoriesData.json";

// Context
import { mainContext } from "../Context/mainContext";


const MealDisplay = () => {

    const { FILTER_TYPE_API_URL_BASE, FILTER_AREA_API_URL_BASE, SEARCH_BY_ID_URL_BASE, selectedCategory, selectedCategoryGenre, setClickedMealData } = useContext(mainContext);

    const [errMessage, setErrorMessage] = useState(null);
    const [displayedMeals, setDisplayedMeals] = useState([]);
    const [loadedMealAmount, setLoadedMealAmount] = useState(6);
    const [isLoading, setIsLoading] = useState(true);


    const handleLoadMoreClick = () => {
        if(loadedMealAmount >= displayedMeals.length) {
            setLoadedMealAmount(6);
            return
        }
        setLoadedMealAmount(prev => prev + 9);
    }


    useEffect(() => {
        setDisplayedMeals([]);
        setLoadedMealAmount(6);
        setIsLoading(true);
        if(selectedCategoryGenre === "All") {
            fetchAllMeals(FILTER_TYPE_API_URL_BASE, setErrorMessage, setDisplayedMeals, categoriesData.types, setIsLoading);
            return
        }
        if(selectedCategory === "Type") {
            setTimeout(() => {
                fetchMealByCategory(FILTER_TYPE_API_URL_BASE, setErrorMessage, setDisplayedMeals, selectedCategoryGenre, setIsLoading);
                return
            }, (Math.random() * 1000) + 700)
        }
        if(selectedCategory === "Country") {
            setTimeout(() => {
                fetchMealByCategory(FILTER_AREA_API_URL_BASE, setErrorMessage, setDisplayedMeals, selectedCategoryGenre, setIsLoading);
                return
            }, (Math.random() * 1000) + 700)
        }
    }, [selectedCategoryGenre]);


    const handleMealCardClick = (clickedMealId) => {
        window.scrollTo(0, 0);
        localStorage.setItem("clickedMealId", clickedMealId);
        fetchMealById(SEARCH_BY_ID_URL_BASE, setErrorMessage, setClickedMealData, clickedMealId);
    }

    
    return (
        <div className={`${styles.MealDisplay} context-wrapper`}>
            {isLoading && <div className={styles.loaderContainer}>
                <div className={styles.spinner}></div>
            </div>}

            {errMessage && !isLoading && <div className={styles.errorContainer}>
                <p>{errMessage}</p>
                <p>Please reload the page.</p>
            </div>}
            
            <div className={styles.mealCardContainer}>
                {!errMessage && !isLoading && displayedMeals.slice(0, loadedMealAmount).map((item) => (
                    <Link to='/mealPage' key={item.mealId} className={styles.mealCard} onClick={() => handleMealCardClick(item.mealId)}>
                        {item.name.length > 36 ? <h1>{item.name.slice(0, 36)}...</h1> : <h1>{item.name}</h1>}
                        <img src={item.image} alt="meal-img" />
                    </Link>
                ))}
            </div>
            
            <button 
                className={styles.loadMoreButton} 
                onClick={handleLoadMoreClick}
            > <i className={loadedMealAmount >= displayedMeals.length ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i></button>
        </div>
    );
}
 
export default MealDisplay;