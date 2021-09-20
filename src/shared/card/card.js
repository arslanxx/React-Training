import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IMAGE_PATH } from "../../store/constants";

export default function ActionAreaCard({
  title,
  overView,
  image,
  id,
  history,
  component,
}) {
  const handleOnClick = () => {
    history.push("/details/" + id + "/" + component);
  };
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "45vh",
        marginTop: "5%",
        marginBottom: "5%",
      }}
      onClick={handleOnClick}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={IMAGE_PATH + image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {overView}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
