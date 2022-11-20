import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EducationalDetailsFormData } from "../../types/formData";

const initialState: { formData: EducationalDetailsFormData } = {
  formData: {
    highestQualification: "",
    passingYear: "",
    university: "",
    city: "",
    technology: "",
    message: "",
  },
};

const educationalDetailsSlice = createSlice({
  name: "educationalDetails",
  initialState,
  reducers: {
    updateEducation: (
      state,
      action: PayloadAction<{ value: EducationalDetailsFormData }>
    ) => {
      const { ...formData } = action.payload.value;
      state.formData = { ...state.formData, ...formData };
    },
  },
});

export const { updateEducation } = educationalDetailsSlice.actions;
export default educationalDetailsSlice.reducer;
