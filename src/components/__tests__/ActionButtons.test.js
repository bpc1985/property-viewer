import React from "react";
import ActionButtons from "components/ActionButtons";
import { render } from "@testing-library/react";

test("ActionButtons should show 3 buttons", () => {
  const { getByText } = render(<ActionButtons />);
  getByText("Edit");
  getByText("Edit");
  getByText("Delete");
});
