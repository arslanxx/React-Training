import React, { Fragment, useEffect } from "react";
import { Box } from "@mui/system";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";
import Loader from "../../shared/loader";
import { Grid } from "@mui/material";

export default function MovieComponent({
  upComingMoviesData,
  upComingMoviesReq,
  upComingMoviesLoader,
  error,
}) {
  useEffect(() => {
    upComingMoviesReq();
  }, []);
  return (
    <Fragment>
      <SearchBar />

      <Box sx={{ height: "auto" }}>
        {upComingMoviesLoader === true && <Loader />}
        {error && <h1>{error}</h1>}

        {upComingMoviesData && (
          <Grid container>
            {upComingMoviesData.map((movie, index) => (
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
