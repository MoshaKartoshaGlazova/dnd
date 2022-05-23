import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ManualEdit from "../components/ManualEdit";
import CharacterView from "../components/characterList/CharacterView";
import { Box, Button, Tab, Tabs } from "@mui/material";
import Compendium from "../components/compendium";
import html2canvas from "html2canvas";

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

  const onSave = () => {
    html2canvas(document.querySelector("#png")).then((canvas) => {
      const image = canvas.toDataURL("image/png", 1.0);
      const fakeLink = window.document.createElement("a");
      fakeLink.style = "display:none;";
      fakeLink.download = state?.name ?? "Name";

      fakeLink.href = image;

      document.body.appendChild(fakeLink);
      fakeLink.click();
      document.body.removeChild(fakeLink);

      fakeLink.remove();
    });
  };
  return (
    <Grid
      container
      alignContent="flex-start"
      sx={{
        backgroundColor: "#AAAAAA",
        minHeight: "calc(100vh)",
        marginTop: 0,
      }}
    >
      <Grid
        item
        sx={{
          height: 100,
          backgroundColor: "#AEBBC8",
        }}
        xs={12}
      ></Grid>
      <Grid
        item
        xs={12}
        container
        marginTop={2}
        spacing={2}
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <Grid item xs={6} sx={{ backgroundColor: "#F3F9FF" }}>
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

        <Grid item xs={5} sx={{ backgroundColor: "#FFFFFF" }}>
          <Box id="png">
            {" "}
            <CharacterView state={state} />
          </Box>
          <Button onClick={onSave}>Save</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
