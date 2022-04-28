import React from "react";
import { Box, Grid, Tab, Tabs, Slider } from "@mui/material";
import CheckboxList from "../components/CheckboxList";
import { conditions, damageType, languages, skills } from "../Constants";
import Skill from "./Skill";
import Sense from "./Sense";
import TabPanel, { a11yProps } from "./TabPanel";
import TextField from "@mui/material/TextField";
import {
  aligment_view as alignment_view,
  aligment_behavior as alignment_behavior,
} from "../Constants";

const Alignment = ({ state, onChange }) => {
  const onAligmantViewChange = ({ name, value }) => {
    onChange({
      name,
      value: alignment_view.filter((element) => element.value == value)[0]
        .label,
    });
  };

  const onAlignmentBehaviorChange = ({ name, value }) => {
    onChange({
      name,
      value: alignment_behavior.filter((element) => element.value == value)[0]
        .label,
    });
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
        <Grid minWidth={300}>
          {state.aligment && (
            <>
              <Slider
                min={0}
                max={20}
                step={10}
                track={false}
                marks={alignment_view}
                name="alignment_view"
                valueLabelDisplay="off"
                onChange={({ target }) => onAligmantViewChange(target)}
              />
              <Slider
                track={false}
                min={0}
                max={20}
                step={10}
                marks={alignment_behavior}
                name="alignment_behavior"
                valueLabelDisplay="off"
                onChange={({ target }) => onAligmantBehaviorChange(target)}
              />
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Aligment;
