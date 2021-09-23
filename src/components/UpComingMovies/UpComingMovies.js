import React, { Fragment, useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";
import Pagination from "../../shared/pagination";
import Skeleton from "../../shared/skeleton";
import { gridPadding } from "../../styles/appStyles";

export default function MovieComponent({
  upComingMoviesData,
  upComingMoviesReq,
  upComingMoviesLoader,
  upComingMoviePage,
  error,
  searchReq,
  history,
}) {
  const classes = gridPadding();
  const [page, setPage] = useState(upComingMoviePage);
  useEffect(() => {
    window.scrollTo(0, 0);
    upComingMoviesReq(page);
  }, [page]);
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <Fragment>
      <SearchBar
        handleSearchReq={searchReq}
        handleGetReq={upComingMoviesReq}
        component={"movie"}
      />

      <Container>
        {/* {upComingMoviesLoader === true && <Loader />} */}
        {error && <h1>{error}</h1>}
        <Grid container>
          {upComingMoviesLoader === true
            ? upComingMoviesData?.results?.map((coming, index) => {
                return (
                  <Grid
                    key={coming.id}
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
            : upComingMoviesData && (
                <Grid container>
                  {upComingMoviesData?.results?.map((movie, index) => (
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
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
          <Container>
            <Pagination
              count={upComingMoviesData.total_pages}
              handlePageChange={handlePageChange}
              page={page}
            />
          </Container>
        </Grid>
      </Container>
    </Fragment>
  );
}
