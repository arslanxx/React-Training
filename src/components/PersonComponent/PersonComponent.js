import React, { Fragment, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Container, Grid } from "@mui/material";
import Skeleton from "../../shared/skeleton";
import Loader from "../../shared/loader";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";
import Pagination from "../../shared/pagination";

export default function Person({
  peopleData,
  peopleReq,
  peopleLoader,
  error,
  history,
  searchReq,
}) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
    peopleReq(page);
  }, [page]);
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <Fragment>
      <SearchBar
        handleSearchReq={searchReq}
        handleGetReq={peopleReq}
        component={"person"}
      />
      <Container>
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
                    sx={{ paddingRight: "1rem", paddingLeft: "1rem" }}
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
                      sx={{ paddingRight: "1rem", paddingLeft: "1rem" }}
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
            />
          </Container>
        </Grid>
      </Container>
    </Fragment>
  );
}
