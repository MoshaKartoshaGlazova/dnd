import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import { challengeRating, size, type} from "../Constants";
import BottomTabs from "./BottomTabs";
import States from "./States";
import Actions from "./actions";

const ManualEdit = () => {
  const [state, setState] = useState({});
  const onChange = ({ name, value }) => {
    console.log(state, name, value)
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <Grid
        sx={{ flexGrow: 1, marginTop: 1 }}
        container
        justifyContent="center"
        spacing={2}
      >
        <Grid item >
          <TextField
            sx={{ maxWidth: 180,
              minWidth: 180 }}
            label="Name"
            variant="outlined"
            size="small"
            value={state.name}
            name="Name"
            onChange={(event) => onChange(event.target)}
          />
        </Grid>
        <Grid item >
          <FormControl item sx={{ minWidth: 180 }} size="small">
            <InputLabel id="challenge-rating-label">
              Challenge rating
            </InputLabel>
            <Select
              defaultValue=""
              name="challengeRating"
              label="challenge-rating-label"
              onChange={(event) => onChange(event.target)}
            >
              {challengeRating.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
            <Select defaultValue="" name="type" label="Type-label"
              onChange={(event) => onChange(event.target)}>
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
        sx={{ flexGrow: 1, marginTop: 1 }}
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
            name="armor"
            onChange={(event) => onChange(event.target)}
          />
        </Grid>
        <Grid item>
          <FormControl item sx={{ minWidth: 180 }} size="small">
            <InputLabel id="Armor-Type-label">Armor Type</InputLabel>
            <Select defaultValue="" label="Armo-Type-label" name="armorType"
              onChange={(event) => onChange(event.target)}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            sx={{ width: 180 }}
            label="Hit Dice Number"
            variant="outlined"
            size="small"
            name="hitDiceNumber"
            onChange={(event) => onChange(event.target)}
          />
        </Grid>
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
