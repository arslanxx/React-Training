import React, { Fragment, useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";
import Pagination from "../../shared/pagination";
import Skeleton from "../../shared/skeleton";

export default function TvShowComponent({
  tvShowData,
  tvShowReq,
  tvShowLoader,
  searchReq,
  error,
  history,
}) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
    tvShowReq(page);
  }, [page]);
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <Fragment>
      <SearchBar
        handleSearchReq={searchReq}
        handleGetReq={tvShowReq}
        component={"tv"}
      />
      <Container>
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
                    sx={{ paddingRight: "1rem", paddingLeft: "1rem" }}
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
                      sx={{ paddingRight: "1rem", paddingLeft: "1rem" }}
                    >
                      <Card
                        key={show.id}
                        title={show.name}
                        overView={show.overview}
                        image={show.poster_path}
                        id={show.id}
                        history={history}
                        component={"tv"}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
          <Container>
            <Pagination
              count={tvShowData.total_pages}
              handlePageChange={handlePageChange}
            />
          </Container>
        </Grid>
      </Container>
    </Fragment>
  );
}
