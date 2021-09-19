import React, { Fragment, useEffect } from "react";
import { Box } from "@mui/system";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";
import { FETCH_MOVIE_REQUEST } from "../../store/constants";
import Loader from "../../shared/loader";
import { Grid } from "@mui/material";

export default function MovieComponent({
  movieData,
  movieReq,
  movieLoader,
  error,
}) {
  useEffect(() => {
    movieReq(FETCH_MOVIE_REQUEST);
  }, []);
  return (
    <Fragment>
      <SearchBar />

      <Box sx={{ height: "auto" }}>
        {movieLoader === true && <Loader />}
        {error && <h1>{error}</h1>}

        {movieData && (
          <Grid container>
            {movieData.map((movie, index) => (
              <Grid
                key={JSON.stringify(movie) + index}
                item
                xs={6}
                lg={3}
                xl={2}
              >
                <Card
                  key={JSON.stringify(movie) + index}
                  title={movie.title}
                  overView={movie.overview}
                  image={movie.poster_path}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Fragment>
  );
}
