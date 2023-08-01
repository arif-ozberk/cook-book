import React, { useContext } from 'react';
import ReactPlayer from 'react-player';

// Styles
import styles from "../styles/ClickedMealPage/ClickedMealPage.module.scss";

// Components
import Footer from '../Components/Footer';

// Context
import { mainContext } from '../Context/mainContext';


const ClickedMealPage = () => {

    const { clickedMealData } = useContext(mainContext);


    return (
        <div className={`${styles.ClickedMealPage}`}>
            <section className={`${styles.mealPageContainer} context-wrapper top-divider`}>

                <h1 className={styles.mealName}>{clickedMealData.name}</h1>

                <div className={`${styles.mealInfo}`}>
                    <div className={styles.mealInfoLeft}>
                        <img src={clickedMealData.image} alt="meal-img" />
                        <h3><span>Type:</span>{clickedMealData.category}</h3>
                        <h3><span>Country:</span>{clickedMealData.area}</h3>
                        <h2>Ingredients:</h2>
                        <ul>
                            {clickedMealData.ingredients?.map((item, index) => (
                                item.ingredient && <li key={index}><i className='fas fa-caret-right'></i> {item.ingredient} - {item.measure}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.mealInfoRight}>
                        <h2>Instructions</h2>
                        <p>{clickedMealData.instructions}</p>
                    </div>
                </div>

                <h2 className={styles.videoTitle}>Video Recipe</h2>
                {clickedMealData.youtube && <div className={styles.mealVideo}>
                    <ReactPlayer url={clickedMealData.youtube} width={"100%"} height={"100%"} />
                </div>}
                {!clickedMealData.youtube && <p className={styles.videoError}>No video recipe found!</p>}
                
            </section>
            
            <Footer />
        </div>
    );
}
 
export default ClickedMealPage;