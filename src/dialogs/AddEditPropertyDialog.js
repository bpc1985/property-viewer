import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { isEmpty } from "lodash";
import { v4 as uuidv4 } from "uuid";
import { useSnackbar } from "notistack";

import { DialogContent } from "@material-ui/core";
import DialogTitle from "components/DialogTitle";
import PropertyForm from "components/PropertyForm";
import schema from "api/schema";
import { getApiEncoding } from "api/api";
import { addProperty, editProperty } from "redux/actions";

const AddEditPropertyDialog = ({ onCancel, idx }) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const selectedProperty = useSelector((state) =>
    !isEmpty(idx) ? state.properties.find((p) => p.id === idx) : {}
  );

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: selectedProperty,
  });

  const onSubmit = async (data) => {
    try {
      const coordinates = await getApiEncoding(data);
      const newProperty = { id: uuidv4(), ...data, coordinates };
      if (!isEmpty(idx)) {
        dispatch(editProperty(newProperty));
        enqueueSnackbar(`Property ${data.name} has been updated successfully`, {
          variant: "warning",
        });
      } else {
        dispatch(addProperty(newProperty));
        enqueueSnackbar("New property is created successfully", {
          variant: "success",
        });
      }
      onCancel();
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogTitle onClose={onCancel}>Edit Property</DialogTitle>
      <DialogContent>
        <PropertyForm control={control} onCancel={onCancel} />
      </DialogContent>
    </form>
  );
};

export default AddEditPropertyDialog;
