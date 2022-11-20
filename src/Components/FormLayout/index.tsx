import { Box } from "@mui/material";
import styles from "./styles";

type FormProps = {
  heading: string;
  children: React.ReactNode;
};

const Form = ({ heading, children }: FormProps) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>{heading}</Box>
      <Box sx={styles.formWrapper}>{children}</Box>
    </Box>
  );
};

export default Form;
