import React, { Fragment, useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Skeleton from "../../shared/skeleton";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";
import Pagination from "../../shared/pagination";
import { gridPadding } from "../../styles/appStyles";

export default function MovieComponent({
  movieData,
  movieReq,
  movieLoader,
  error,
  history,
  moviePage,
  searchReq,
}) {
  const classes = gridPadding();
  const [page, setPage] = useState(moviePage);
  const component = "movie";
  const [movieSearch, setMovieSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    movieSearch === ""
      ? movieReq(page)
      : searchReq({ query: movieSearch, component: component, page: page });
  }, [page, movieSearch]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <Fragment>
      <SearchBar
        component={component}
        handleSearchText={(value) => setMovieSearch(value)}
      />
      <Container className={classes.minHeigth}>
        {error && <h1>{error}</h1>}
        <Grid container>
          {movieLoader === true
            ? movieData?.results?.map((movie, index) => {
                return (
                  <Grid
                    key={movie.id}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={3}
                    className={classes.paddingLR}
                  >
                    <Skeleton />
                  </Grid>
                );
              })
            : movieData?.results?.map((movie, index) => (
                <Grid
                  key={movie.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  className={classes.paddingLR}
                >
                  <Card
                    key={movie.id}
                    title={movie.title}
                    overView={movie.overview}
                    image={movie.poster_path}
                    id={movie.id}
                    history={history}
                    component={"movie"}
                    rating={movie.vote_average}
                  />
                </Grid>
              ))}
        </Grid>

        <Container>
          <Pagination
            count={movieData.total_pages}
            handlePageChange={handlePageChange}
            page={page}
          />
        </Container>
      </Container>
    </Fragment>
  );
}
