import { SxProps } from "@mui/material";

const styles: {
  [key: string]: SxProps;
} = {
  mainWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0 0 10px",
  },

  icon: {
    fontSize: "60px",
    color: "#C2CFD9",
  },

  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",
    padding: "20px",
    position: "relative",
  },

  inputWrapper: {
    flexBasis: "45%",
  },

  addressWrapper: {
    flexBasis: "100%",
  },

  buttonWrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    width: "430px",
    position: "absolute",
    bottom: 70,
  },

  buttonInput: {
    flexBasis: "45%",
  },

  backButton: {
    border: "2.5px solid #EEBDC5",
    color: "#D3445A",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-disabled": {
      borderColor: "#C4CFD6",
      color: "#4A5C6A",
      cursor: "pointer",
    },
  },

  nextButton: {
    border: "2.5px solid #ABE2DC",
    color: "#1AAF9E",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
};

export default styles;
