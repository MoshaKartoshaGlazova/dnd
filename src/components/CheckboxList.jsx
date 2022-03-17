import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const CheckboxList = ({ array, BaseComponent }) => {
  return array.map((item) =>
    BaseComponent ? (
      <BaseComponent key={item} label={item} />
    ) : (
      <FormControlLabel
        key={item}
        sx={{ minWidth: 165 }}
        control={<Checkbox />}
        label={item}
      />
    )
  );
};

export default CheckboxList;
