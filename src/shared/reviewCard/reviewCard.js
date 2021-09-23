import React, { Fragment } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Grid } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { IMAGE_PATH } from "../../store/constants";
import { reviewCardStyle } from "../../styles/appStyles";

export default function ReviewCard({ review }) {
  const classes = reviewCardStyle();
  return (
    <Fragment>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Grid container>
            <Grid item className={classes.cardAlign} lg={2}>
              <Avatar
                alt="Cindy Baker"
                src={IMAGE_PATH + review.author_details.avatar_path}
              >
                {review.author[0].toUpperCase()}
              </Avatar>
              <Typography
                sx={{
                  fontWeight: "bold",
                  flexShrink: 0,
                  paddingLeft: "1rem",
                }}
              >
                {review.author}
              </Typography>
            </Grid>
            <Grid item lg={10}>
              <Typography sx={{ flexShrink: 0 }}>{review.content}</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
      </Accordion>
    </Fragment>
  );
}
