import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { DebounceInput } from "react-debounce-input";
import { searchStlyes } from "../../styles/appStyles";

export default function SearchBar({ component, handleSearchText }) {
  const searchClass = searchStlyes();
  const [text, setText] = useState("");

  useEffect(() => {
    handleSearchText(text);
  }, [text]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed className={searchClass.gridStyle}>
        <Box>
          <Typography variant="h5" gutterBottom>
            Welcome
          </Typography>
          <DebounceInput
            minLength={4}
            debounceTimeout={300}
            placeholder={`Search for a ${component}`}
            onChange={(e) => setText(e.target.value)}
            className={searchClass.searchBar}
          />
        </Box>
      </Container>
    </React.Fragment>
  );
}
