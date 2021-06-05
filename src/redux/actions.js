import { ADD_PROPERTY, EDIT_PROPERTY, DELETE_PROPERTY } from "./constants";

export const addProperty = (newProperty) => ({
  type: ADD_PROPERTY,
  newProperty,
});

export const editProperty = (editProperty) => ({
  type: EDIT_PROPERTY,
  editProperty,
});

export const deleteProperty = (id) => ({
  type: DELETE_PROPERTY,
  id,
});
