import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

const Input = ({ control, name, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label="First Name"
          variant="filled"
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
          {...rest}
        />
      )}
    />
  );
};

Input.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
