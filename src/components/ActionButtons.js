import React from "react";
import PropTypes from "prop-types";
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

ActionButtons.propTypes = {
  idx: PropTypes.string,
  onView: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ActionButtons;
