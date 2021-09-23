import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import { detailStyle } from "../../../styles/appStyles";

export const PersonData = React.memo(({ detailData }) => {
  const classes = detailStyle();
  return (
    <Fragment>
      <Typography className={classes.headingText} gutterBottom variant="h5">
        Biography
      </Typography>
      <Typography
        className={classes.textStyle}
        variant="body2"
        color="text.secondary"
      >
        {detailData.biography}
      </Typography>
      <Typography className={classes.headingText} gutterBottom variant="h5">
        Gender
      </Typography>

      <Typography
        className={classes.textStyle}
        variant="body2"
        color="text.secondary"
      >
        {detailData.gender === 1 ? "Female" : "Male"}
      </Typography>
      <Typography className={classes.headingText} gutterBottom variant="h5">
        Department
      </Typography>
      <Typography
        className={classes.textStyle}
        variant="body2"
        color="text.secondary"
      >
        {detailData.known_for_department}
      </Typography>

      <Typography className={classes.headingText} gutterBottom variant="h5">
        Birthday
      </Typography>
      <Typography
        className={classes.textStyle}
        variant="body2"
        color="text.secondary"
      >
        {detailData.birthday}
      </Typography>
      <Typography gutterBottom className={classes.headingText} variant="h5">
        Birth Place
      </Typography>
      <Typography
        className={classes.textStyle}
        variant="body2"
        color="text.secondary"
      >
        {detailData.place_of_birth}
      </Typography>
    </Fragment>
  );
});
