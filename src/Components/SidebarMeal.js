import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from "../styles/SharedSidebar.module.scss";


const SidebarMeal = ({ mealData, star, duration, handleSidebarMealClick }) => {


    return (
        <Link to='/mealPage' onClick={() => handleSidebarMealClick(mealData.mealId)} className={styles.SidebarMeal}>
            <div className={styles.mealImage}>
                <img src={mealData.image} alt="meal-img" />
            </div>
            <p className={styles.mealName}>{mealData.name}</p>
            <p className={styles.mealArea}>{mealData.area}</p>
            <p className={styles.duration}>
                <i className='fas fa-clock-rotate-left'></i>
                {duration}
            </p>
            <p className={styles.ratings}>
                <i className='fa-regular fa-star'></i>
                {star}
            </p>
        </Link>
    );
}
 
export default SidebarMeal;