import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import List from "./List";

const actionButtonsInit = [
  {
    title: "SPECIAL TRAITS",
  },
  {
    title: "ACTIONS",
  },
  {
    title: "BONUS ACTION",
  },
  {
    title: "REACTIONS",
  },
  {
    title: "LEGENDARY ACTIONS",
  },
  {
    title: "LIAR ACTIONS",
  },
];

const Actions = ({ state, onChange }) => {
  const [actions, setActions] = useState(actionButtonsInit);
  return (
    <>
      <Grid container spacing={1}>
        {actions.map(({ title, active }, index) => (
          <Button
            key={title}
            size="small"
            sx={{ marginLeft: 0.25 }}
            variant={active ? "contained" : "outlined"}
            onClick={() =>
              setActions(
                actions.map((x, i) =>
                  i === index ? { ...x, active: !active } : x
                )
              )
            }
          >
            {title}
          </Button>
        ))}
      </Grid>
      <Grid container sx={{ marginBottom: 1 }}>
        {actions.map(
          ({ title, active }, index) =>
            active && (
              <Grid item xs={6} sx={{ padding: 1 }} key={title}>
                <List title={title} state={state} onChange={onChange} />
              </Grid>
            )
        )}
      </Grid>
    </>
  );
};

export default Actions;
