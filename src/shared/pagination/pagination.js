import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";

export default function pagination({ count, handlePageChange }) {
  return (
    <Container
      style={{
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
