import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import { detailStyle } from "../../../styles/appStyles";

export const MediaData = React.memo(({ detailData, concatMovieGenres }) => {
  const classes = detailStyle();
  return (
    <Fragment>
      <Typography gutterBottom variant="h5" className={classes.headingText}>
        OverView
      </Typography>

      <Typography
        className={classes.textStyle}
        variant="body2"
        color="text.secondary"
      >
        {detailData.overview}
      </Typography>
      <Typography gutterBottom className={classes.headingText} variant="h5">
        Genres
      </Typography>
      <Typography
        className={classes.textStyle}
        variant="body2"
        color="text.secondary"
      >
        {concatMovieGenres(detailData.genres)}
      </Typography>

      <Typography gutterBottom className={classes.headingText} variant="h5">
        Language
      </Typography>
      <Typography
        className={classes.textStyle}
        variant="body2"
        color="text.secondary"
      >
        {detailData.original_language}
      </Typography>

      <Typography gutterBottom className={classes.headingText} variant="h5">
        Tag Line
      </Typography>
      <Typography
        className={classes.textStyle}
        variant="body2"
        color="text.secondary"
      >
        {detailData.tagline}
      </Typography>

      <Typography gutterBottom className={classes.headingText} variant="h5">
        Status
      </Typography>
      <Typography
        className={classes.textStyle}
        variant="body2"
        color="text.secondary"
      >
        {detailData.status}
      </Typography>
      <Typography gutterBottom className={classes.headingText} variant="h5">
        Release Date
      </Typography>
      <Typography
        className={classes.textStyle}
        variant="body2"
        color="text.secondary"
      >
        {detailData.release_date ?? detailData.first_air_date}
      </Typography>
    </Fragment>
  );
});
