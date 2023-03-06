import { createSlice} from "@reduxjs/toolkit";


export const userSlice=createSlice({
    name:"user",
 initialState:{
    user:null,
     token:null
 },
 reducers:{
    login:(state,action)=>{
        state.user =action.payload.data.user
      state.token =action.payload.data.access_token
    },
    logout:(state)=>{
        state.user=null
    },
    token:(state,action)=>{
      state.token=action.payload
    }
 }
    
})


 export const {login,logout,token}=userSlice.actions;

export const selectuser=(state)=>state.user.user

export default userSlice.reducer