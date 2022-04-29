import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import { challengeRating, size, type } from "../Constants";
import BottomTabs from "./BottomTabs";
import States from "./States";
import Actions from "./actions";
import Alignment from "./Alignment";

const ManualEdit = ({ state, setState }) => {
  const onChange = ({ name, value }) => {
    setState({ ...state, [name]: value });
  };

  const onChangeRaiting = (event) => {
    onFinalStateChallengeChange(
      challengeRating.find((element) => element.value === event.target.value),
      event.target
    );
  };

  const onFinalStateChallengeChange = (
    { value2, exp, profBonus },
    { name, value }
  ) => {
    console.log(name);
    setState({ ...state, exp: exp, profBonus: profBonus, [name]: value });
  };
  
  return (
    <>
      <Grid
        sx={{
          flexGrow: 1,
          marginTop: 1,
        }}
        container
        justifyContent="center"
        spacing={2}
      >
        <Grid item>
          <TextField
            sx={{ maxWidth: 180, minWidth: 180 }}
            label="Name"
            variant="outlined"
            size="small"
            value={state.value}
            name="name"
            onChange={(event) => onChange(event.target)}
          />
        </Grid>
        <Grid item>
          <FormControl item sx={{ minWidth: 180 }} size="small">
            <InputLabel id="challenge-rating-label">
              Challenge rating
            </InputLabel>
            <Select
              defaultValue=""
              name="challengeRating"
              label="challenge-rating-label"
              onChange={(event) => onChangeRaiting(event)}
            >
              {challengeRating.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                name="alignment"
                checked={state?.alignment ?? false}
                onChange={() =>
                  onChange({ name: "alignment", value: !state.alignment })
                }
              />
            }
            label="Alignment"
          />
        </Grid>
      </Grid>
      <Grid
        sx={{ flexGrow: 1, marginTop: 1 }}
        container
        justifyContent="center"
        spacing={2}
      >
        <Grid item>
          <FormControl item sx={{ minWidth: 180 }} size="small">
            <InputLabel id="size-label">Size</InputLabel>
            <Select
              defaultValue=""
              name="size"
              label="size-label"
              size="small"
              onChange={(event) => onChange(event.target)}
            >
              {size.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl item sx={{ minWidth: 180 }} size="small">
            <InputLabel id="Type-label">Type</InputLabel>
            <Select
              defaultValue=""
              name="type"
              label="Type-label"
              onChange={(event) => onChange(event.target)}
            >
              {type.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            sx={{ width: 180 }}
            label="Subtype"
            variant="outlined"
            size="small"
            name="subType"
            onChange={(event) => onChange(event.target)}
          />
        </Grid>
      </Grid>
      <Grid
        sx={{
          flexGrow: 1,
          marginTop: 1,
          marginBottom: 2,
        }}
        container
        justifyContent="center"
        spacing={2}
      >
        <Grid item>
          <TextField
            sx={{ width: 180 }}
            label="Armor"
            variant="outlined"
            size="small"
            type="number"
            name="armor"
            onChange={(event) => onChange(event.target)}
          />
        </Grid>
        <Grid item>
          <FormControl item sx={{ minWidth: 180 }} size="small">
            <InputLabel id="Armor-Type-label">Armor Type</InputLabel>
            <Select
              defaultValue=""
              label="Armo-Type-label"
              name="armorType"
              onChange={(event) => onChange(event.target)}
            >
              <MenuItem value="Custom">Custom</MenuItem>
              <MenuItem value="Natural">Natural</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            sx={{ width: 180 }}
            label="Hit Dice Number"
            variant="outlined"
            size="small"
            type="number"
            name="hitDiceNumber"
            onChange={(event) => onChange(event.target)}
          />
        </Grid>
      </Grid>
      <Grid sx={{ margin: 1 }}>
        <Alignment onChange={onChange} state={state} />
      </Grid>

      <Grid
        sx={{
          marginBottom: 2,
          borderBottomStyle: "solid",
          borderImage:
            "linear-gradient(90deg, #2B6383 45.82%, rgba(43, 99, 131, 0) 100%) 1",
        }}
        item
      >
        {" "}
      </Grid>
      <States state={state} onChange={onChange} />

      <Grid sx={{ marginTop: 1 }}>
        <BottomTabs onChange={onChange} currentState={state} />
      </Grid>

      <Grid sx={{ margin: 1 }}>
        <Actions onChange={onChange} state={state} />
      </Grid>
    </>
  );
};

export default ManualEdit;
