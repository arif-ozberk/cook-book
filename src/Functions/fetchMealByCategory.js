
export const fetchMealByCategory = async (API_URL, setErrorMsg, setMealData, categoryDetail, setIsLoading) => {
    try {
        const response = await fetch(`${API_URL}${categoryDetail}`);
        if (!response.ok) throw Error("Error Loading Data!");
        const data = await response.json();

        for(let meal of data.meals) {
            let mealData = {
                mealId: Number(meal.idMeal),
                name: meal.strMeal,
                image: meal.strMealThumb
            }

            setMealData(prev => [...prev, mealData]);
        }
    }
    catch(err) {
        setErrorMsg(err.message);
    }
    finally {
        setIsLoading(false);
    }
}