import React, { Fragment, useEffect } from "react";
import { Box } from "@mui/system";
import { Container, Grid } from "@mui/material";
import Loader from "../../shared/loader";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";

export default function TvShowComponent({
  tvShowData,
  tvShowReq,
  tvShowLoader,
  error,
}) {
  useEffect(() => {
    tvShowReq();
  }, []);
  return (
    <Fragment>
      <SearchBar />
      <Container>
        {tvShowLoader === true && <Loader />}
        {error && <h1>{error}</h1>}
        {tvShowData && (
          <Grid container>
            {tvShowData.map((show, index) => (
              <Grid
                key={JSON.stringify(show) + index}
                item
                xs={12}
                sm={6}
                md={3}
                lg={2}
                xl={4}
                sx={{ paddingLeft: "2rem" }}
              >
                <Card
                  key={JSON.stringify(show) + index}
                  title={show.name}
                  overView={show.overview}
                  image={show.poster_path}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Fragment>
  );
}
