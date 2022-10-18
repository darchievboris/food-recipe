import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getMealById} from "../api";
import RecipeCard from "../components/RecipeCard";
import Preloader from "../components/Preloader";

const Recipe = () => {
    const [recipe, setRecipe] = useState({});
    const {id} = useParams()
    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]))
    }, [id])
    const navigate = useNavigate()

    return (
        <>
            <button className="btn" onClick={() => navigate(-1)}>go back</button>
            {!recipe.idMeal ? <Preloader/> : <RecipeCard recipe={recipe}/>}
        </>
    );
};

export default Recipe;
