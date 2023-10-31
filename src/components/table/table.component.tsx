import { Checkbox, ScrollArea, Table, rem } from "@mantine/core";
import classes from "./table.module.css";

interface MyTableProps {
  data: any[]; // Change 'any' to the appropriate data type if known
  selection: any[]; // Change 'any' to the appropriate data type if known
  toggleRow: (row: any) => void; // Change 'any' to the data type of a row
  toggleAll: () => void;
  headers: { key: string; title: string }[]; // Change 'string' to the appropriate data type if known
}

const TableComponenet = ({
  data = [],
  selection = [],
  toggleRow,
  toggleAll,
  headers = [],
}: MyTableProps) => {
  const rows = data.map((item: any) => {
    const selected = selection.includes(item.id);
    return (
      <Table.Tr
        key={item.id}
        className={`h-min ${selected ? classes.rowSelected : ""}`}
      >
        <Table.Td>
          <Checkbox checked={selected} onChange={() => toggleRow(item.id)} />
        </Table.Td>
        {headers.map((head: any) => (
          <Table.Td>{item[head.key]}</Table.Td>
        ))}
      </Table.Tr>
    );
  });

  return (
    <Table miw={800} verticalSpacing="sm">
      <Table.Thead className={classes.header}>
        <Table.Tr>
          <Table.Th style={{ width: rem(20) }}>
            <Checkbox
              onChange={toggleAll}
              checked={selection.length === data.length}
              indeterminate={
                selection.length > 0 && selection.length !== data.length
              }
            />
          </Table.Th>
          {headers.map((head: any) => (
            <Table.Th>{head.title}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default TableComponenet;
