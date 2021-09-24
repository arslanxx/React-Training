import React, { Fragment, useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";
import Pagination from "../../shared/pagination";
import Skeleton from "../../shared/skeleton";
import { gridPadding } from "../../styles/appStyles";

export default function TvShowComponent({
  tvShowData,
  tvShowReq,
  tvShowLoader,
  tvPage,
  searchReq,
  error,
  history,
}) {
  const classes = gridPadding();
  const [page, setPage] = useState(tvPage);
  const component = "tv";
  const [tvShowSearch, setTvShowSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    tvShowSearch === ""
      ? tvShowReq(page)
      : searchReq({ query: tvShowSearch, component: component, page: page });
  }, [page, tvShowSearch]);
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <Fragment>
      <SearchBar
        component={component}
        handleSearchText={(value) => setTvShowSearch(value)}
      />
      <Container className={classes.minHeigth}>
        <Grid container>
          {error && <h1>{error}</h1>}
          {tvShowLoader === true
            ? tvShowData?.results?.map((tv, index) => {
                return (
                  <Grid
                    key={tv.id}
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
            : tvShowData && (
                <Grid container>
                  {tvShowData?.results?.map((show, index) => (
                    <Grid
                      key={show.id}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      xl={3}
                      className={classes.paddingLR}
                    >
                      <Card
                        key={show.id}
                        title={show.name}
                        overView={show.overview}
                        image={show.poster_path}
                        id={show.id}
                        history={history}
                        component={"tv"}
                        rating={show.vote_average}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
          <Container>
            <Pagination
              count={tvShowData.total_pages}
              handlePageChange={handlePageChange}
              page={page}
            />
          </Container>
        </Grid>
      </Container>
    </Fragment>
  );
}
