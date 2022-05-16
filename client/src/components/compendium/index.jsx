import { TextField } from "@mui/material";
import React, { useState } from "react";
import SearchList from "./SearchList";

const Compendium = ({ state, setState }) => {
  const [search, setSearch] = useState();
  return (
    <>
      <TextField
        fullWidth
        label="Search"
        variant="outlined"
        size="small"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {search && (
        <SearchList state={state} search={search} setState={setState} />
      )}
    </>
  );
};

export default Compendium;
