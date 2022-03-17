import React from "react";
import { Box, Grid, InputAdornment, Tab, Tabs, TextField } from "@mui/material";
import CheckboxList from "../components/CheckboxList";
import { conditions, damageType, languages, skills } from "../Constants";
import Skill from "./Skill";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

const BottomTabs = () => {
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
            "sanses",
            "languages",
          ].map((item) => (
            <Tab key={item} label={item} {...a11yProps(0)} />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CheckboxList array={skills} BaseComponent={Skill} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CheckboxList array={damageType} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CheckboxList array={damageType} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CheckboxList array={damageType} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CheckboxList array={conditions} />
      </TabPanel>
      <TabPanel
        value={value}
        index={5}
      >
        <Grid
          container
          justifyContent="center"
          spacing={2}
        >
          <Grid item >
            <TextField
              sx={{ width: 150 }}
              label="Darkvision"
              variant="outlined"
              InputProps={{
                inputMode: 'numeric', pattern: '[0-9]*',
                endAdornment: <InputAdornment position="end">feet</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              sx={{ width: 150 }}
              label="Tremorsense"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              sx={{ width: 150 }}
              label="Truesight"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              sx={{ width: 150 }}
              label="Blindsight"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <CheckboxList array={languages} />
      </TabPanel>
    </>
  );
};

export default BottomTabs;
