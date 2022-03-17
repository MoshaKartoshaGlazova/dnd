import React from 'react'
import Grid from "@mui/material/Grid";
import { Card, Checkbox, FormControlLabel } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";

const States = () => {
  return (
    <>
    <Grid
    sx={{ marginTop: 1 }}
    container
    justifyContent="center"
    spacing={2}
  >
    {["STR", "DEX", "CON"].map((item) => (
      <Grid item key={item}>
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
          />
          <FormControlLabel
            sx={{ margin: 0 }}
            control={<Checkbox />}
            label="Save"
          />
        </Card>
      </Grid>
    ))}
  </Grid>
  <Grid  sx={{ marginTop: 1 }} container justifyContent="center" spacing={2}>
    {["INT", "WIS", "CHA"].map((item) => (
      <Grid item key={item}>
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
          />
          <FormControlLabel
            sx={{ margin: 0 }}
            control={<Checkbox />}
            label="Save"
          />
        </Card>
      </Grid>
    ))}
  </Grid>
    </>
  )
}

export default States