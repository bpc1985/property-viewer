import React from "react";
import { Button, Grid } from "@material-ui/core";

const ActionButtons = ({ idx, onView, onEdit, onDelete }) => {
  return (
    <Grid container spacing={1}>
      <Grid item sm={4} md={3}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => onView(idx)}
        >
          View
        </Button>
      </Grid>
      <Grid item sm={4} md={3}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => onEdit(idx)}
        >
          Edit
        </Button>
      </Grid>
      <Grid item sm={4} md={3}>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => onDelete(idx)}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default ActionButtons;
