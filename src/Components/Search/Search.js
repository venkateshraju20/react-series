import axios from "axios";
import React, { useState } from "react";

function Search() {
  const [searchData, setSearchData] = useState("");
  const [meals, setMeals] = useState([]);
  const [randomMeals, setRandomMeals] = useState([]);

  const mealsAPI = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const randomMealsAPI = "https://www.themealdb.com/api/json/v1/1/random.php";

  const handleSearchData = (e) => {
    setSearchData(e.target.value);
  };

  const handleMeals = () => {
    fetchMeals(searchData);
  };

  const handleRandomMeals = () => {
    fetchRandomMeals();
  };

  const fetchMeals = async (data) => {
    const fetchData = await axios.get(`${mealsAPI}${data}`);
    setMeals(fetchData.data.meals);
    setRandomMeals([]);
  };

  const fetchRandomMeals = async () => {
    const fetchData = await axios.get(randomMealsAPI);
    setRandomMeals(fetchData.data.meals);
    setMeals([]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Search Meals</h1>
      <input type="text" value={searchData} onChange={handleSearchData} />
      <button onClick={handleMeals}>Show Meals</button>
      <button onClick={handleRandomMeals}>Show Random Meals</button>
      <br />
      <br />
      {meals ? (
        meals.map((meal, index) => (
          <div key={index}>
            <p>{meal.strMeal}</p>
            <img
              width="500"
              height="500"
              src={meal.strMealThumb}
              alt="meal.strMealThumb"
            />
          </div>
        ))
      ) : (
        <p>No meals data found</p>
      )}
      {randomMeals ? (
        randomMeals.map((meal, index) => (
          <div key={index}>
            <p>{meal.strMeal}</p>
            <img
              width="500"
              height="500"
              src={meal.strMealThumb}
              alt="meal.strMealThumb"
            />
          </div>
        ))
      ) : (
        <p>No random meals data found</p>
      )}
    </div>
  );
}

export default Search;
