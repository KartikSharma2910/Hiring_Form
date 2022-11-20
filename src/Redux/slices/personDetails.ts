import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PersonDetailsFormData } from "../../types/formData";

const initialState: { formData: PersonDetailsFormData } = {
  formData: {
    firstName: "",
    lastName: "",
    title: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
  },
};

const personDetailsSlice = createSlice({
  name: "personDetails",
  initialState,
  reducers: {
    updatePerson: (
      state,
      action: PayloadAction<{ value: PersonDetailsFormData }>
    ) => {
      const { ...formData } = action.payload.value;
      state.formData = { ...state.formData, ...formData };
    },
  },
});

export const { updatePerson } = personDetailsSlice.actions;
export default personDetailsSlice.reducer;
