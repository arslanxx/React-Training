import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import searchBackgroundImage from "../../assets/searchBackgroundImage/searchBackgroundImage.jpeg";

export default function SearchBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{ backgroundImage: `${searchBackgroundImage}`, height: "30vh" }}
        >
          <img
            src={searchBackgroundImage}
            style={{
              bgcolor: "#cfe8fc",
              width: "100%",
              objectFit: "cover",
              height: "30vh",
            }}
            alt="Moviedb"
          />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
      </Container>
    </React.Fragment>
  );
}
