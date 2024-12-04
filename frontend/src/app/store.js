import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./reducers/UserSlice";
import { adminDataSlice } from "./reducers/AdminDataSlice";
import { OrderDataSlice } from "./reducers/OrderDataSlice";
import { AllUserOrderSlice } from "./reducers/AllUserOrderSlice";
const persistConfig = {
    key: "root",
    storage,
  };
  const rootReducer = combineReducers({
    user:userSlice.reducer,
    admin:adminDataSlice.reducer,
    order:OrderDataSlice.reducer,
    AllUser:AllUserOrderSlice.reducer
    });
    
const persistedReducer = persistReducer(persistConfig,rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);