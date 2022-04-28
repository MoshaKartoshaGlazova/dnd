import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, TextField, Typography } from "@mui/material";

const CharacterView = ({ state }) => {
  return (
    <Grid
      sx={{
        flexGrow: 1,
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
          variant="h7"
          //sx={{ color: "#2B6383" }}
          fontWeight="light"
          fontStyle="italic"
        >
          {state?.size ?? "Small"} {state?.type ?? "Humanoid"}{" "}
          {state?.subType ? "(" + state.subType + ")" : ""}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CharacterView;
