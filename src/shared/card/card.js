import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IMAGE_PATH } from "../../store/constants";
import { cardStyles } from "../../styles/appStyles";
import Rating from "@mui/material/Rating";

export default function ActionAreaCard({
  title,
  overView,
  image,
  id,
  history,
  component,
  rating,
}) {
  const classes = cardStyles();
  const handleOnClick = () => {
    history.push("/details/" + id + "/" + component);
  };
  return (
    <Card className={classes.cardBox} onClick={handleOnClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={IMAGE_PATH + image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          {component !== "person" && (
            <Rating
              name={title}
              value={rating}
              precision={0.5}
              max={6}
              readOnly
            />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
