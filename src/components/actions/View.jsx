import { Grid, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React, { useState } from "react";

const View = ({ action, switchView, onDelete }) => {
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
  } = action;
  const [showActionButtons, setShowActionButtons] = useState(false);
  return (
    <Grid
      item
      container
      direction="column"
      justifyContent="flex-start"
      marginTop={2}
      onMouseEnter={() => setShowActionButtons(true)}
      onMouseLeave={() => setShowActionButtons(false)}
    >
      <Grid xs={{minHeight: 34}} item container direction="row" justifyContent="space-between">
        <Grid margin="auto 0" item>
          <Typography xs={{minHeight: 64}} fontWeight="bold">
            {name}
            {cost && ` ${cost} Action(s)`}
          </Typography>
        </Grid>
        {showActionButtons && (
          <Grid item>
            <IconButton size="small" onClick={switchView}>
              <EditIcon />
            </IconButton>
            <IconButton size="small" onClick={onDelete}>
              <DeleteOutlineIcon />
            </IconButton>
          </Grid>
        )}
      </Grid>
      <Grid item>
        <Typography>
          {type ? (
            <>
              <Typography component="span" fontStyle="oblique">
                Type:
              </Typography>{" "}
              {type}{" "}
            </>
          ) : (
            ""
          )}
          {range ? (
            <>
              <Typography component="span" fontStyle="oblique">
                Range:
              </Typography>{" "}
              {range}{" "}
            </>
          ) : (
            ""
          )}
          {criticalRange ? (
            <>
              <Typography component="span" fontStyle="oblique">
                Critical Range:
              </Typography>{" "}
              {criticalRange}{" "}
            </>
          ) : (
            ""
          )}
          {magicBonus ? (
            <>
              <Typography component="span" fontStyle="oblique">
                Magic Bonus:
              </Typography>{" "}
              {magicBonus}{" "}
            </>
          ) : (
            ""
          )}
          {damages?.length > 0 ? (
            <>
              <Typography component="span" fontStyle="oblique">
                Damages:
              </Typography>
              {damages.map(
                (item) =>
                  ` ${item.damage ?? 0} + ${item.additional ?? 0} + ${
                    item.characteristic
                  } ${item.type}`
              )}
            </>
          ) : (
            ""
          )}
        </Typography>
      </Grid>
      <Grid item>
        <Typography>{description}</Typography>
      </Grid>
    </Grid>
  );
};

export default View;
