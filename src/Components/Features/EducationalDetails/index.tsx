import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateEducation } from "../../../Redux/slices/educationalDetails";
import Dropdown from "../../Common/Dropdown";
import Input from "../../Common/Input";
import Form from "../../FormLayout";
import styles from "./styles";

const EducationalDetails = () => {
  const educationData = useSelector(
    (state: any) => state.educationalDetails.formData
  );

  const { control, formState, trigger, getValues } = useForm({
    defaultValues: educationData,
    criteriaMode: "all",
    mode: "all",
  });

  const highestQualification = [
    {
      label: "B.Tech",
      value: "1",
    },
    {
      label: "M.tech",
      value: "2",
    },
    {
      label: "Bsc.",
      value: "3",
    },
    {
      label: "Msc.",
      value: "4",
    },
    {
      label: "Bca.",
      value: "5",
    },
    {
      label: "Mca.",
      value: "6",
    },
  ];

  const cities = [
    {
      label: "Faridabad",
      value: "1",
    },
    {
      label: "Gurugram",
      value: "2",
    },
    {
      label: "Panipat",
      value: "3",
    },
    {
      label: "Ambala",
      value: "4",
    },
    {
      label: "Rohtak",
      value: "5",
    },
    {
      label: "Karnal",
      value: "6",
    },
    {
      label: "Sonipat",
      value: "7",
    },
    {
      label: "Panchkula",
      value: "8",
    },
    {
      label: "Jind",
      value: "9",
    },
    {
      label: "Rewari",
      value: "10",
    },
  ];

  const technology = [
    {
      label: "Front-End",
      value: "1",
    },
    {
      label: "Back-End",
      value: "2",
    },
    {
      label: "Full Stack",
      value: "3",
    },
    {
      label: "Java Development",
      value: "4",
    },
    {
      label: "Android Development",
      value: "5",
    },
    {
      label: "Ios Development",
      value: "6",
    },
    {
      label: "Python",
      value: "6",
    },
  ];

  const { errors } = formState;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const finishData = (res: boolean) => {
    if (res) {
      dispatch(
        updateEducation({
          value: getValues(),
        })
      ) && navigate("/review-details");
    }
  };

  const triggerValidation = () => {
    trigger().then(finishData);
  };

  return (
    <Box sx={styles.mainWrapper}>
      <Form heading="Fill your educational details">
        <Box sx={styles.wrapper}>
          <Box sx={styles.inputWrapper}>
            <Dropdown
              name="highestQualification"
              label="Highest Qualification"
              control={control}
              errors={errors}
              options={highestQualification}
              rules={{
                required: "This field is required",
              }}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <Input
              name="passingYear"
              label="Passing Year"
              control={control}
              errors={errors}
              rules={{
                required: "This field is required",
              }}
            />
          </Box>
          <Box sx={styles.addressWrapper}>
            <Input
              name="university"
              label="University / College"
              control={control}
              errors={errors}
              rules={{
                required: "This field is required",
              }}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <Dropdown
              name="city"
              label="City of education﻿"
              control={control}
              errors={errors}
              options={cities}
              rules={{
                required: "This field is required",
              }}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <Dropdown
              name="technology"
              label="Technology known"
              control={control}
              errors={errors}
              options={technology}
              rules={{
                required: "This field is required",
              }}
            />
          </Box>
          <Box sx={styles.addressWrapper}>
            <Input
              name="message"
              label="Message for Hiring Team!﻿"
              control={control}
              errors={errors}
              rules={{
                required: "This field is required",
              }}
            />
          </Box>
        </Box>
      </Form>
      <Box sx={styles.buttonWrapper}>
        <Box sx={styles.buttonInput}>
          <Button
            fullWidth
            sx={styles.backButton}
            onClick={() => navigate("/personal-details")}
          >
            Back
          </Button>
        </Box>
        <Box sx={styles.buttonInput}>
          <Button fullWidth sx={styles.nextButton} onClick={triggerValidation}>
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EducationalDetails;
