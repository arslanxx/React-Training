import React, { Fragment, useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";
import Pagination from "../../shared/pagination";
import Skeleton from "../../shared/skeleton";

export default function Person({
  trendingData,
  trendingReq,
  trendingLoader,
  error,
  searchReq,
  history,
}) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
    trendingReq(page);
  }, [page]);
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <Fragment>
      <SearchBar
        handleSearchReq={searchReq}
        handleGetReq={trendingReq}
        component={"movie"}
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
                    sx={{ paddingRight: "1rem", paddingLeft: "1rem" }}
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
                      sx={{ paddingRight: "1rem", paddingLeft: "1rem" }}
                    >
                      <Card
                        key={trending.id}
                        title={trending.title}
                        overView={trending.overview}
                        image={trending.poster_path}
                        id={trending.id}
                        history={history}
                        component={"movie"}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
          <Container>
            <Pagination
              count={trendingData.total_pages}
              handlePageChange={handlePageChange}
            />
          </Container>
        </Grid>
      </Container>
      {/* </Box> */}
    </Fragment>
  );
}
