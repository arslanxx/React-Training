import React, { Fragment, useEffect } from "react";
import { Box } from "@mui/system";
import { Container, Grid } from "@mui/material";
import Loader from "../../shared/loader";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";

export default function Person({
  trendingData,
  trendingReq,
  trendingLoader,
  error,
  history,
}) {
  useEffect(() => {
    trendingReq();
  }, []);
  return (
    <Fragment>
      <SearchBar />

      {/* <Box sx={{ height: "auto" }}> */}
      <Container>
        {trendingLoader === true && <Loader />}
        {error && <h1>{error}</h1>}

        {trendingData && (
          <Grid container>
            {trendingData.map((trending, index) => (
              <Grid
                key={JSON.stringify(trending) + index}
                item
                xs={12}
                sm={6}
                lg={3}
                xl={2}
                sx={{ paddingLeft: "2rem" }}
              >
                <Card
                  key={JSON.stringify(trending) + index}
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
      </Container>
      {/* </Box> */}
    </Fragment>
  );
}
