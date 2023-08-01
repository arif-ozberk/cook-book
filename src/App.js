import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Styles
import "./styles/globals.scss";

// Components
import SharedSidebar from './Components/SharedSidebar';

// Pages
import HomePage from './Pages/HomePage';
import ClickedMealPage from './Pages/ClickedMealPage';

// Context
import { mainContext } from "./Context/mainContext";

// Functions
import { fetchMealById } from './Functions/fetchMealById';


function App() {

	const SEARCH_API_URL_BASE = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
	const RANDOM_API_URL_BASE = "https://www.themealdb.com/api/json/v1/1/random.php";
	const FILTER_TYPE_API_URL_BASE = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
	const FILTER_AREA_API_URL_BASE = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
	const SEARCH_BY_ID_URL_BASE = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

	const [selectedCategory, setSelectedCategory] = useState("Type");
	const [selectedCategoryGenre, setSelectedCategoryGenre] = useState("All");

	const [mealPageErr, setMealPageErr] = useState(null);
	const [clickedMealData, setClickedMealData] = useState({});


	useEffect(() => {
		fetchMealById(SEARCH_BY_ID_URL_BASE, setMealPageErr, setClickedMealData, localStorage.getItem("clickedMealId"));
	}, []);


	return (
		<BrowserRouter>
			<mainContext.Provider 
				value={{ SEARCH_API_URL_BASE, RANDOM_API_URL_BASE, FILTER_TYPE_API_URL_BASE, FILTER_AREA_API_URL_BASE, SEARCH_BY_ID_URL_BASE, selectedCategory, setSelectedCategory,  selectedCategoryGenre, setSelectedCategoryGenre, clickedMealData, setClickedMealData }}
			>
				<div className="App">
					<Routes>
						<Route path='/' element={<SharedSidebar />} >
							<Route index element={<HomePage />} />
							<Route path='/mealPage' element={<ClickedMealPage />} />
						</Route>
					</Routes>
				</div>
			</mainContext.Provider>
		</BrowserRouter>
	);
}

export default App;
