import { Chip } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import React from "react";

const states = [
  { value: undefined, icon: <CheckBoxOutlineBlankIcon /> },
  { value: "one", icon: <DoneIcon /> },
  { value: "two", icon: <DoneAllIcon /> },
];

const Skill = ({ label, listName, onChange, state: currentState }) => {
  const currentValue = currentState[listName];
  const state =
    currentValue && currentValue[label]
      ? states.find((x) => x.value === currentValue[label])
      : states[0];
  const onClick = () => {
    const newStateIndex = (states.indexOf(state) + 1) % states.length;
    const newState = {
      ...currentValue,
      [label]: states[newStateIndex].value,
    };
    if(!newState[label]) delete newState[label];
    onChange({ name: listName, value: newState });
  };
  return (
    <Chip
      variant="outlined"
      sx={{
        margin: 0.5,
        minWidth: 165,
        justifyContent: "left",
        border: "hidden",
      }}
      icon={state.icon}
      clickable
      color={state.value ? "primary" : "default"}
      onClick={onClick}
      label={label}
    />
  );
};

export default Skill;
