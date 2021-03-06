import React, { useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const View = ({ action, switchView, onDelete }) => {
  const {
    name,
    type1,
    type2,
    range,
    magicBonus,
    criticalRange,
    damages,
    description,
    cost,
    bla,
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
      sx={{
        "&:hover": {
          cursor: "context-menu",
          backgroundColor: "rgba(43, 99, 131, 0.2)",
        },
      }}
    >
      <Grid
        sx={{ margin: 1 }}
        item
        container
        direction="row"
        justifyContent="space-between"
      >
        <Grid margin="auto 0" item>
          <Typography padding="5px 0" fontWeight="bold">
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
          {type1 ? (
            <>
              <Typography component="span" fontStyle="oblique">
                Type:
              </Typography>{" "}
              {type1}{" "}
            </>
          ) : (
            ""
          )}
          {type2 ? (
            <>
              <Typography component="span" fontStyle="oblique">
                Bla:
              </Typography>{" "}
              {type2}{" "}
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
        <Typography
          component="p"
          sx={{ wordBreak: "break-word", paddingRight: 1 }}
        >
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default View;
