import { makeStyles } from "@material-ui/core";

export const appBarStyle = makeStyles((theme) => ({
  header: {
    boxShadow: "none",
    backgroundColor: "#032541 !important",
  },
  btnColor: {
    color: "#fff",
  },
  headerLogo: {
    width: "10%",
    cursor: "pointer",
  },
  mt: {
    marginTop: "2%",
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
  img: {
    width: "60%",
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
    fontWeight: "bold",
  },
  height100: {
    height: "100vh",
  },
  gridStyle: {
    marginTop: "3rem",
    padding: "0 2rem 0 2rem",
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
  gridStyle: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
}));

export const paginationStyles = makeStyles(() => ({
  footerAlign: {
    display: "flex",
    padding: "1rem 0 1rem 0",
    justifyContent: "center",
  },
}));

export const reviewCardStyle = makeStyles(() => ({
  cardAlign: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mt: {
    marginTop: "1rem",
  },
  title: {
    display: "flex",
    justifyContent: "centre ",
  },
}));

export const skeletonCardStyle = makeStyles(() => ({
  mt: {
    marginTop: "20px",
  },
}));

export const gridPadding = makeStyles(() => ({
  paddingLR: { paddingRight: "1rem", paddingLeft: "1rem" },
}));

export const cardStyles = makeStyles(() => ({
  cardBox: {
    maxWidth: 345,
    height: "45vh",
    marginTop: "5%",
    marginBottom: "5%",
  },
}));

export const loaderStyles = makeStyles(() => ({
  pageLoader: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "20rem",
  },
}));
