import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

export default function CustomCheckBox() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const [checked, setChecked] = React.useState(true);

  return (
    <div>
      <Checkbox checked={checked} onChange={handleChange} defaultChecked />
    </div>
  );
}
