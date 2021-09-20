import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailComponent({
  detailData,
  detailReq,
  detailLoader,
  error,
  match,
}) {
  useEffect(() => {
    detailReq(match.params);
  }, []);
  return (
    <div>
      <h1>Details Component - {detailData.original_title}</h1>
    </div>
  );
}
