import React, { Fragment, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Loader from "../../shared/loader";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";

export default function TvShowComponent({
  tvShowData,
  tvShowReq,
  tvShowLoader,
  searchReq,
  error,
  history,
}) {
  useEffect(() => {
    tvShowReq();
  }, []);
  return (
    <Fragment>
      <SearchBar
        handleSearchReq={searchReq}
        handleGetReq={tvShowReq}
        component={"tv"}
      />
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
                md={4}
                lg={3}
                xl={3}
                sx={{ paddingRight: "1rem", paddingLeft: "1rem" }}
              >
                <Card
                  key={JSON.stringify(show) + index}
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
      </Container>
    </Fragment>
  );
}
