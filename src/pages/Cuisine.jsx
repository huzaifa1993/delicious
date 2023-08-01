import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import recipe from "../mockFetch";


function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const [veggie, setVeggie] = useState([]);// delet

  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    // getCuisine(params.type);
    setCuisine(recipe.recipes);// delet
    console.log(params.type);
  }, [params.type]);

  return (
    <Grid>
      {cuisine.map((recipe) => {
        return (
          <Card key={recipe.id}>
            <img src={recipe.image} alt="" />
            <h4>{recipe.title}</h4>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 1rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
