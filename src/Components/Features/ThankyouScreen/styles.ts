import { SxProps } from "@mui/material";

const styles: {
  [key: string]: SxProps;
} = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
  },

  heading: {
    fontSize: "16px",
    textAlign: "center",
    marginBottom: "20px",
    padding: "0 12%",
  },

  description: {
    fontSize: "16px",
    textAlign: "center",
    padding: "0px 10px",
  },

  icon: {
    fontSize: "150px",
    margin: "60px 0px",
    color: "#C2CFD9",
  },
};

export default styles;
