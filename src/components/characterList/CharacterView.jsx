import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, TextField, Typography } from "@mui/material";
import CharacterPoints from "./CharacherPoints";

const CharacterView = ({ state }) => {
  console.log(state);
  const CheckAligment = () => {
    if (state.alignment != false) {
      if (
        state.alignment_view == "neutral" &&
        state.alignment_behavior == "neutral"
      ) {
        return "true neutral";
      } else {
        return state.alignment_behavior + " " + state.alignment_view;
      }
    } else {
      return "unaligned";
    }
  };
  const isAlViewNull = () => {
    return "alignment_view" in state;
  };

  return (
    <>
      <Grid
        sx={{
          //flexGrow: 1,
          marginBottom: 2,
          borderBottomStyle: "solid",
          borderImage:
            "linear-gradient(90deg, #2B6383 45.82%, rgba(43, 99, 131, 0) 100%) 1",
        }}
        container
        justifyContent="left"
      >
        <Grid item xs={12} sx={{ marginTop: 5 }}>
          <Typography variant="h4" sx={{ color: "#2B6383" }} fontWeight="bold">
            {state?.name ?? "Name"}
          </Typography>
        </Grid>
        <Grid item sx={{}}>
          <Typography
            variant="monsterDescription"
            //sx={{ color: "#2B6383" }}
          >
            {state?.size ?? "Small"} {state?.type ?? "Humanoid"}
            {state?.subType ? "(" + state.subType + ")" : ""} {", "}
            {CheckAligment()}
          </Typography>
        </Grid>
      </Grid>

      <Grid sx={{ margin: 0 }}>
        <CharacterPoints state={state} />
      </Grid>
    </>
  );
};

export default CharacterView;
