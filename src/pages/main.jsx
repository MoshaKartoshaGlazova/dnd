import React from "react";
import Grid from "@mui/material/Grid";
import ManualEdit from "../components/ManualEdit";
import { Box, Tab, Tabs } from "@mui/material";

export const Main = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Generate" />
          <Tab label="Compendium" />
        </Tabs>
        <Box >
          {value === 0 && <ManualEdit />}
        </Box>
      </Grid>
    </Grid>
  );
};
