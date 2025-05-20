// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import userReducer from "./slices/userSlice"; // Adjust path if needed
import placeReducer from "./slices/placeSlice";

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  place: placeReducer
  // Add other slices here (e.g., org, product, etc.)
});

// Persistence config
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"], // only persist user slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
