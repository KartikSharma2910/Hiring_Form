import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePerson } from "../../../Redux/slices/personDetails";
import Dropdown from "../../Common/Dropdown";
import Input from "../../Common/Input";
import Form from "../../FormLayout";
import styles from "./styles";

const PersonalDetails = () => {
  const personData = useSelector((state: any) => state.personDetails.formData);

  const { control, formState, trigger, getValues } = useForm({
    defaultValues: personData,
    criteriaMode: "all",
    mode: "all",
  });

  const gender = [
    {
      label: "Male",
      value: "1",
    },
    {
      label: "Female",
      value: "2",
    },
    {
      label: "Other",
      value: "3",
    },
    {
      label: "Prefer not to say",
      value: "4",
    },
  ];

  const { errors } = formState;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const finishData = (res: boolean) => {
    if (res) {
      dispatch(
        updatePerson({
          value: getValues(),
        })
      ) && navigate("/educational-details");
    }
  };

  const triggerValidation = () => {
    trigger().then(finishData);
  };

  return (
    <Box sx={styles.mainWrapper}>
      <Form heading="Complete your details to proceed further">
        <Box sx={styles.iconWrapper}>
          <AccountCircleOutlinedIcon sx={styles.icon} />
        </Box>
        <Box sx={styles.wrapper}>
          <Box sx={styles.inputWrapper}>
            <Input
              name="firstName"
              label="First Name"
              control={control}
              errors={errors}
              rules={{
                required: "This field is required",
              }}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <Input
              name="lastName"
              label="Last Name"
              control={control}
              errors={errors}
              rules={{
                required: "This field is required",
              }}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <Dropdown
              name="title"
              label="Gender"
              options={gender}
              control={control}
              errors={errors}
              rules={{
                required: "This field is required",
              }}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <Input
              name="dob"
              label="Date of Birth"
              control={control}
              errors={errors}
              rules={{
                required: "This field is required",
              }}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <Input
              name="phone"
              label="Phone Number"
              control={control}
              errors={errors}
              rules={{
                required: "This field is required",
              }}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <Input
              name="email"
              label="E-Mail"
              control={control}
              errors={errors}
              rules={{
                required: "This field is required",
              }}
            />
          </Box>
          <Box sx={styles.addressWrapper}>
            <Input
              name="address"
              label="Address"
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
          <Button fullWidth sx={styles.backButton} disabled>
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

export default PersonalDetails;
