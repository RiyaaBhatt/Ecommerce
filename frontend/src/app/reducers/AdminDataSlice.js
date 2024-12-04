import { createSlice, nanoid } from "@reduxjs/toolkit";
 
const initialState = {
length:{
    length:"",
    userCount:0,
    adminCount:0,
    data:{}
}
}
export const adminDataSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    getUserLength: (state, action) => {
      console.log(action.payload);
      state.length = action.payload;
    }
  }
})
export const { getUserLength } = adminDataSlice.actions
export default adminDataSlice.reducer
 