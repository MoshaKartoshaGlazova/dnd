import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { states } from "../../Constants";

const CharacterCards = ({ state }) => {
  return (
    <>
      <Grid
        sx={{
          marginBottom: 2,
          borderBottomStyle: "solid",
          borderImage:
            "linear-gradient(90deg, #2B6383 45.82%, rgba(43, 99, 131, 0) 100%) 1",
        }}
        container
        direction="row"
        justifyContent="space-between"
      >
        <Grid
          sx={{
            margin: 0,
            marginBottom: 2,
          }}
          container
          justifyContent="center"
          spacing={1}
        >
          {states.map((item) => CharacterCard(item, state))}
        </Grid>
      </Grid>
    </>
  );
};

const CharacterCard = (item, state) => {
  const calculateModifier = (monster_char) => {
    return Math.floor((monster_char - 10) / 2);
  };
  return (
    <>
      <Grid
        sx={{ width: 100, height: 64, textAlign: "center" }}
        item
        container
        flexDirection="column"
        key={item}
      >
        <Grid>
          <Typography variant="label" sx={{ color: "#2B6383" }}>
            {item}
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="label">
            {state.states[item]}{" "}
            {"(" + calculateModifier(state.states[item]) + ")"}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CharacterCards;
