import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { DebounceInput } from "react-debounce-input";
import { searchStlyes } from "../../styles/appStyles";

export default function SearchBar({
  handleSearchReq,
  handleGetReq,
  component,
}) {
  const searchClass = searchStlyes();
  const handleTextChange = (value) => {
    value === ""
      ? handleGetReq()
      : handleSearchReq({ query: value, component: component });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed className={searchClass.gridStyle}>
        <Box>
          <Typography variant="h5" gutterBottom>
            Welcome
          </Typography>
          <DebounceInput
            minLength={2}
            debounceTimeout={300}
            placeholder={`Search for a ${component}`}
            onChange={(e) => handleTextChange(e.target.value)}
            className={searchClass.searchBar}
          />
        </Box>
      </Container>
    </React.Fragment>
  );
}
