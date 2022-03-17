import { Box, Button, Chip } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import React, { useState } from "react";
import ComposedIcon from "./ComposeIcon";

const states = [
  { value: null, icon: <CheckBoxOutlineBlankIcon /> },
  { value: "one", icon: <DoneIcon /> },
  { value: "two", icon: <DoneAllIcon /> },
];

const Icon = ({ extraIcon }) => (
  <ComposedIcon icon={<CheckBoxOutlineBlankIcon />} extraIcon={extraIcon} />
);

const Skill = ({ label }) => {
  const [state, setState] = useState(states[0]);
  const onClick = () => {
    const newStateIndex = (states.indexOf(state) + 1) % states.length;
    setState(states[newStateIndex]);
  };
  return (
    // <Button
    //   sx={{ margin: 0.5, minWidth: 165, }}
    //   onClick={onClick}
    //   variant="text"
    //   startIcon={state.icon}

    // >{label}</Button>
    <Chip variant="outlined"
    sx={{ margin: 0.5, minWidth: 165, justifyContent:"left", border: "hidden" }}
    icon={state.icon}
    clickable
    color={(state.value?"primary":"default")}
    onClick={onClick}
    label={label} />
  );
};

export default Skill;
