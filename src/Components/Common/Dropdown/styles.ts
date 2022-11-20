import { SxProps } from "@mui/material";

const styles: {
  [key: string]: SxProps;
} = {
  wrapper: {},

  label: {
    fontSize: "16px",
    fontWeight: "bold",
    "&.Mui-focused": {
      color: "black",
    },
  },

  input: {
    border: "2px solid #efefef",
    marginTop: "20px",
    boxSizing: "border-box",
    height: "45px",
    borderRadius: "5px",
    fontSize: "14px",
    padding: "10px 12px",

    "&.Mui-error": {
      borderColor: "#EC0909",
    },

    "&.Mui-focused": {
      borderColor: "#6043b6",
    },

    "& input.Mui-disabled": {
      cursor: "not-allowed",
    },
  },

  helperText: {
    fontSize: "10px",
    fontWeight: "bold",
    color: "#EC0909",
    position: "absolute",
    bottom: "-17px",
    height: "15px",
  },

  paper: {
    padding: "0 10px",
  },

  menu: {
    padding: 0,
  },

  menuItem: {
    height: "50px",
    color: "black",
    p: "0 2px",
    borderBottom: "2px solid #e8e9eb",
  },

  text: {
    color: "black",
    height: "17px",
    fontSize: "14px",
    margin: "auto 0",
  },
};

export default styles;
