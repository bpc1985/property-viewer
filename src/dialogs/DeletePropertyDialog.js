import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { Button, DialogContent, DialogActions } from "@material-ui/core";
import DialogTitle from "components/DialogTitle";
import { deleteProperty } from "redux/actions";

const DeletePropertyDialog = ({ onCancel, idx }) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const selectedProperty = useSelector((state) =>
    state.properties.find((p) => p.id === idx)
  );

  const handleDelete = () => {
    dispatch(deleteProperty(idx));
    enqueueSnackbar(
      `Property ${selectedProperty?.name} has been deleted successfully`,
      { variant: "error" }
    );
    onCancel();
  };

  return (
    <>
      <DialogTitle onClose={onCancel} align="center">
        Delete Property
      </DialogTitle>
      <DialogContent>
        <div>
          Are you sure that you want to delete property "
          {selectedProperty?.name}" ?
        </div>
        <DialogActions>
          <Button color="primary" onClick={onCancel}>
            No
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Yes
          </Button>
        </DialogActions>
      </DialogContent>
    </>
  );
};

export default DeletePropertyDialog;
