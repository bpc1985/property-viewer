import { TableCell, TableHead, TableRow } from "@material-ui/core";

const PropertyHeader = ({ headerGroups }) => {
  return (
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
  );
};

export default PropertyHeader;
