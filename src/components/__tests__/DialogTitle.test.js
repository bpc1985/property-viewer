import React from "react";
import DialogTitle from "components/DialogTitle";
import { render } from "@testing-library/react";

test("DialogTitle show only title", () => {
  const { getByText } = render(<DialogTitle>My Dialog Title 1</DialogTitle>);
  getByText("My Dialog Title 1");
});

test("DialogTitle show title and close icon", () => {
  const { getByText, getByTestId } = render(
    <DialogTitle onClose={() => {}}>My Dialog Title 2</DialogTitle>
  );
  getByText("My Dialog Title 2");
  getByTestId("dialogCloseIcon");
});
