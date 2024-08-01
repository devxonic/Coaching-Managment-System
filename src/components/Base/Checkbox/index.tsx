import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Checkbox() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth size="small">
        <InputLabel className="h-8" id="demo-simple-select-label">
          Select Status
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select Status"
          onChange={handleChange}
          sx={{ height: 40 }}
        >
          <MenuItem value={"Present"}>Present</MenuItem>
          <MenuItem value={"Absent"}>Absent</MenuItem>
          <MenuItem value={"Leave"}>Leave</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
