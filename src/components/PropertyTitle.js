import { useCallback } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { useDialog } from "hooks/useDialog";

const PropertyTitle = () => {
  const dialog = useDialog();

  const onAdd = useCallback(() => {
    dialog({
      componentName: "AddEditPropertyDialog",
      useForm: true,
      dialogProps: {
        maxWidth: "lg",
      },
      contentProps: {},
    });
  }, [dialog]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Typography variant="h4" component="h4">
          Property CRUD
        </Typography>
      </Grid>
      <Grid item xs={6} align="right">
        <Button variant="contained" color="primary" onClick={onAdd}>
          Add New Property
        </Button>
      </Grid>
    </Grid>
  );
};

export default PropertyTitle;
