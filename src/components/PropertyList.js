import React, { useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useDialog } from "hooks/useDialog";

import { CssBaseline } from "@material-ui/core";
import PropertyTable from "components/PropertyTable";
import ActionButtons from "components/ActionButtons";

const PropertyList = () => {
  const dialog = useDialog();
  const data = useSelector((state) => state.properties);

  const onView = useCallback(
    (idx) => {
      dialog({
        componentName: "ViewPropertyDialog",
        useForm: true,
        dialogProps: {
          maxWidth: "lg",
        },
        contentProps: {
          idx,
        },
      });
    },
    [dialog]
  );

  const onEdit = useCallback(
    (idx) => {
      dialog({
        componentName: "AddEditPropertyDialog",
        useForm: true,
        dialogProps: {
          maxWidth: "lg",
        },
        contentProps: {
          idx,
        },
      });
    },
    [dialog]
  );

  const onDelete = useCallback(
    (idx) => {
      dialog({
        componentName: "DeletePropertyDialog",
        useForm: true,
        dialogProps: {
          maxWidth: "lg",
        },
        contentProps: {
          idx,
        },
      });
    },
    [dialog]
  );

  const columns = useMemo(
    () => [
      {
        Header: () => null,
        id: "expander",
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "👇" : "👉"}
          </span>
        ),
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => (
          <ActionButtons
            idx={row.original.id}
            onView={onView}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ),
      },
    ],
    [onView, onEdit, onDelete]
  );

  return (
    <div>
      <CssBaseline />
      <PropertyTable columns={columns} data={data} />
    </div>
  );
};

export default PropertyList;
