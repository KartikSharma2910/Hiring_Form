import { Box } from "@mui/material";
import Form from "../../FormLayout";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import styles from "./styles";

const Thankyou = () => {
  return (
    <Form heading="Thank you for connecting with us">
      <Box sx={styles.wrapper}>
        <Box sx={styles.heading}>
          Thankyou your details were submitted successfully.
        </Box>
        <Box>
          <TaskAltOutlinedIcon sx={styles.icon} />
        </Box>
        <Box sx={styles.description}>
          Our hiring team will connect soon with you if your profile matches our
          requirements.
        </Box>
      </Box>
    </Form>
  );
};

export default Thankyou;
