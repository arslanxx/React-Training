import React from "react";
import { Stack, Skeleton } from "@mui/material";
import { skeletonCardStyle } from "../../styles/appStyles";

export default function ReacktSkeleton() {
  const classes = skeletonCardStyle();
  return (
    <Stack spacing={1}>
      <Skeleton
        className={classes.mt}
        variant="rectangular"
        width={210}
        height={118}
      />
    </Stack>
  );
}
