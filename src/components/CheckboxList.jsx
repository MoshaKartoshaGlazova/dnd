import { Checkbox, FormControlLabel } from "@mui/material";
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
      state[listName] = [item];
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
  return array.map((item) =>{
    return BaseComponent ? (
      <BaseComponent key={item} label={item} 
      listName={listName}
      onChange={onChange}
      state={state}  />
    ) : (
      <FormControlLabel
        key={item}
        sx={{ minWidth: 165 }}
        control={
          <Checkbox
            checked={state[listName]?.includes(item)??false}
            onChange={() => {
              onCheck(item);
            }}
          />
        }
        label={item}
        disabled={elementDisabled && elementDisabled(item)}
      />
    )
      });
};

export default CheckboxList;

