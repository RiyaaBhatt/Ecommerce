import { createSlice, nanoid } from "@reduxjs/toolkit";
 
const initialState = {
data:{
 
},
Product:{

}
}
export const AllUserOrderSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    getUserData: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
    },
    getProductData:(state,action)=>{
      console.log(action.payload)
      state.Product=action.payload
    }
  }
})
export const { getUserData,getProductData } = AllUserOrderSlice.actions
export default AllUserOrderSlice.reducer
 