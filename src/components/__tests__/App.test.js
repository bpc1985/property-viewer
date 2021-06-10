import React from "react";
import renderWithProviders from "utils/renderWithProviders";
import App from "../../App";

test("App", () => {
  const { getByText } = renderWithProviders(<App />, {
    reduxState: {},
  });
  getByText("Property CRUD");
  getByText("Name");
  getByText("City");
  getByText("Country");
  getByText("Description");
  getByText("Actions");

  getByText("Own House");
  getByText("Helsinki");
  getByText("Finland");
  getByText("My house");
});
