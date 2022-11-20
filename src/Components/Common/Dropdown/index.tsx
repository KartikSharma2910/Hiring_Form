import {
  Box,
  FormControl,
  FormControlProps,
  FormHelperText,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import { Controller, FieldErrors, FieldValues } from "react-hook-form";
import View from "../View";
import styles from "./styles";

type DropDownProps = FormControlProps &
  SelectProps &
  FieldValues & {
    label: string;
    errors: FieldErrors;
    veiew?: boolean;
    options?: {
      label: string;
      value: string;
    }[];
  };

const Dropdown = ({
  name,
  control,
  rules,
  label,
  fullWidth = true,
  errors,
  variant = "standard",
  view,
  options,
  ...rest
}: DropDownProps) => {
  const getError = (name: any, errors: FieldErrors) => {
    if (!Object.keys(errors).length) return undefined;

    return name
      .split(".")
      .map((item: any) => item.replaceAll("[", "").replaceAll("]", ""))
      .reduce((prev: any, curr: any) => (prev ? prev[curr] : prev), errors);
  };

  const error = getError(name as string, errors);

  return (
    <Controller
      name={name as string}
      control={control}
      rules={rules}
      render={({ field }) => (
        <FormControl fullWidth={fullWidth} variant={variant}>
          {view ? (
            <View label={label} value={field.value} />
          ) : (
            <>
              <InputLabel shrink sx={styles.label}>
                {label}
              </InputLabel>
              <Select
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={!!error}
                MenuProps={{
                  PaperProps: {
                    sx: styles.paper,
                  },
                  MenuListProps: {
                    sx: styles.menu,
                  },
                }}
                input={<InputBase sx={styles.input} />}
              >
                {options?.map((item, idx) => {
                  return (
                    <MenuItem
                      id={item.label}
                      value={item.label}
                      key={idx}
                      sx={styles.menuItem}
                    >
                      <Box sx={styles.text}>{item.label}</Box>
                    </MenuItem>
                  );
                })}
              </Select>
              {error && (
                <FormHelperText sx={styles.helperText}>
                  {error.message}
                </FormHelperText>
              )}
            </>
          )}
        </FormControl>
      )}
      {...rest}
    />
  );
};

export default Dropdown;
