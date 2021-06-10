import PropTypes from "prop-types";
import { Grid, Button, DialogActions } from "@material-ui/core";
import Input from "components/Input";

const PropertyForm = ({ control, onCancel }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Input
          control={control}
          label="Name"
          name="name"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Input
          control={control}
          label="Number"
          name="number"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Input
          control={control}
          label="City"
          name="city"
          margin="normal"
          variant="outlined"
          fullWidth
        />

        <Input
          control={control}
          label="Municipality"
          name="municipality"
          margin="normal"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <Input
          control={control}
          label="Street"
          name="street"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Input
          control={control}
          label="Postal Code"
          name="postalCode"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Input
          control={control}
          label="Country"
          name="country"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Input
          control={control}
          label="Description"
          name="description"
          margin="normal"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} align="right">
        <DialogActions>
          <Button onClick={onCancel}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Grid>
    </Grid>
  );
};

PropertyForm.propTypes = {
  control: PropTypes.object.isRequired,
  onCancel: PropTypes.func,
};

export default PropertyForm;
