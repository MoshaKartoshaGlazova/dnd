import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ManualEdit from "../components/ManualEdit";
import CharacterView from "../components/characterList/CharacterView";
import { Box, Tab, Tabs } from "@mui/material";
import Compendium from "../components/compendium";

export const Main = () => {
  const [value, setValue] = React.useState(0);

  const [state, setState] = useState({
    alignment_view: "good",
    alignment_behavior: "lawful",
    aligment: false,
    states: {
      STR: "10",
      DEX: "10",
      CON: "10",
      INT: "10",
      WIS: "10",
      CHA: "10",
    },
    saves: [],
    hover: false,
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "#AAAAAA",
      }}
    >
      <Grid
        item
        sx={{
          width: "100%",
          height: 100,
          backgroundColor: "#AEBBC8",
        }}
      ></Grid>

      <Grid
        item
        xs={6}
        sx={{ marginLeft: 4, marginTop: 2, backgroundColor: "#F3F9FF" }}
      >
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
          {value === 1 && <Compendium state={state} setState={setState} />}
        </Box>
      </Grid>

      <Grid
        item
        xs={5}
        sx={{ marginLeft: 4, marginTop: 2, backgroundColor: "#FFFFFF" }}
      >
        <Box>{value === 0 && <CharacterView state={state} />}</Box>
      </Grid>
    </Grid>
  );
};
