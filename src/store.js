import { createStore } from "redux";

const initialState = {
  name: "",
  category: "",
  authorFirst: "",
  authorLast: "",
  ingredients: [],
  instructions: [],
  recipes: []
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST";
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INSTRUCTION = "ADD_INSTRUCTION";
export const ADD_RECIPE = "ADD_RECIPE";
export const CLEAR_FIELDS = "CLEAR_FIELDS";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      console.log({
        name: action.payload
      });
      return {
        ...state,
        name: action.payload
      };
    case UPDATE_CATEGORY:
      console.log({
        category: action.payload
      });
      return {
        ...state,
        category: action.payload
      };
    case UPDATE_AUTHOR_FIRST:
      console.log({
        authorFirst: action.payload
      });
      return {
        ...state,
        authorFirst: action.payload
      };
    case UPDATE_AUTHOR_LAST:
      console.log({
        authorLast: action.payload
      });
      return {
        ...state,
        authorLast: action.payload
      };
    case ADD_INGREDIENT:
      const newIngredients = [...state.ingredients, action.payload];
      return {
        ...state,
        ingredients: newIngredients
      };
    case ADD_INSTRUCTION:
      const newInstructions = [...state.instructions, action.payload];
      return {
        ...state,
        instructions: newInstructions
      };
    case ADD_RECIPE:
      const {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      } = state;
      const recipe = {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      };
      const newRecipes = [...state.recipes, recipe];
      return { ...state, recipes: newRecipes };
    case CLEAR_FIELDS:
      return {
        ...state,
        name: "",
        category: "",
        authorFirst: "",
        authorLast: "",
        ingredients: [],
        instructions: []
      };
    default:
      return state;
  }
}

export default createStore(reducer);

// import { createStore } from "redux";

// const initialState = {};

// function reducer(state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     default:
//       return state;
//   }
// }

// export default createStore(reducer);
