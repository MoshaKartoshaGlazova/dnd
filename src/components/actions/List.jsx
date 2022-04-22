import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Edit from "./Edit";
import View from "./View";
import { toCamelCase, toCapitalCase } from "../../utils";

const List = ({ state, onChange, title }) => {
  const name = toCamelCase(title);
  const actions = state[name] ?? [];
  const onEdit = (newActionIndex) => (newAction) => {
    const value = actions.map((action, index) =>
      index === newActionIndex ? newAction : action
    );
    onChange({ name, value });
  };
  const onAdd = () => onChange({ name, value: [...actions, { edit: true }] });
  const switchView = (newActionIndex) => () => {
    const value = actions.map((action, index) =>
      index === newActionIndex ? { ...action, edit: !action.edit } : action
    );
    onChange({ name, value });
  };
  const onDelete = (newActionIndex) => () => {
    const value = actions.filter((action, index) => index !== newActionIndex);
    onChange({ name, value });
  };
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          borderBottomStyle: "solid",
          borderImage:
            "linear-gradient(90deg, #2B6383 45.82%, rgba(43, 99, 131, 0) 82.01%) 1",
        }}
        color="primary"
      >
        {toCapitalCase(title)}
      </Typography>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        sx={{ marginTop: 2 }}
      >
        {title === "LEGENDARY ACTIONs" && (
          <TextField
            variant="outlined"
            size="small"
            label="Legendary Actions Count"
            name="legendaryActionsCount"
            value={state.legendaryActionsCount}
            placeholder="0"
            onChange={(event) => onChange(event.target)}
          />
        )}
        {actions.map((action, index) => {
          if (action.edit)
            return (
              <Edit
                title={name}
                state={state}
                action={action}
                onEdit={onEdit(index)}
                switchView={switchView(index)}
              />
            );
          else
            return (
              <View
                action={action}
                onDelete={onDelete(index)}
                switchView={switchView(index)}
              />
            );
        })}
      </Grid>
      <Button onClick={onAdd}>Add</Button>
    </>
  );
};

export default List;
