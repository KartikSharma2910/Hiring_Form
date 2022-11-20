import { SxProps } from "@mui/material";

const styles: {
  [key: string]: SxProps;
} = {
  wrapper: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "6% 40px",
    gap: "45px",
    fontFamily: "'Poppins', sans-serif",
  },

  heading: {
    fontSize: "20px",
    color: "#1AAF9E",
    textTransform: "capitalize",
  },

  formWrapper: {
    border: "2px solid #C2CFD9",
    borderRadius: "10px",
    width: "430px",
    height: "500px",
    overflow: "scroll",
  },
};

export default styles;
