
import recipesSlice from "../store/recipes.slice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getRecipes } from "../store/recipes.slice"
import { getCategories } from "../store/categories.slice"
// import {Card} from "./Card"
import MultiActionAreaCard from "./RecipesCard"
// import { getRecipes } from "../api"

export default function Recipes() {
  const recipes = useSelector(recipesSlice.selectors.getAllRecipes)
  const dispatch = useDispatch()
  const status = useSelector((state)=>state.recipes.status)
  // const getState = useStore().getState

  useEffect(() => {
    // getRecipes(dispatch, getState)
  // }, [dispatch, getState])
    // dispatch(getRecipes);
    dispatch(getRecipes());
    dispatch(getCategories());
  }, [dispatch])

  return (
    <>
    {status === 'pending' && <h1>Loading...</h1>    }
    <div className='recipes'>
      {recipes.map((recipe) => (
        <MultiActionAreaCard key={recipe.id} recipe={recipe}/>
      ))}
    </div>
    </>
  )
}