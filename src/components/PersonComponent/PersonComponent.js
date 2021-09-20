import React, { Fragment, useEffect } from "react";
import { Box } from "@mui/system";
import { Container, Grid } from "@mui/material";
import Loader from "../../shared/loader";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";

export default function Person({ peopleData, peopleReq, peopleLoader, error }) {
  useEffect(() => {
    peopleReq();
  }, []);
  return (
    <Fragment>
      <SearchBar />
      <Container>
        {peopleLoader === true && <Loader />}
        {error && <h1>{error}</h1>}

        {peopleData && (
          <Grid container>
            {peopleData.map((person, index) => (
              <Grid
                key={JSON.stringify(person) + index}
                item
                xs={6}
                lg={3}
                xl={2}
                sx={{ paddingLeft: "2rem" }}
              >
                <Card
                  key={JSON.stringify(person) + index}
                  title={person.name}
                  overView={person.known_for_department}
                  image={person.profile_path}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Fragment>
  );
}
