import React from "react";
import { Stack, Skeleton } from "@mui/material";
export default function ReacktSkeleton() {
  return (
    <Stack spacing={1}>
      <Skeleton
        style={{ marginTop: "20px" }}
        variant="rectangular"
        width={210}
        height={118}
      />
    </Stack>
  );
}
