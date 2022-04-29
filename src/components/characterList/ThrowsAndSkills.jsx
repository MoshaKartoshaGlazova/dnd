import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, TextField, Typography } from "@mui/material";
import { ControlPointDuplicate, StopSharp } from "@material-ui/icons";
import { skills } from "../../Constants";

const ThrowsAndSkills = ({ state }) => {
  const getSortedSkills = () => {
    if ("skills" in state) {
      const sortSkills = Object.keys(state.skills)
        .filter((key) => {
          return state.skills[key] != "no";
        })
        .sort()
        .reduce((res, key) => ((res[key] = state.skills[key]), res), {});
      return sortSkills;
    } else {
      const sortSkills = {};
      return sortSkills;
    }
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
          <Typography variant="label">{"Skills"}</Typography>
          {Object.keys(getSortedSkills()).map((item) =>
            InputSkill(item, state)
          )}
        </Typography>
      </Grid>
    </Grid>
  );
};

const InputSkill = (item, state) => {
  const calculateModifier = (monster_char) => {
    return Math.floor((monster_char - 10) / 2);
  };

  const countModifier = () => {
    if (state.skills[item] == "expert") {
      const modifier =
        calculateModifier(state.states[findSkillStat()]) +
        (state?.profBonus ?? 0) * 2;
      console.log((state?.profBonus ?? 0) * 2);
      if (modifier >= 0) {
        return "+" + modifier;
      } else {
        return "-" + modifier;
      }
    } else {
      const modifier =
        calculateModifier(state.states[findSkillStat()]) +
        (state?.profBonus ?? 0);
      if (modifier >= 0) {
        return "+" + modifier;
      } else {
        return "-" + modifier;
      }
    }
  };

  const findSkillStat = () => {
    return skills.find((element) => element.name == item).stat;
  };
  return <Typography key={item}>{item + countModifier() + " "}</Typography>;
};

export default ThrowsAndSkills;
