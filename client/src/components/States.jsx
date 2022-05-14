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
      <Grid
        sx={{
          marginBottom: 2,
          borderBottomStyle: "solid",
          borderImage:
            "linear-gradient(90deg, #2B6383 45.82%, rgba(43, 99, 131, 0) 100%) 1",
        }}
        container
        direction="row"
        justifyContent="space-between"
      >
        <Grid
          sx={{
            margin: 0,
            marginBottom: 2,
          }}
          container
          justifyContent="center"
          spacing={1}
        >
          {states.map((item) => State(item, state, onInput, onSave))}
        </Grid>
      </Grid>
    </>
  );
};

export default States;

const State = (item, state, onInput, onSave) => {
  return (
    <>
      <Grid item key={item}>
        <Card sx={{ width: 120, height: 64 }}>
          <InputLabel
            sx={{
              paddingLeft: 1,
              fontWeight: "bold",
              color: "#2B6383",
            }}
          >
            {item}
          </InputLabel>
          <input
            style={{
              marginLeft: 8,
              marginTop: -4,
              width: 32,
              height: 32,
              fontSize: "larger",
              textAlign: "center",
            }}
            name={item}
            value={state.states?.[item] ?? "10"}
            onChange={({ target }) => onInput(target)}
          />
          <FormControlLabel
            sx={{
              marginBottom: 0,
              marginLeft: -1,
              marginTop: -2,
              marginRight: 0,
            }}
            control={
              <Checkbox
                checked={state.saves?.includes(item) ?? false}
                name={item}
                onChange={({ target }) => onSave(target)}
              />
            }
            label="Save"
          />
        </Card>
      </Grid>
    </>
  );
};
