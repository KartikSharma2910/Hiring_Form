import { FormControlProps, Switch, SwitchProps } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";

type ToggleProps = FieldValues & FormControlProps & {};

const Toggle = ({ name, control }: ToggleProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Switch onChange={field.onChange} checked={field.value} />
      )}
    />
  );
};

export default Toggle;
