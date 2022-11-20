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
  },

  description: {
    fontSize: "16px",
    textAlign: "center",
    padding: "0px 10px",
  },

  icon: {
    fontSize: "150px",
    margin: "20px 0px",
    color: "#C2CFD9",
  },

  consent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    position: "absolute",
    bottom: -50,
    width: "430px",
    border: "2.5px solid #1AAF9E",
    fontWeight: "bold",
    color: "#1AAF9E",
    "&.Mui-disabled": {
      borderColor: "#C4CFD6",
      color: "#4A5C6A",
      cursor: "pointer",
    },
  },
};

export default styles;
