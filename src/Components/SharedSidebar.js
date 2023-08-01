import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from "../styles/SharedSidebar.module.scss";

// Images
import logoImage from "../images/logo-img.png";
import { Outlet } from 'react-router';

// Context
import { mainContext } from '../Context/mainContext';

// Functions
import { fetchMealByName } from '../Functions/fetchMealByName';
import { fetchMealById } from '../Functions/fetchMealById';

// Components
import SidebarMeal from './SidebarMeal';


const SharedSidebar = () => {

    const { SEARCH_API_URL_BASE, SEARCH_BY_ID_URL_BASE, setClickedMealData } = useContext(mainContext);

    const [errMessage, setErrMessage] = useState(null);
    const [meals, setMeals] = useState([]);

    const durations = ["1 hr 30 mins", "1 hr 15 mins", "1 hr 15 mins", "1 hr", "45 mins", "30 mins"];
    const stars = [421, 402, 387, 355, 339, 332];



    const fetchSidebarData = (mealNames) => {
        for(let item of mealNames) {
            fetchMealByName(item, SEARCH_API_URL_BASE, setErrMessage, setMeals)
        }
    }

    useEffect(() => {
        fetchSidebarData(["Beef_Wellington", "Arrabiata", "Beef_Sunday_Roast", "Szechuan_Beef", "French_Onion_Soup", "Braised_Beef_Chilli"]);
    }, []);


    const [isOpen, switchIsOpen] = useState(false);


    const handleSidebarButton = () => {
        switchIsOpen(true)
    }

    const handleCloseButton  = () => {
        switchIsOpen(false)
    }

    const handleSidebarMealClick = (clickedMealId) => {
        switchIsOpen(false);
        window.scrollTo(0, 0);
        localStorage.setItem("clickedMealId", clickedMealId);
        fetchMealById(SEARCH_BY_ID_URL_BASE, setErrMessage, setClickedMealData, clickedMealId);
    }



    return (
        <>
            <i onClick={handleSidebarButton} className={`${styles.sidebarButton} fas fa-angles-right`}></i>
            <div className={`${styles.SharedSidebar} ${isOpen ? styles.sidebarActive : ""}`}>
                <div className={`${styles.sidebarLogo} bottom-divider-small`}>
                    <i onClick={handleCloseButton} className={`${styles.closeButton} fas fa-close`}></i>
                    <img src={logoImage} alt="logo-img" />
                    <div onClick={() => { switchIsOpen(false); window.scrollTo(0, 0); }}><Link to='/'>Cook Book</Link></div>
                </div>
                
                <div className={`${styles.topChoicesTitle} bottom-divider-small`}>
                    <h2>Top Choices</h2>
                    <i className='fas fa-award'></i>
                </div>

                {errMessage && <p className={styles.errorMessage}>Please reload the page!</p>}

                <div className={styles.mealFrame}>
                    <div className={styles.mealCardContainer}>
                        {!errMessage && meals?.map((mealData, index) => (
                            <SidebarMeal 
                                key={mealData.mealId} 
                                mealData={mealData} 
                                star={stars[index]} 
                                duration={durations[index]} 
                                handleSidebarMealClick={handleSidebarMealClick} 
                            />
                        ))}
                    </div>
                </div>
                
                
            </div>

            <Outlet />
        </>
    );
}
 
export default SharedSidebar;