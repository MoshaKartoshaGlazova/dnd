import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { skills } from "../../Constants";

const ThrowsAndSkills = ({ state }) => {
  let sortedSkills = !state.skills
    ? undefined
    : Object.keys(state.skills)
        .filter((key) => state.skills[key] !== "no")
        .sort()
        .reduce((res, key) => ((res[key] = state.skills[key]), res), {});

  const calculateModifier = (monster_char) => {
    return (
      monster_char +
      "+" +
      (Math.floor((state.states[monster_char] - 10) / 2) +
        (state?.profBonus ?? 0))
    );
  };
  if (state.saves.length === 0 && !sortedSkills) return <></>;
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
      {state.saves.length > 0 && (
        <Grid item xs={12}>
          <Typography variant="regular">
            <Typography variant="label">{"Saving Trows: "}</Typography>
            {state.saves
              .sort()
              .map((item) => calculateModifier(item))
              .join(", ")}
          </Typography>
        </Grid>
      )}
      {sortedSkills && (
        <Grid item xs={12}>
          <Typography variant="regular">
            <Typography variant="label">{"Skills: "}</Typography>
            {Object.keys(sortedSkills)
              .map((item) => InputSkill(item, state))
              .join(", ")}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

const calculateModifier = (monster_char) => {
  return Math.floor((monster_char - 10) / 2);
};

const InputSkill = (item, state) => {
  const findSkillStat = () => {
    return skills.find((element) => element.name === item).stat;
  };

  const countModifier = () => {
    if (state.skills[item] === "expert") {
      const modifier =
        calculateModifier(state.states[findSkillStat()]) +
        (state?.profBonus ?? 0) * 2;
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

  return item + countModifier();
};

export default ThrowsAndSkills;
