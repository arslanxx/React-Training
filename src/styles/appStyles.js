import { makeStyles } from "@material-ui/core";

export const appBarStyle = makeStyles((theme) => ({
  header: {
    boxShadow: "none",
    backgroundColor: "#032541 !important",
  },
  btnColor: {
    color: "#fff",
  },
}));

export const footerStyle = makeStyles((theme) => ({
  footerLayout: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: "10%",
    padding: "2% 10% 2% 10% ",
    backgroundColor: "#032541 !important",
    color: "#fff",
  },
  fontBold: {
    fontWeight: "bold",
  },
}));
