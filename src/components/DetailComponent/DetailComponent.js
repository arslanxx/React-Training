import { Container, Grid } from "@material-ui/core";
import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_PATH } from "../../store/constants";
import Typography from "@mui/material/Typography";
import Loader from "../../shared/loader";
import { detailStyle } from "../../styles/appStyles";

export default function DetailComponent({
  detailData,
  detailReq,
  detailLoader,
  error,
  match,
}) {
  const classes = detailStyle();
  const routesData = match.params;
  useEffect(() => {
    window.scrollTo(0, 0);
    detailReq(routesData);
  }, []);

  const convertToString = (data) => {
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
        <Container style={{ height: "100vh" }}>
          <Loader />
        </Container>
      ) : (
        <Fragment>
          <Typography gutterBottom variant="h3" component="div">
            {detailData.title ?? detailData.original_name ?? detailData.name}
          </Typography>
          <Grid
            container
            style={{ marginTop: "3rem", padding: "0 2rem 0 2rem" }}
          >
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
              {routesData.component === "person" && (
                <img
                  className={classes.imgStyle}
                  src={IMAGE_PATH + detailData?.profile_path}
                />
              )}
              {routesData.component === "tv" && (
                <img
                  className={classes.imgStyle}
                  src={IMAGE_PATH + detailData?.poster_path}
                />
              )}
              {routesData.component === "movie" && (
                <img
                  className={classes.imgStyle}
                  src={IMAGE_PATH + detailData?.poster_path}
                />
              )}
            </Grid>
            {routesData.component !== "person" ? (
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.headingText}
                  component="div"
                >
                  OverView
                </Typography>

                <Typography
                  className={classes.textStyle}
                  variant="body2"
                  color="text.secondary"
                >
                  {detailData.overview}
                </Typography>
                <Typography
                  gutterBottom
                  className={classes.headingText}
                  variant="h5"
                  component="div"
                >
                  Genres
                </Typography>
                <Typography
                  className={classes.textStyle}
                  variant="body2"
                  color="text.secondary"
                >
                  {convertToString(detailData.genres)}
                </Typography>

                <Typography
                  gutterBottom
                  className={classes.headingText}
                  variant="h5"
                  component="div"
                >
                  Language
                </Typography>
                <Typography
                  className={classes.textStyle}
                  variant="body2"
                  color="text.secondary"
                >
                  {detailData.original_language}
                </Typography>

                <Typography
                  gutterBottom
                  className={classes.headingText}
                  variant="h5"
                  component="div"
                >
                  Tag Line
                </Typography>
                <Typography
                  className={classes.textStyle}
                  variant="body2"
                  color="text.secondary"
                >
                  {detailData.tagline}
                </Typography>

                <Typography
                  gutterBottom
                  className={classes.headingText}
                  variant="h5"
                  component="div"
                >
                  Status
                </Typography>
                <Typography
                  className={classes.textStyle}
                  variant="body2"
                  color="text.secondary"
                >
                  {detailData.status}
                </Typography>
                <Typography
                  gutterBottom
                  className={classes.headingText}
                  variant="h5"
                  component="div"
                >
                  Release Date
                </Typography>
                <Typography
                  className={classes.textStyle}
                  variant="body2"
                  color="text.secondary"
                >
                  {detailData.release_date ?? detailData.first_air_date}
                </Typography>
              </Grid>
            ) : (
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Typography
                  className={classes.headingText}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Biography
                </Typography>
                <Typography
                  className={classes.textStyle}
                  variant="body2"
                  color="text.secondary"
                >
                  {detailData.biography}
                </Typography>
                <Typography
                  className={classes.headingText}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Gender
                </Typography>

                <Typography
                  className={classes.textStyle}
                  variant="body2"
                  color="text.secondary"
                >
                  {detailData.gender === 1 ? "Female" : "Male"}
                </Typography>
                <Typography
                  className={classes.headingText}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Department
                </Typography>
                <Typography
                  className={classes.textStyle}
                  variant="body2"
                  color="text.secondary"
                >
                  {detailData.known_for_department}
                </Typography>

                <Typography
                  className={classes.headingText}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Birthday
                </Typography>
                <Typography
                  className={classes.textStyle}
                  variant="body2"
                  color="text.secondary"
                >
                  {detailData.birthday}
                </Typography>
                <Typography
                  gutterBottom
                  className={classes.headingText}
                  variant="h5"
                  component="div"
                >
                  Birth Place
                </Typography>
                <Typography
                  className={classes.textStyle}
                  variant="body2"
                  color="text.secondary"
                >
                  {detailData.place_of_birth}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
}
