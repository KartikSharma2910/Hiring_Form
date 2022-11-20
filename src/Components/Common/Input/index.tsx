import {
  FormControl,
  FormControlProps,
  FormHelperText,
  InputBase,
  InputBaseProps,
  InputLabel,
} from "@mui/material";
import { Controller, FieldErrors, FieldValues } from "react-hook-form";
import View from "../View";
import styles from "./styles";

type InputProps = FormControlProps &
  InputBaseProps &
  FieldValues & {
    label: string;
    errors: FieldErrors;
    view?: boolean;
  };

const Input = ({
  name,
  control,
  rules,
  label,
  fullWidth = true,
  errors,
  variant = "standard",
  view,
  ...rest
}: InputProps) => {
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
              <InputBase
                value={field.value}
                onChange={field.onChange}
                error={!!error}
                sx={styles.input}
              />
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

export default Input;
