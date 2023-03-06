import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { Loginapi } from "../callapi";
import userReducer from './slice'

   
export const store=configureStore({
   reducer:{
    user:userReducer,
    [Loginapi.reducerPath]:Loginapi.reducer,
   } ,
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(Loginapi.middleware),
})
 setupListeners(store.dispatch)