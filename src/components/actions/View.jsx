import { Grid, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React from "react";

const View = ({ action, switchView, onDelete }) => {
  const { name, onHit, type, reach, target, description } = action;
  return (
    <Grid item container direction="column" justifyContent="flex-start" marginTop={2}>
      <Grid item container direction="row" justifyContent="space-between" >
          <Grid margin="auto 0" item><Typography fontWeight="bold">{name}</Typography></Grid>
        <Grid item>
        <IconButton size="small"  onClick={switchView}>
          <EditIcon />
        </IconButton>
        <IconButton size="small"  onClick={onDelete}>
          <DeleteOutlineIcon />
        </IconButton>
        </Grid>
      </Grid>
      <Grid item>
        <Typography>
          {onHit ? <><Typography component="span" fontStyle="oblique">On hit:</Typography> {onHit} </> : ""}
          {type ? <><Typography component="span" fontStyle="oblique">Type:</Typography> {type} </> : ""}
          {reach ? <><Typography component="span" fontStyle="oblique">Reach:</Typography> {reach} </> : ""}
          {target ? <><Typography component="span" fontStyle="oblique">Target:</Typography> {target}</> : ""}
        </Typography>
      </Grid>
      <Grid item>
        <Typography>{description}</Typography>
      </Grid>
    </Grid>
  );
};

export default View;
