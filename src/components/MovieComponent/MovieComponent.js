import React, { Fragment } from "react";
import { Box } from "@mui/system";
import Card from "../../shared/card";
import SearchBar from "../SearchBar/index";

export default function MovieComponent() {
  return (
    <Fragment>
      <SearchBar />

      <Box sx={{ height: "65vh" }}>
        <div>
          <h1>From Movie Component</h1>
          <Card />
        </div>
      </Box>
    </Fragment>
  );
}
