import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Card,
} from "@mui/material";
import React from "react";
import { atackType, damageType, states } from "../../Constants";

const Edit = ({
  action,
  state,
  onEdit,
  switchView,
  title,
  hasAttack,
  isLegendary,
}) => {
  const {
    name,
    characteristic,
    type,
    range,
    magicBonus,
    proficiency,
    criticalRange,
    //target,
    damages,
    description,
    attack,
    cost,
    bla
  } = action;
  const onChange = ({ name, value }) => onEdit({ ...action, [name]: value });
  const sharedInputProps = {
    size: "small",
    onChange: (event) => onChange(event.target),
  };
  const onDamage =
    (index) =>
    ({ target: { name, value } }) =>
      onChange({
        name: "damages",
        value: damages.map((x, i) =>
          i !== index ? x : { ...x, [name]: value }
        ),
      });

  return (
    <Card sx={{ padding: 1 }}>
      <Grid item container justifyContent="center" spacing={2}>
        <Grid item>
          <TextField
            xs={{ position: "center" }}
            label="Name"
            name="name"
            value={name}
            {...sharedInputProps}
          />
        </Grid>
        {isLegendary && (
          <Grid item xs={6}>
            <TextField
              label="Cost"
              name="cost"
              value={cost}
              {...sharedInputProps}
            />
          </Grid>
        )}
        {hasAttack && (
          <Grid item xs={12}>
            <FormControlLabel
              sx={{ minWidth: 165 }}
              control={
                <Checkbox
                  name="atack"
                  checked={attack}
                  onChange={() => onChange({ name: "attack", value: !attack })}
                />
              }
              label="Atack"
            />
          </Grid>
        )}
        {attack && (
          <>
            <Grid item xs={6}>
              <FormControl fullWidth size="small">
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                  label="type-label"
                  name="type"
                  value={type}
                  onChange={(event) => onChange(event.target)}
                >
                <MenuItem value="melee">Melee</MenuItem>
                <MenuItem value="range">Range</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={6}>
              <FormControl fullWidth size="small">
                <InputLabel id="bla-label">Bla</InputLabel>
                <Select
                  label="bla-label"
                  name="bla"
                  value={bla}
                  onChange={(event) => onChange(event.target)}
                >
                <MenuItem value="spell">Spell</MenuItem>
                <MenuItem value="weapone">Weapone</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Range"
                name="range"
                value={range}
                placeholder="15 ft."
                {...sharedInputProps}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Magic Bonus"
                name="magicBonus"
                value={magicBonus}
                placeholder="+1"
                {...sharedInputProps}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Critical range"
                name="criticalRange"
                value={criticalRange}
                placeholder="15 ft."
                {...sharedInputProps}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                sx={{ minWidth: 165 }}
                control={
                  <Checkbox
                    name="proficiency"
                    checked={proficiency}
                    onChange={() =>
                      onChange({ name: "proficiency", value: !attack })
                    }
                  />
                }
                label="Proficiency"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth size="small">
                <InputLabel id="characteristic-label">
                  Characteristic
                </InputLabel>
                <Select
                  label="characteristic-label"
                  name="characteristic"
                  value={characteristic}
                  onChange={(event) => onChange(event.target)}
                >
                  <MenuItem value={undefined}>None</MenuItem>
                  {states.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {damages &&
              damages.map((item, index) => (
                <>
                  <Grid item xs={6}>
                    <TextField
                      label="Damage"
                      name="damage"
                      value={item.damage}
                      placeholder="2d6"
                      {...sharedInputProps}
                      onChange={onDamage(index)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl size="small">
                      <InputLabel id="characteristic-label">
                        + Characteristic
                      </InputLabel>
                      <Select
                        label="characteristic-label"
                        name="characteristic"
                        value={item.characteristic}
                        onChange={onDamage(index)}
                      >
                        <MenuItem value={undefined}>None</MenuItem>
                        {states.map((item) => (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Additional (+)"
                      name="additional"
                      value={item.additional}
                      placeholder="0"
                      {...sharedInputProps}
                      onChange={onDamage(index)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl size="small">
                      <InputLabel id="type-label">Type</InputLabel>
                      <Select
                        label="type-label"
                        name="type"
                        value={item.type}
                        onChange={onDamage(index)}
                      >
                        {damageType.map((item) => (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </>
              ))}
            <Grid item xs={12}>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={() =>
                  onChange({ name: "damages", value: [...(damages || []), {}] })
                }
              >
                ADD DAMAGE
              </Button>
            </Grid>
          </>
        )}
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
    </Card>
  );
};

export default Edit;
