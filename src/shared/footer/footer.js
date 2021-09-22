import { Typography } from "@mui/material";
import { Grid } from "@material-ui/core";
import squareLogo from "../../assets/logo/blue_square_logo.png";
import { footerStyle } from "../../styles/appStyles";

export default function Footer() {
  const footerClass = footerStyle();

  return (
    <Grid className={footerClass.footerLayout} container>
      <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
        <img src={squareLogo} style={{ width: "60%" }} alt="Moviedb" />
      </Grid>
      <Grid item xs={8} sm={12} md={6} lg={4} xl={4}>
        <Typography
          className={footerClass.fontBold}
          variant="h5"
          color="inherit"
        >
          The Basics
        </Typography>
        <Typography variant="body1" color="inherit">
          About TMDB
        </Typography>
        <Typography variant="body1" color="inherit">
          Contact Us
        </Typography>
        <Typography variant="body1" color="inherit">
          Support Fourms
        </Typography>
        <Typography variant="body1" color="inherit">
          API
        </Typography>
        <Typography variant="body1" color="inherit">
          System Status
        </Typography>
      </Grid>
      <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
        <Typography
          className={footerClass.fontBold}
          variant="h5"
          color="inherit"
        >
          Get Involved
        </Typography>
        <Typography variant="body1" color="inherit">
          Contribution Bible
        </Typography>
        <Typography variant="body1" color="inherit">
          3rd Party Applications
        </Typography>
        <Typography variant="body1" color="inherit">
          Add New Movie
        </Typography>
        <Typography variant="body1" color="inherit">
          Add New TV Show
        </Typography>
      </Grid>
      <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
        <Typography
          className={footerClass.fontBold}
          variant="h5"
          color="inherit"
        >
          Community
        </Typography>
        <Typography variant="body1" color="inherit">
          Guidelines
        </Typography>
        <Typography variant="body1" color="inherit">
          Discussions
        </Typography>
        <Typography variant="body1" color="inherit">
          Leaderboard
        </Typography>
        <Typography variant="body1" color="inherit">
          Twitter
        </Typography>
      </Grid>
      <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
        <Typography
          className={footerClass.fontBold}
          variant="h5"
          color="inherit"
        >
          Legal
        </Typography>
        <Typography variant="body1" color="inherit">
          Terms of Use
        </Typography>
        <Typography variant="body1" color="inherit">
          API of Use
        </Typography>
        <Typography variant="body1" color="inherit">
          Privacy Ploicy
        </Typography>
        <Typography variant="body1" color="inherit">
          testing
        </Typography>
      </Grid>
    </Grid>
  );
}
