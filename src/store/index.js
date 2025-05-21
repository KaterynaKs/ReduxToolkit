import { configureStore } from '@reduxjs/toolkit'
import recipesSlice from './recipes.slice'
import categoriesSlice from './categories.slice'
 
// function loggerMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       // ...
//     }
//   }
// }
const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action.type)
  console.log('dispatching', action)
  console.groupEnd()
  return next(action)
}
 
const store = configureStore({
  reducer: {
    [recipesSlice.name]: recipesSlice.reducer,
    [categoriesSlice.name]: categoriesSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
})
 
export default store;