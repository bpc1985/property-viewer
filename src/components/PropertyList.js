import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useTable, useExpanded } from "react-table";

import {
  Grid,
  Button,
  CssBaseline,
  Table as MaUTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const RowSubComponent = ({ row }) => (
  <Grid container spacing={1}>
    <Grid item xs={2}>
      <Grid container>
        <pre>
          <code>{JSON.stringify(row.original)}</code>
        </pre>
      </Grid>
    </Grid>
  </Grid>
);

const Table = ({ columns, data }) => {
  const { getTableProps, headerGroups, rows, prepareRow, visibleColumns } =
    useTable(
      {
        columns,
        data,
      },
      useExpanded
    );

  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableCell {...column.getHeaderProps()}>
                {column.render("Header")}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <>
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
              {row.isExpanded && (
                <TableRow>
                  <TableCell colSpan={visibleColumns.length}>
                    <RowSubComponent row={row} />
                  </TableCell>
                </TableRow>
              )}
            </>
          );
        })}
      </TableBody>
    </MaUTable>
  );
};

const PropertyList = () => {
  const data = useSelector((state) => state.properties);
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
        Cell: ({ row }) => {
          // const rowIdx = row.id;
          return (
            <div>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={() => console.log("Edit Property")}
              >
                Edit
              </Button>
              <Button
                size="small"
                variant="contained"
                color="secondary"
                onClick={() => console.log("Delete Property")}
              >
                Delete
              </Button>
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <div>
      <CssBaseline />
      <Table columns={columns} data={data} />
    </div>
  );
};

export default PropertyList;
