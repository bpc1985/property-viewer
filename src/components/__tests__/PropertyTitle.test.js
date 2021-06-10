import React from "react";
import PropertyTitle from "components/PropertyTitle";
import { render } from "@testing-library/react";

test("PropertyTitle should show title and add new button", () => {
  const { getByText } = render(<PropertyTitle />);
  getByText("Property CRUD");
  getByText("Add New Property");
});
