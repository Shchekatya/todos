import { configureStore } from '@reduxjs/toolkit'
import { toDoReducer } from "./redux/reducers/reducer-todo"

const store = configureStore({
    reducer: {toDoReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
   })}); 
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch