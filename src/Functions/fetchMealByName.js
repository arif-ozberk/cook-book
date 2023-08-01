
export const fetchMealByName = async (mealName, API_URL, setErrMessage, setMeals) => {
    try {
        const response = await fetch(`${API_URL}${mealName}`);
        if(!response.ok) throw Error("Error Loading Data!");
        const data = await response.json();

        let mealData = {
            mealId: Number(data.meals[0].idMeal),
            name: data.meals[0].strMeal,
            area: data.meals[0].strArea,
            image: data.meals[0].strMealThumb,
            category: data.meals[0].strCategory,
            instructions: data.meals[0].strInstructions,
            youtube: data.meals[0].strYoutube,
            ingredients: [
                {
                    ingredient: data.meals[0].strIngredient1,
                    measure: data.meals[0].strMeasure1
                },
                {
                    ingredient: data.meals[0].strIngredient2,
                    measure: data.meals[0].strMeasure2
                },
                {
                    ingredient: data.meals[0].strIngredient3,
                    measure: data.meals[0].strMeasure3
                },
                {
                    ingredient: data.meals[0].strIngredient4,
                    measure: data.meals[0].strMeasure4
                },
                {
                    ingredient: data.meals[0].strIngredient5,
                    measure: data.meals[0].strMeasure5
                },
                {
                    ingredient: data.meals[0].strIngredient6,
                    measure: data.meals[0].strMeasure6
                },
                {
                    ingredient: data.meals[0].strIngredient7,
                    measure: data.meals[0].strMeasure7
                },
                {
                    ingredient: data.meals[0].strIngredient8,
                    measure: data.meals[0].strMeasure8
                },
                {
                    ingredient: data.meals[0].strIngredient9,
                    measure: data.meals[0].strMeasure9
                },
                {
                    ingredient: data.meals[0].strIngredient10,
                    measure: data.meals[0].strMeasure10
                },
                {
                    ingredient: data.meals[0].strIngredient11,
                    measure: data.meals[0].strMeasure11
                },
                {
                    ingredient: data.meals[0].strIngredient12,
                    measure: data.meals[0].strMeasure12
                },
                {
                    ingredient: data.meals[0].strIngredient13,
                    measure: data.meals[0].strMeasure13
                },
                {
                    ingredient: data.meals[0].strIngredient14,
                    measure: data.meals[0].strMeasure14
                },
                {
                    ingredient: data.meals[0].strIngredient15,
                    measure: data.meals[0].strMeasure15
                },
                {
                    ingredient: data.meals[0].strIngredient16,
                    measure: data.meals[0].strMeasure16
                },
                {
                    ingredient: data.meals[0].strIngredient17,
                    measure: data.meals[0].strMeasure17
                },
                {
                    ingredient: data.meals[0].strIngredient18,
                    measure: data.meals[0].strMeasure18
                },
                {
                    ingredient: data.meals[0].strIngredient19,
                    measure: data.meals[0].strMeasure19
                },
                {
                    ingredient: data.meals[0].strIngredient20,
                    measure: data.meals[0].strMeasure20
                }
            ]
        }

        setMeals(prev => [...prev, mealData]);
    }
    catch(err) {
        setErrMessage(err.message);
    }
}