
export const fetchAllMeals = async (API_URL, setErrMsg, setAllMeals, typeData, setIsLoading) => {
    try {
        for(let item of typeData) {
            if(item.typeName === "All") continue;
            
            const response = await fetch(API_URL + item.typeName);
            if (!response.ok) throw Error("Error Loading Data!");
            const data = await response.json();

            for(let arr of data.meals) {
                let mealData = {
                    mealId: Number(arr.idMeal),
                    name: arr.strMeal,
                    image: arr.strMealThumb
                }

                setAllMeals(prev => [...prev, mealData]);
            }
        }
    }
    catch(err) {
        setErrMsg(err.message)
    }
    finally {
        setIsLoading(false);
    }
}