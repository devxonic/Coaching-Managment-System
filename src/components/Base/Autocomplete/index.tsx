import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboInput(props: any) {
  const { styles, label, size, option, onChange, value } = props;
  return (
    <Autocomplete
      size={size}
      //   disablePortal
      value={value}
      id="combo-box-demo"
      options={option}
      sx={styles}
      onChange={(event, value) => {
        onChange(value);
      }}
      renderInput={(params) => {
        return <TextField {...params} label={label} />;
      }}
    />
  );
}
