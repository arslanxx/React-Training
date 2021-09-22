import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { DebounceInput } from "react-debounce-input";
import { searchStlyes } from "../../styles/appStyles";
import searchBackgroundImage from "../../assets/searchBackgroundImage/searchBackgroundImage.jpeg";

export default function SearchBar({
  handleSearchReq,
  handleGetReq,
  component,
}) {
  const searchClass = searchStlyes();
  const handleTextChange = (value) => {
    value == ""
      ? handleGetReq()
      : handleSearchReq({ query: value, component: component });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ paddingTop: "2rem" }}>
        <Box
          sx={{ backgroundImage: `${searchBackgroundImage}`, height: "10vh" }}
        >
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
