import { configureStore } from "@reduxjs/toolkit";
import personDetails from "./slices/personDetails";
import educationalDetails from "./slices/educationalDetails";

const store = configureStore({
  reducer: {
    personDetails: personDetails,
    educationalDetails: educationalDetails,
  },
});

export default store;
