import { createSlice, nanoid } from "@reduxjs/toolkit";
 
const initialState = {
 order:{

 }
}
export const OrderDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getOrderCount: (state, action) => {
      console.log(action.payload);
      state.order = action.payload;
    }
  }
})
export const { getOrderCount } = OrderDataSlice.actions
export default OrderDataSlice.reducer
 