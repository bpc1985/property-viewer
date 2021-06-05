import { combineReducers } from "redux";
import { ADD_PROPERTY, EDIT_PROPERTY, DELETE_PROPERTY } from "./constants";
import preloadedState from "./mockData";

const properties = (state = preloadedState, action) => {
  switch (action.type) {
    case ADD_PROPERTY:
      return [...state, { ...action.newProperty }];

    case EDIT_PROPERTY:
      return state.map((property) =>
        property.id === action.editProperty.id
          ? { ...property, ...action.editProperty }
          : property
      );

    case DELETE_PROPERTY:
      return state.filter((property) => property.id !== action.id);

    default:
      return state;
  }
};

export default combineReducers({ properties });
