import React from "react";
import { Grid, Typography } from "@mui/material";

const ActionsView = ({ actions }) =>
  actions?.map(
    ({
      name,
      type,
      range,
      magicBonus,
      criticalRange,
      damages,
      description,
      cost,
      bla,
    }) => (
      <Grid
        item
        container
        direction="column"
        justifyContent="flex-start"
        marginTop={2}
      >
        <Grid
          sx={{ margin: 1 }}
          item
          direction="row"
          justifyContent="space-between"
        >
          <Typography padding="5px 0" fontWeight="bold">
            {name}
            {cost && ` ${cost} Action(s)`}
          </Typography>
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
            {bla ? (
              <>
                <Typography component="span" fontStyle="oblique">
                  Bla:
                </Typography>{" "}
                {bla}{" "}
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
    )
  ) ?? <></>;

export default ActionsView;
