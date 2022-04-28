import React from "react";
import { Grid, Slider } from "@mui/material";

import { alignment_view, alignment_behavior } from "../Constants";

const Alignment = ({ state, onChange }) => {
  const onAlignmentViewChange = ({ name, value }) => {
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
          {state.alignment && (
            <>
              <Slider
                min={0}
                max={20}
                step={10}
                track={false}
                marks={alignment_view}
                name="alignment_view"
                valueLabelDisplay="off"
                onChange={({ target }) => onAlignmentViewChange(target)}
              />
              <Slider
                track={false}
                min={0}
                max={20}
                step={10}
                marks={alignment_behavior}
                name="alignment_behavior"
                valueLabelDisplay="off"
                onChange={({ target }) => onAlignmentBehaviorChange(target)}
              />
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Alignment;
