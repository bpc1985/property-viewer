import { useTable, useExpanded } from "react-table";
import PropTypes from "prop-types";
import { Table as MaUTable, TableBody } from "@material-ui/core";
import PropertyHeader from "./PropertyHeader";
import PropertyRow from "./PropertyRow";

const PropertyTable = ({ columns, data }) => {
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
      <PropertyHeader headerGroups={headerGroups} />
      <TableBody>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <PropertyRow
              key={row.id}
              row={row}
              visibleColumns={visibleColumns}
            />
          );
        })}
      </TableBody>
    </MaUTable>
  );
};

PropertyTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default PropertyTable;
