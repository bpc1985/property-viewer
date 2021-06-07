import { TableCell, TableHead, TableRow } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles(() => ({
  head: {
    fontWeight: 900,
    fontSize: 16,
  },
}))(TableCell);

const PropertyHeader = ({ headerGroups }) => {
  return (
    <TableHead>
      {headerGroups.map((headerGroup) => (
        <TableRow {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <StyledTableCell {...column.getHeaderProps()}>
              {column.render("Header")}
            </StyledTableCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  );
};

export default PropertyHeader;
