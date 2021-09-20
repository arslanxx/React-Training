import React, { Fragment, useEffect } from "react";
import { Box } from "@mui/system";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";
import Loader from "../../shared/loader";
import { Container, Grid } from "@mui/material";

export default function MovieComponent({
  movieData,
  movieReq,
  movieLoader,
  error,
  history,
}) {
  useEffect(() => {
    movieReq();
  }, []);
  return (
    <Fragment>
      <SearchBar />
      <Container>
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
                sx={{ paddingLeft: "2rem" }}
              >
                <Card
                  key={JSON.stringify(movie) + index}
                  title={movie.title}
                  overView={movie.overview}
                  image={movie.poster_path}
                  id={movie.id}
                  history={history}
                  component={"movie"}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Fragment>
  );
}
