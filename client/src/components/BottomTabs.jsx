import React from "react";
import {
  Box,
  Grid,
  Tab,
  Tabs,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CheckboxList from "../components/CheckboxList";
import { conditions, damageType, languages, skills } from "../Constants";
import Skill from "./Skill";
import Sense from "./Sense";
import TabPanel, { a11yProps } from "./TabPanel";
import Languages from "./Languages";

const BottomTabs = ({ onChange, currentState }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="basic tabs example"
        >
          {[
            "SKILLS",
            "DMG. VULUNERABILITY",
            "dmg.  IMMUNITIES",
            "dmg.  Resistance",
            "CoND.  IMMUNITIES",
            "speed",
            "sanses",
            "languages",
          ].map((item) => (
            <Tab key={item} label={item} {...a11yProps(0)} />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CheckboxList
          array={skills.map((item) => item.name)}
          listName="skills"
          BaseComponent={Skill}
          onChange={onChange}
          state={currentState}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CheckboxList
          array={damageType}
          listName="dmgVULUNERABILITY"
          onChange={onChange}
          elementDisabled={disableElement([
            currentState.dmgIMMUNITIES,
            currentState.dmgResistance,
          ])}
          state={currentState}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CheckboxList
          array={damageType}
          listName="dmgIMMUNITIES"
          onChange={onChange}
          elementDisabled={disableElement([
            currentState.dmgVULUNERABILITY,
            currentState.dmgResistance,
          ])}
          state={currentState}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CheckboxList
          array={damageType}
          listName="dmgResistance"
          onChange={onChange}
          elementDisabled={disableElement([
            currentState.dmgVULUNERABILITY,
            currentState.dmgIMMUNITIES,
          ])}
          state={currentState}
        />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CheckboxList
          array={conditions}
          listName="conditions"
          onChange={onChange}
          state={currentState}
        />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Grid container spacing={3} justifyContent="center ">
          <Grid item>
            <Sense
              sx={{ maxWidth: 180, minWidth: 180 }}
              onChange={onChange}
              label="Walk"
            />
          </Grid>
          <Grid item>
            <Sense
              sx={{ maxWidth: 180, minWidth: 180 }}
              onChange={onChange}
              label="Burrow"
            />
          </Grid>
          <Grid item>
            <Sense
              sx={{ maxWidth: 180, minWidth: 180 }}
              onChange={onChange}
              label="Climb"
            />
          </Grid>

          <Grid item>
            <Sense
              sx={{ maxWidth: 180, minWidth: 180 }}
              onChange={onChange}
              label="Swim"
            />
          </Grid>
          <Grid item>
            <Sense
              sx={{ maxWidth: 180, minWidth: 180 }}
              onChange={onChange}
              label="Fly"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  name="hover"
                  checked={currentState?.hover ?? false}
                  onChange={() =>
                    onChange({ name: "hover", value: !currentState.hover })
                  }
                />
              }
              label="Hover"
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Sense onChange={onChange} label="Darkvision" />
          </Grid>
          <Grid item>
            <Sense onChange={onChange} label="Tremorsense" />
          </Grid>
          <Grid item>
            <Sense onChange={onChange} label="Truesight" />
          </Grid>
          <Grid item>
            <Sense onChange={onChange} label="Blindsight" />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Languages onChange={onChange} state={currentState} />
      </TabPanel>
    </>
  );
};

export default BottomTabs;

const disableElement = (arrays) => (element) =>
  arrays.some((item) => item?.includes(element));
