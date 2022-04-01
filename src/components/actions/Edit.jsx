import {
  Button,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";

const Edit = ({ action, onEdit, switchView }) => {
  const { name, onHit, type, reach, target, description } = action;
  const onChange = ({ name, value }) => onEdit({ ...action, [name]: value });
  return (
    <Grid item container justifyContent="center" spacing={2} marginTop={2}>
      <Grid item xs={12}>
        <TextField
          label="Name"
          variant="outlined"
          size="small"
          name="name"
          value={name}
          onChange={(event) => onChange(event.target)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Type"
          variant="outlined"
          size="small"
          name="type"
          value={type}
          onChange={(event) => onChange(event.target)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Reach"
          variant="outlined"
          size="small"
          name="reach"
          value={reach}
          onChange={(event) => onChange(event.target)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="On heat"
          variant="outlined"
          size="small"
          name="onHit"
          value={onHit}
          onChange={(event) => onChange(event.target)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Target"
          variant="outlined"
          size="small"
          name="target"
          value={target}
          onChange={(event) => onChange(event.target)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Description"
          variant="outlined"
          size="small"
          name="description"
          multiline
          fullWidth
          value={description}
          onChange={(event) => onChange(event.target)}
        />
      </Grid>
      <Grid item xs={1}>
        <Button size="small" onClick={switchView}>
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default Edit;
