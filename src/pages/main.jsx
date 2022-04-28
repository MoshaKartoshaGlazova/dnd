import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ManualEdit from "../components/ManualEdit";
import CharacterView from "../components/characterList/CharacterView";
import { Box, Tab, Tabs } from "@mui/material";

export const Main = () => {
  const [value, setValue] = React.useState(0);

  const [state, setState] = useState({
    alignment_view: "good",
    alignment_behavior: "lawful",
    aligment: false,
  });

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
        <Box>
          {value === 0 && <ManualEdit state={state} setState={setState} />}
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box>{value === 0 && <CharacterView state={state} />}</Box>
      </Grid>
    </Grid>
  );
};
