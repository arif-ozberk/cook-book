import React, { useContext, useState, useEffect } from 'react';

// Styles
import styles from "../styles/HomePage/Categories.module.scss";

// Data
import categoryData from "../data/categoriesData.json";

// Context
import { mainContext } from '../Context/mainContext';


const Categories = () => {

    const categories = [
        {
            type: "Country"
        },
        {
            type: "Type"
        }
    ]

    const { selectedCategory, setSelectedCategory, selectedCategoryGenre, setSelectedCategoryGenre } = useContext(mainContext);


    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
    }

    const handleCategoryGenreClick = (categoryGenreName) => {
        setSelectedCategoryGenre(categoryGenreName);
    }


    return (
        <div id='meal-categories' className={`${styles.Categories} context-wrapper bottom-divider-small`}>
            <section className={styles.categorySelector}>
                {categories.map((item, index) => (
                    <h3 
                        key={index} 
                        onClick={() => handleCategoryClick(item.type)}
                        className={`${item.type === selectedCategory ? styles.activeCategory : ""}`}
                    >
                        {item.type.toUpperCase()}
                    </h3>
                ))}
            </section>

            <section className={styles.categoryContainer}>
                {selectedCategory === "Country" && categoryData.countries.map((item, index) => (
                    <div 
                        key={index}
                        onClick={() => handleCategoryGenreClick(item.countryName)} 
                        className={`${styles.categoryCard}`}
                        style={{ backgroundColor: item.countryName === selectedCategoryGenre ? "#ffd35b" : "#efeff8" }}
                    >
                        <div 
                            className={styles.centerBox} 
                            style={{ backgroundColor: item.countryName === selectedCategoryGenre ? "#ffe395" : "#efeff8" }}
                        ></div>
                        <div className={styles.flag}>
                            <img src={item.flag} alt="flag-img" />
                        </div>
                        <p>{item.countryName.toUpperCase()}</p>
                    </div>
                ))}

                {selectedCategory === "Type" && categoryData.types.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleCategoryGenreClick(item.typeName)}
                        className={`${styles.categoryCard}`}
                        style={{ backgroundColor: item.typeName === selectedCategoryGenre ? "#ffd35b" : "#efeff8" }}
                    >
                        <div
                            className={styles.centerBox}
                            style={{ backgroundColor: item.typeName === selectedCategoryGenre ? "#ffe395" : "#efeff8" }}
                        ></div>
                        <div className={styles.flag}>
                            <img src={item.typeImage} alt="type-img" />
                        </div>
                        <p>{item.typeName.toUpperCase()}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
 
export default Categories;