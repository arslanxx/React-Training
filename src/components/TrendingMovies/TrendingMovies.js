import React, { Fragment, useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";
import Pagination from "../../shared/pagination";
import Skeleton from "../../shared/skeleton";
import { gridPadding } from "../../styles/appStyles";

export default function Person({
  trendingData,
  trendingReq,
  trendingLoader,
  error,
  trendingPage,
  searchReq,
  history,
}) {
  const classes = gridPadding();
  const [page, setPage] = useState(trendingPage);
  const component = "movie";
  const [movieSearch, setMovieSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    movieSearch === ""
      ? trendingReq(page)
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

      {/* <Box > */}
      <Container>
        {error && <h1>{error}</h1>}
        <Grid container>
          {trendingLoader === true
            ? trendingData?.results?.map((trending, index) => {
                return (
                  <Grid
                    key={trending.id}
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
            : trendingData && (
                <Grid container>
                  {trendingData?.results?.map((trending, index) => (
                    <Grid
                      key={trending.id}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      xl={3}
                      className={classes.paddingLR}
                    >
                      <Card
                        key={trending.id}
                        title={trending.title}
                        overView={trending.overview}
                        image={trending.poster_path}
                        id={trending.id}
                        history={history}
                        component={"movie"}
                        rating={trending.vote_average}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
          <Container>
            <Pagination
              count={trendingData.total_pages}
              handlePageChange={handlePageChange}
              page={page}
            />
          </Container>
        </Grid>
      </Container>
      {/* </Box> */}
    </Fragment>
  );
}
