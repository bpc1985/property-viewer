import { TableCell, TableRow } from "@material-ui/core";
import PropTypes from "prop-types";
import DisplayMap from "components/DisplayMap";
import { generateAddress } from "utils";

const PropertyRow = ({ row, visibleColumns }) => {
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
            <DisplayMap
              name={row.original.name}
              address={generateAddress(row.original)}
              coordinates={row.original.coordinates}
            />
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

PropertyRow.propTypes = {
  row: PropTypes.object.isRequired,
  visibleColumns: PropTypes.array.isRequired,
};

export default PropertyRow;
