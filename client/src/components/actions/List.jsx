import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Edit from "./Edit";
import View from "./View";
import { replacer, toCamelCase, toCapitalCase } from "../../utils";

const List = ({ state, onChange, title, hasAttack, isLegendary }) => {
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
  const transformDescription = replacer(state);
  return (
    <>
      <Grid
        sx={{
          borderBottomStyle: "solid",
          borderImage:
            "linear-gradient(90deg, #2B6383 45.82%, rgba(43, 99, 131, 0) 100%) 1",
        }}
        container
        direction="row"
        justifyContent="space-between"
      >
        <Grid item>
          <Typography variant="h6" color="primary" fontWeight="bold">
            {toCapitalCase(title)}
          </Typography>
        </Grid>
        <Grid item>
          <Button sx={{ marginLeft: 1 }} onClick={onAdd}>
            Add
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        sx={{ marginTop: 2 }}
      >
        {isLegendary && (
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
                state={state}
                action={action}
                onEdit={onEdit(index)}
                switchView={switchView(index)}
                hasAttack={hasAttack}
                isLegendary={isLegendary}
              />
            );
          else
            return (
              <View
                action={{...action, description: transformDescription(action.description)}}
                onDelete={onDelete(index)}
                switchView={switchView(index)}
              />
            );
        })}
      </Grid>
    </>
  );
};

export default List;
