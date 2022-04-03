import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const Edit = ({ action, onEdit, switchView }) => {
  const { name, onHit, type, reach, target, description } = action;
  const onChange = ({ name, value }) => onEdit({ ...action, [name]: value });
  const sharedInputProps = {
    variant: "outlined",
    size: "small",
    onChange: (event) => onChange(event.target),
  };
  return (
    <Grid item container justifyContent="center" spacing={2} marginTop={2}>
      <Grid item xs={12}>
        <TextField
          label="Name"
          name="name"
          value={name}
          {...sharedInputProps}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Type"
          value={type}
          name="type"
          placeholder="Mele"
          {...sharedInputProps}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Reach"
          name="reach"
          value={reach}
          placeholder ="15 ft."
          {...sharedInputProps}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="On heat"
          name="onHit"
          value={onHit}
          placeholder = "10"
          {...sharedInputProps}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Target"
          name="target"
          value={target}
          placeholder = "one creature"
          {...sharedInputProps}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Description"
          name="description"
          multiline
          fullWidth
          value={description}
          {...sharedInputProps}
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
