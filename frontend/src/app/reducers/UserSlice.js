import { createSlice, nanoid } from "@reduxjs/toolkit";
 
const initialState = {
  users: {
    username: "",
   AccessToken:"",
   role:""
  }
}
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createuser: (state, action) => {
      console.log(action.payload);
      state.users = action.payload;
    },
    deleteuser: (state) => {
      console.log("here");
      state.users = {}
    }
  }
})
export const { createuser, deleteuser } = userSlice.actions
export default userSlice.reducer
 