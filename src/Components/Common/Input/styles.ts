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
};

export default styles;
