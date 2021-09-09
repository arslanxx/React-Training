import { Button } from "@material-ui/core";
import React, { Fragment, useState, useEffect } from "react";

export default function TodoList({ list, handleSingleDelete }) {
  const [listing, setListing] = useState(list);
  useEffect(() => {
    setListing(list);
  }, [list]);
  return (
    <ul>
      {listing.map((elem, index) => {
        return (
          <Fragment>
            <li
              style={{ display: "list-item" }}
              key={`section-${elem}-${index}-list`}
            >
              <h3 id={`section-${elem}-${index}-name`}>{elem}</h3>
              <Button
                type="button"
                id={`section-${elem}-${index}-btn`}
                onClick={(e) => handleSingleDelete(index)}
                variant="contained"
                color="secondary"
              >
                Delete
              </Button>
            </li>
          </Fragment>
        );
      })}
    </ul>
  );
  // }
}
