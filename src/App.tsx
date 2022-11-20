import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
  Welcome,
  PersonalDetails,
  EducationalDetails,
  ReviewDetails,
  Thankyou,
} from "./Components/Features";

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/educational-details" element={<EducationalDetails />} />
        <Route path="/review-details" element={<ReviewDetails />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </Box>
  );
};

export default App;
