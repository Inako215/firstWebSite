import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import bidTypeReducer from "./bidTypeSlice";
import pilotsReducer from "./pilotsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    bidTypes: bidTypeReducer,
    pilots: pilotsReducer,
  },
});
