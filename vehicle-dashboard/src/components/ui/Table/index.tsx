/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable, DataTableBaseProps } from "primereact/datatable";
import { Column, ColumnProps } from "primereact/column";
import { CustomDataTable } from "styles/global.style";
export type DataTableColumnProps = ColumnProps & {
  columnclasses?: string;
};
type TableProps = DataTableBaseProps<any> & {
  classes?: string;
  products: any[];
  columns: DataTableColumnProps[];
};
const CustomTable = ({ classes, products, columns, ...props }: TableProps) => {
  return (
    <CustomDataTable Outerclasses={classes}>
      <DataTable value={products} dataKey="id" {...props}>
        {columns.map((col, index) => (
          <Column key={index} {...col} className={col.columnclasses} />
        ))}
      </DataTable>
    </CustomDataTable>
  );
};

export default CustomTable;
