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

export const detailStyle = makeStyles(() => ({
  textStyle: {
    borderBottom: "1px solid #000",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    "&:last-child": {
      borderBottom: "none",
    },
  },
  headingText: {
    marginTop: "3% !important",
  },
  imgStyle: { width: "60%", padding: "1rem 0 1rem 0rem" },
}));

export const searchStlyes = makeStyles(() => ({
  searchBar: {
    width: "100%",
    height: "3rem",
    borderRadius: "30px",
    border: "1px solid #000",
    padding: "10px 20px",
    outline: "none",
    "&:hover": {
      border: "1px solid #005FCC",
    },
  },
}));
