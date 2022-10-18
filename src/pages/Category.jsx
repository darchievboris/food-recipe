import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getFilterCategory} from "../api";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

const Category = () => {
    const {name} = useParams()
    const [meals, setMeals] = useState([]);

    useEffect(() => {
            getFilterCategory(name).then(data => setMeals(data.meals))
            console.log(meals)
        }, [name]
    )
    const navigate = useNavigate()

    return (
        <>
            <button className="btn" onClick={() => navigate(-1)}>go back</button>

            {!meals.length ? <Preloader/> : <MealList meals={meals}/>}
        </>
    );
};

export default Category;
