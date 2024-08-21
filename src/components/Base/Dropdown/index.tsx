import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Dropdown(props: any) {
  let { value, onChange, data } = props;
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 100, width: 200 }}>
      <FormControl fullWidth size="small">
        <InputLabel className="h-8" id="demo-simple-select-label">
          Select Status
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Select Status"
          onChange={handleChange}
          sx={{ height: 40 }}
        >
          {data.map((value: any, index: number) => {
            return (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
