import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const Sense = ({ label, onChange }) => (
  <TextField
    sx={{ width: 150 }}
    label={label}
    variant="outlined"
    InputProps={{
      inputMode: "numeric",
      pattern: "[0-9]*",
      endAdornment: <InputAdornment position="end">feet</InputAdornment>,
    }}
    name={label.toLowerCase()}
    onChange={(event) => onChange(event.target)}
  />
);

export default Sense;
