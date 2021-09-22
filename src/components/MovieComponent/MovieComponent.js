import React, { Fragment, useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";
import Loader from "../../shared/loader";
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
        {movieLoader === true && <Loader />}
        {error && <h1>{error}</h1>}

        {movieData && (
          <Grid container>
            {movieData?.results?.map((movie, index) => (
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
        )}
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
