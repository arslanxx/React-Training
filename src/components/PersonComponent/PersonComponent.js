import React, { Fragment, useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Skeleton from "../../shared/skeleton";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";
import Pagination from "../../shared/pagination";
import { gridPadding } from "../../styles/appStyles";

export default function Person({
  peopleData,
  peopleReq,
  peopleLoader,
  peoplePage,
  error,
  history,
  searchReq,
}) {
  const classes = gridPadding();
  const [page, setPage] = useState(peoplePage);
  const component = "person";
  const [personSearch, setPersonSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    personSearch === ""
      ? peopleReq(page)
      : searchReq({ query: personSearch, component: component, page: page });
  }, [page, personSearch]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <Fragment>
      <SearchBar
        component={component}
        handleSearchText={(value) => setPersonSearch(value)}
      />
      <Container className={classes.minHeigth}>
        <Grid container>
          {error && <h1>{error}</h1>}
          {peopleLoader === true
            ? peopleData?.results?.map((people, index) => {
                return (
                  <Grid
                    key={people.id}
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
            : peopleData && (
                <Grid container>
                  {peopleData?.results?.map((person, index) => (
                    <Grid
                      key={person.id}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      xl={3}
                      className={classes.paddingLR}
                    >
                      <Card
                        key={person.id}
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
          <Container>
            <Pagination
              count={peopleData.total_pages}
              handlePageChange={handlePageChange}
              page={page}
            />
          </Container>
        </Grid>
      </Container>
    </Fragment>
  );
}
