import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CharacterPoints from "./CharacterPoints";
import CharacterCards from "./CharacterCards";
import ThrowsAndSkills from "./ThrowsAndSkills";
import ActionsView from "./ActionsView";
import { actionButtonsInit } from "../../Constants";
import { toCamelCase, toCapitalCase } from "../../utils";

const CharacterView = ({ state }) => {
  console.log(state);
  const CheckAligment = () => {
    if (state.alignment !== false) {
      if (
        state.alignment_view === "neutral" &&
        state.alignment_behavior === "neutral"
      ) {
        return "true neutral";
      } else {
        return state.alignment_behavior + " " + state.alignment_view;
      }
    } else {
      return "unaligned";
    }
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
            {state?.subType ? " (" + state.subType + ")" : ""} {", "}
            {CheckAligment()}
          </Typography>
        </Grid>
      </Grid>

      <Grid sx={{ margin: 0 }}>
        <CharacterPoints state={state} />
        <CharacterCards state={state} />
        <ThrowsAndSkills state={state} />
        {actionButtonsInit.map(({ title }) => (
          <div key={title}>
            {state[toCamelCase(title)] && (
              <>
                <Typography
                  variant="h6"
                  color="primary"
                  fontWeight="bold"
                  sx={{
                    borderBottomStyle: "solid",
                
                    borderImage:
                      "linear-gradient(90deg, #2B6383 45.82%, rgba(43, 99, 131, 0) 100%) 1",
                  }}
                >
                  {toCapitalCase(title)}
                </Typography>
                <ActionsView actions={state[toCamelCase(title)]} />
              </>
            )}
          </div>
        ))}
      </Grid>
    </>
  );
};

export default CharacterView;
