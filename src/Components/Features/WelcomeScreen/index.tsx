import { Box, Button } from "@mui/material";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import Toggle from "../../Common/Toggle";
import Form from "../../FormLayout";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./styles";

const Welcome = () => {
  const { control, watch } = useForm({
    defaultValues: {
      intrested: false,
    },
    criteriaMode: "all",
    mode: "all",
  });

  const navigate = useNavigate();
  return (
    <Form heading="Welcome to the onboarding process of KS Tech.">
      <Box sx={styles.wrapper}>
        <Box sx={styles.heading}>
          You need to submit your personal and educational details to proceed
          further.
        </Box>
        <Box sx={styles.description}>
          Currently we are hiring 0 - 1 year of experienced candidates.
        </Box>
        <Box>
          <DeveloperModeIcon sx={styles.icon} />
        </Box>
        <Box sx={styles.consent}>
          <Box>Interested for the opportunity ?</Box>
          <Box>
            <Toggle name="intrested" color="success" control={control} />
          </Box>
        </Box>
      </Box>
      <Button
        sx={styles.button}
        disabled={!watch("intrested")}
        onClick={() => navigate("/personal-details")}
      >
        Complete Details
      </Button>
    </Form>
  );
};

export default Welcome;
