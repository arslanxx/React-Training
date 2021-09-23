import { Container, Grid } from "@material-ui/core";
import React, { Fragment, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { IMAGE_PATH } from "../../store/constants";
import Loader from "../../shared/loader";
import { detailStyle } from "../../styles/appStyles";
import ReviewCard from "../../shared/reviewCard";
import { PersonData } from "./PersonData/PersonData";
import { MediaData } from "./MediaData/MediaData";

export default function DetailComponent({
  detailData,
  detailReq,
  detailLoader,
  reviews,
  error,
  match,
}) {
  const classes = detailStyle();
  const routesData = match.params;
  useEffect(() => {
    window.scrollTo(0, 0);
    detailReq(routesData);
  }, [routesData]);

  const concatMovieGenres = (data) => {
    let str = "";
    data?.forEach((recipe) => {
      str =
        recipe?.name?.concat(" ", str) ||
        recipe?.original_title?.concat(" ", str);
    });
    return str;
  };
  return (
    <Fragment>
      {detailLoader === true ? (
        <Container className={classes.height100}>
          <Loader />
        </Container>
      ) : (
        <Fragment>
          <Typography gutterBottom variant="h3">
            {detailData.title ?? detailData.original_name ?? detailData.name}
          </Typography>
          <Grid container className={classes.gridStyle}>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
              {routesData.component === "person" && (
                <img
                  className={classes.imgStyle}
                  src={IMAGE_PATH + detailData?.profile_path}
                  alt="person"
                />
              )}
              {routesData.component === "tv" && (
                <img
                  className={classes.imgStyle}
                  src={IMAGE_PATH + detailData?.poster_path}
                  alt="tvShow"
                />
              )}
              {routesData.component === "movie" && (
                <img
                  className={classes.imgStyle}
                  src={IMAGE_PATH + detailData?.poster_path}
                  alt="movie"
                />
              )}
            </Grid>
            {routesData.component !== "person" ? (
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <MediaData
                  detailData={detailData}
                  concatMovieGenres={concatMovieGenres}
                />
              </Grid>
            ) : (
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <PersonData detailData={detailData} />
              </Grid>
            )}
          </Grid>
          {routesData.component !== "person" && reviews.length > 0 && (
            <Fragment>
              <Typography
                gutterBottom
                className={classes.headingText}
                variant="h5"
              >
                Reviews
              </Typography>
              {reviews.map((review, index) => {
                return <ReviewCard key={review + index} review={review} />;
              })}
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}
