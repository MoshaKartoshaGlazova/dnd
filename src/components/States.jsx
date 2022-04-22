import React from "react";
import Grid from "@mui/material/Grid";
import { Card, Checkbox, FormControlLabel } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { states } from "../Constants";

const States = ({ state, onChange }) => {
  const onSave = ({ name, value }) => {
    if (state.saves?.includes(name)) {
      onChange({ name: "saves", value: state.saves.filter((x) => x !== name) });
    } else {
      onChange({ name: "saves", value: [...(state.saves ?? []), name] });
    }
  };
  const onInput = ({ name, value }) => {
    onChange({
      name: "states",
      value: { ...(state["states"] ?? {}), [name]: value },
    });
  };
  return (
    <>
      <Grid sx={{ marginTop: 1 }} container justifyContent="center" spacing={2}>
        {states.slice(0, 3).map((item) => (
          State(item, state, onInput, onSave)
        ))}
      </Grid>
      <Grid sx={{ marginTop: 1 }} container justifyContent="center" spacing={2}>
        {states.slice(3, 6).map((item) => (
          State(item, state, onInput, onSave)
        ))}
      </Grid>
    </>
  );
};

export default States;

const State =(item, state, onInput, onSave) => {
  return <Grid item key={item}>
    <Card sx={{ width: 150, height: 75 }}>
      <InputLabel
        sx={{
          paddingLeft: 1.5,
        }}
      >
        {item}
      </InputLabel>
      <input
        style={{
          marginLeft: 8,
          width: 36,
          height: 36,
          fontSize: "larger",
        }}
        name={item}
        value={state.states?.[item] ?? ""}
        onChange={({ target }) => onInput(target)} />
      <FormControlLabel
        sx={{ margin: 0 }}
        control={<Checkbox
          checked={state.saves?.includes(item) ?? false}
          name={item}
          onChange={({ target }) => onSave(target)} />}
        label="Save" />
    </Card>
  </Grid>;
}

