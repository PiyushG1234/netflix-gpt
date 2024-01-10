import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import addTrailerVideo from "./moviesSlice";

const appStore = configureStore(
    {
        reducer:{
            user: userReducer,
            movies: moviesReducer,
        },
    },
);

export default appStore;