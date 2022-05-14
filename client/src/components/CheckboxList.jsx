import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";

const CheckboxList = ({
  array,
  BaseComponent,
  listName,
  onChange,
  state,
  elementDisabled,
}) => {
  const onCheck = (item) => {
    if (!state[listName]) {
      onChange({
        name: listName,
        value:[item],
      });
    } else {
      if (state[listName].includes(item))
        onChange({
          name: listName,
          value: state[listName].filter((element) => element !== item),
        });
      else
        onChange({
          name: listName,
          value: [...state[listName], item],
        });
    }
  };
  return array.map((item) => {
    return BaseComponent ? (
      <BaseComponent
        key={item}
        label={item}
        listName={listName}
        onChange={onChange}
        state={state}
      />
    ) : (
      <FormControlLabel
        sx={{ minWidth: 165, marginTop: -1 }}
        key={item}
        control={
          <Checkbox
            checked={state[listName]?.includes(item) ?? false}
            onChange={() => {
              onCheck(item);
            }}
          />
        }
        label={<Typography sx={{ fontSize: 13 }}> {item} </Typography>}
        disabled={elementDisabled && elementDisabled(item)}
      />
    );
  });
};

export default CheckboxList;
