import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddOutlineIcon from "@mui/icons-material/AddOutlined";
import React from "react";

const Languages = ({ state, onChange }) => {
  return (
    <Grid container rowSpacing={2} columnSpacing={2}>
      <Grid item>
        <FormControlLabel
          label="Can speak"
          control={
            <Checkbox
              checked={state.canSpeak}
              name="canSpeak"
              onChange={({ target: { name }, checked: value }) =>
                onChange({ name, value })
              }
            />
          }
        />
        <TextField
          label="телепатия"
          size="small"
          type="number"
          variant="outlined"
          InputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
            endAdornment: <InputAdornment position="end">feet</InputAdornment>,
          }}
          name="телепатия"
          onChange={(event) => onChange(event.target)}
        />
      </Grid>
      <Grid item>
        <FormControl item sx={{ minWidth: 180 }} size="small">
          <InputLabel id="Type-label">Type</InputLabel>
          <Select
            defaultValue=""
            name="languageType"
            label="Type-label"
            onChange={(event) => onChange(event.target)}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="custom">Custom</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {state.languageType === "custom" && (
        <>
          <Grid item>
            <IconButton
              size="small"
              onClick={() =>
                onChange({
                  name: "languages",
                  value: [...(state.languages ?? []), ""],
                })
              }
            >
              <AddOutlineIcon />
            </IconButton>
          </Grid>
          {state.languages?.map((language, index) => (
            <Grid key={language + index} container alignContent="space-between">
              <Grid item>
                <TextField
                  sx={{ width: 150 }}
                  variant="outlined"
                  size="small"
                  value={language}
                  onChange={({ target: { value } }) =>
                    onChange({
                      name: "languages",
                      value: state.languages.map((x, i) =>
                        i === index ? value : x
                      ),
                    })
                  }
                />
              </Grid>
              <Grid item>
                <IconButton
                  size="small"
                  onClick={() =>
                    onChange({
                      name: "languages",
                      value: state.languages.filter((x, i) => i !== index),
                    })
                  }
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
};

export default Languages;
