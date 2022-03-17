import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import { size, type } from "../Constants";
import BottomTabs from "./BottomTabs";
import States from "./States";

const ManualEdit = () => {
  return (
    <>
      <Grid
        sx={{ flexGrow: 1, marginTop: 1 }}
        container
        justifyContent="center"
        spacing={2}
      >
        <Grid item xs={3}>
          <TextField
            sx={{ minWidth: 180 }}
            label="Name"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl item sx={{ minWidth: 180 }} size="small">
            <InputLabel id="challenge-rating-label">
              Challenge rating
            </InputLabel>
            <Select defaultValue="" label="challenge-rating-label">
              {[1 / 8, 1 / 4, 1 / 2, ...new Array(31).keys()]
                .sort()
                .map((item) => (
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
            <Select defaultValue="" label="size-label" size="small">
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
            <Select defaultValue="" label="Type-label">
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
          />
        </Grid>
        <Grid item>
          <FormControl item sx={{ minWidth: 180 }} size="small">
            <InputLabel id="Armor-Type-label">Armor Type</InputLabel>
            <Select defaultValue="" label="Armo-Type-label">
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
          />
        </Grid>
      </Grid>
      <States />

      <Grid sx={{ marginTop: 1 }}>
        <BottomTabs />
      </Grid>
    </>
  );
};

export default ManualEdit;
