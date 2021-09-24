import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { loaderStyles } from "../../styles/appStyles";

export default function Loader() {
  const classes = loaderStyles();
  return (
    <Box className={classes.pageLoader}>
      <CircularProgress />
    </Box>
  );
}
