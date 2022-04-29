import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, TextField, Typography } from "@mui/material";
import { StopSharp } from "@material-ui/icons";

const CharacterPoints = ({ state }) => {
  const calculateHitPoints = () => {
    if (isSizeNull() || isDiceNumNull()) {
      return "0";
    } else {
      switch (state.size) {
        case "Tiny":
          return multiplication(2.5);
        case "Small":
          return multiplication(3.5);
        case "Medium":
          return multiplication(4.5);
        case "Large":
          return multiplication(5.5);
        case "Huge":
          return multiplication(6.5);
        case "Gargantuan":
          return multiplication(10.5);
      }
    }
  };
  const multiplication = (mod) => {
    return Math.floor(
      (mod + calculateModifier(state.states.CON)) * state.hitDiceNumber
    );
  };

  const calculateModifier = (monster_char) => {
    return Math.floor((monster_char - 10) / 2);
  };

  const isSizeNull = () => {
    return !("size" in state);
  };
  const isDiceNumNull = () => {
    return !("hitDiceNumber" in state);
  };

  const printFormulaHipPoints = () => {
    if (isSizeNull() || isDiceNumNull()) {
      return "no formula";
    }
    switch (state.size) {
      case "Tiny":
        return (
          state.hitDiceNumber +
          "d" +
          4 +
          " + " +
          calculateModifier(state.states.CON) * state.hitDiceNumber
        );
      case "Small":
        return (
          state.hitDiceNumber +
          "d" +
          6 +
          " + " +
          calculateModifier(state.states.CON) * state.hitDiceNumber
        );
      case "Medium":
        return (
          state.hitDiceNumber +
          "d" +
          8 +
          " + " +
          calculateModifier(state.states.CON) * state.hitDiceNumber
        );
      case "Large":
        return (
          state.hitDiceNumber +
          "d" +
          10 +
          " + " +
          calculateModifier(state.states.CON) * state.hitDiceNumber
        );
      case "Huge":
        return (
          state.hitDiceNumber +
          "d" +
          12 +
          " + " +
          calculateModifier(state.states.CON) * state.hitDiceNumber
        );
      case "Gargantuan":
        return (
          state.hitDiceNumber +
          "d" +
          20 +
          " + " +
          calculateModifier(state.states.CON) * state.hitDiceNumber
        );
    }
  };
  const printSpeed = () => {
    let speedString = "";

    if ("walk" in state && state.walk != "") {
      speedString = speedString + state.walk + "ft.";
    }
    if ("burrow" in state && state.burrow != "") {
      speedString = speedString + ", burrow " + state.burrow + "ft.";
    }
    if ("climb" in state && state.climb != "") {
      speedString = speedString + ", climb " + state.climb + "ft.";
    }
    if ("fly" in state && state.fly != "") {
      speedString = speedString + ", fly " + state.fly + "ft.";
    }
    if ("swim" in state && state.swim != "") {
      speedString = speedString + ", swim " + state.swim + "ft.";
    }
    return speedString;
  };
  return (
    <Grid
      sx={{
        flexGrow: 0,
        marginBottom: 1,

        borderBottomStyle: "solid",
        borderImage:
          "linear-gradient(90deg, #2B6383 45.82%, rgba(43, 99, 131, 0) 100%) 1",
      }}
      container
      justifyContent="left"
    >
      <Grid item xs={12}>
        <Typography variant="regular">
          <Typography variant="label">{"Armor class:"}</Typography>{" "}
          {state?.armor ?? " 0"}{" "}
          {state?.armorType ? "(" + state.armorType + " armor)" : ""}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="regular">
          <Typography variant="label">{"Hit Points:"}</Typography>{" "}
          {calculateHitPoints()} {"(" + printFormulaHipPoints() + ")"}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="regular">
          <Typography variant="label">{"Speed:"}</Typography> {printSpeed()}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CharacterPoints;
