import React, { Fragment, useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Skeleton from "../../shared/skeleton";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";
import Pagination from "../../shared/pagination";

export default function MovieComponent({
  movieData,
  movieReq,
  movieLoader,
  error,
  history,
  searchReq,
}) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
    movieReq(page);
  }, [page]);
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <Fragment>
      <SearchBar
        handleSearchReq={searchReq}
        handleGetReq={movieReq}
        component={"movie"}
      />
      <Container>
        {error && <h1>{error}</h1>}
        <Grid container>
          {movieLoader === true
            ? movieData?.results?.map((movie, index) => {
                return (
                  <Grid
                    key={JSON.stringify(movie) + index}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={3}
                    sx={{ paddingRight: "1rem", paddingLeft: "1rem" }}
                  >
                    <Skeleton />
                  </Grid>
                );
              })
            : movieData?.results?.map((movie, index) => (
                <Grid
                  key={JSON.stringify(movie) + index}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  sx={{ paddingRight: "1rem", paddingLeft: "1rem" }}
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

        <Container>
          <Pagination
            count={movieData.total_pages}
            handlePageChange={handlePageChange}
          />
        </Container>
      </Container>
    </Fragment>
  );
}
