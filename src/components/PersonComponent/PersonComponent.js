import React, { Fragment, useEffect } from "react";
import { Box } from "@mui/system";
import { Container, Grid } from "@mui/material";
import Loader from "../../shared/loader";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";

export default function Person({
  peopleData,
  peopleReq,
  peopleLoader,
  error,
  history,
  searchReq,
}) {
  useEffect(() => {
    peopleReq();
  }, []);
  return (
    <Fragment>
      <SearchBar
        handleSearchReq={searchReq}
        handleGetReq={peopleReq}
        component={"person"}
      />
      <Container>
        {peopleLoader === true && <Loader />}
        {error && <h1>{error}</h1>}

        {peopleData && (
          <Grid container>
            {peopleData.map((person, index) => (
              <Grid
                key={JSON.stringify(person) + index}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                sx={{ paddingRight: "1rem", paddingLeft: "1rem" }}
              >
                <Card
                  key={JSON.stringify(person) + index}
                  title={person.name}
                  overView={person.known_for_department}
                  image={person.profile_path}
                  id={person.id}
                  history={history}
                  component={"person"}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Fragment>
  );
}
