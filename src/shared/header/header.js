import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router";
import { movieMenu } from "../../store/constants";
import shortLogo from "../../assets/logo/blue_short_logo.png";
import { appBarStyle } from "../../styles/appStyles";
import { peopleRoute, tvShowRoute } from "../../store/constants";

export default function Header() {
  let history = useHistory();
  const classes = appBarStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChangeTab = (route) => {
    history.push(route);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.header} position="static">
        <Toolbar>
          <img
            src={shortLogo}
            onClick={() => handleChangeTab("/")}
            style={{ width: "10%", cursor: "pointer" }}
            alt="Moviedb"
          />
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className={classes.btnColor}
          >
            Movies
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            style={{ marginTop: "2%" }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {movieMenu.map((menu, index) => {
              return (
                <MenuItem
                  key={JSON.stringify(menu) + index}
                  onClick={handleClose}
                >
                  {menu}
                </MenuItem>
              );
            })}
          </Menu>
          <Button
            className={classes.btnColor}
            onClick={() => handleChangeTab(tvShowRoute)}
            component="div"
          >
            TV Shows
          </Button>
          <Button
            className={classes.btnColor}
            onClick={() => handleChangeTab(peopleRoute)}
            component="div"
          >
            People
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
