import React from 'react';
import {Link} from "react-router-dom";

const Meal = ({strMeal, idMeal, strMealThumb}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal}/>
            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>

            </div>
            <div className="card-action">
                <Link to={`/recipe/${idMeal}`} className="btn">Watch recipe</Link>
            </div>
        </div>
    );
};

export default Meal;
