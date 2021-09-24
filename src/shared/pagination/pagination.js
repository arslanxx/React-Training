import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import { paginationStyles } from "../../styles/appStyles";

export default function pagination({ count, handlePageChange, page }) {
  const classes = paginationStyles();
  return (
    <Container>
      <Stack spacing={2}>
        <Pagination
          className={classes.footerAlign}
          count={count}
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
      </Stack>
    </Container>
  );
}
