import { Box } from "@mui/system";
import styles from "./styles";

type ViewProps = {
  label: string;
  value: string;
};

const View = ({ label, value }: ViewProps) => {
  return (
    <Box>
      <Box sx={styles.label}>{label}</Box>
      <Box sx={styles.value}>{value}</Box>
    </Box>
  );
};

export default View;
