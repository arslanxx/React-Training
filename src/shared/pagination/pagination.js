import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import { paginationStyles } from "../../styles/appStyles";

export default function pagination({ count, handlePageChange }) {
  const classes = paginationStyles();
  return (
    <Container
      sx={{
        display: "flex",
        padding: "1rem 0 1rem 0",
        justifyContent: "center",
      }}
    >
      <Stack spacing={2}>
        <Pagination
          count={count}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
      </Stack>
    </Container>
  );
}
