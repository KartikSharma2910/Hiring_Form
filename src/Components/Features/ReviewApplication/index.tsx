import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../Common/Input";
import Form from "../../FormLayout";
import styles from "./styles";

type ReviewDetailsProps = {
  view?: boolean;
};

const ReviewDetails = ({ view = true }: ReviewDetailsProps) => {
  const personData = useSelector((state: any) => state.personDetails.formData);
  const educationData = useSelector(
    (state: any) => state.educationalDetails.formData
  );
  const { control, formState } = useForm({
    defaultValues: { ...personData, ...educationData },
    criteriaMode: "all",
    mode: "all",
  });

  const { errors } = formState;
  const navigate = useNavigate();

  return (
    <Box sx={styles.mainWrapper}>
      <Form heading="Review your application details">
        <Box sx={styles.wrapper}>
          <Box sx={styles.inputWrapper}>
            <Input
              name="firstName"
              label="First Name"
              control={control}
              errors={errors}
              view={view}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <Input
              name="lastName"
              label="Last Name"
              control={control}
              errors={errors}
              view={view}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <Input
              name="title"
              label="Title"
              control={control}
              errors={errors}
              view={view}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <Input
              name="dob"
              label="Date of Birth"
              control={control}
              errors={errors}
              view={view}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <Input
              name="phone"
              label="Phone Number"
              control={control}
              errors={errors}
              view={view}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <Input
              name="email"
              label="E-Mail"
              control={control}
              errors={errors}
              view={view}
            />
          </Box>
          <Box sx={styles.addressWrapper}>
            <Input
              name="address"
              label="Address"
              control={control}
              errors={errors}
              view={view}
            />
          </Box>

          <Box sx={styles.inputWrapper}>
            <Input
              name="highestQualification"
              label="Highest Qualification"
              control={control}
              errors={errors}
              view={view}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <Input
              name="passingYear"
              label="Passing Year"
              control={control}
              errors={errors}
              view={view}
            />
          </Box>
          <Box sx={styles.addressWrapper}>
            <Input
              name="university"
              label="University / College"
              control={control}
              errors={errors}
              view={view}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <Input
              name="city"
              label="City of education﻿"
              control={control}
              errors={errors}
              view={view}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <Input
              name="technology"
              label="Technology Known"
              control={control}
              errors={errors}
              view={view}
            />
          </Box>
          <Box sx={styles.addressWrapper}>
            <Input
              name="message"
              label="Message for Hiring Team!﻿"
              control={control}
              errors={errors}
              view={view}
            />
          </Box>
        </Box>
      </Form>
      <Box sx={styles.buttonWrapper}>
        <Box sx={styles.buttonInput}>
          <Button
            fullWidth
            sx={styles.backButton}
            onClick={() => navigate("/educational-details")}
          >
            Back
          </Button>
        </Box>
        <Box sx={styles.buttonInput}>
          <Button
            fullWidth
            sx={styles.nextButton}
            onClick={() => navigate("/thankyou")}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewDetails;
