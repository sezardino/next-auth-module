import { type ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export type TableColumn<T> = {
  accessor: keyof T | "_";
  head: () => React.ReactNode;
  cell: (row: T) => React.ReactNode;
};

export interface TableProps<T extends { id: string }>
  extends ComponentPropsWithoutRef<"div"> {
  columns: TableColumn<T>[];
  data: T[];
}

export const Table = <T extends { id: string }>(props: TableProps<T>) => {
  const { columns, data, className, ...rest } = props;

  return (
    <div
      {...rest}
      className={twMerge(
        "relative overflow-x-auto shadow-md sm:rounded-lg",
        className
      )}
    >
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((column, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {column.head()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {columns.map((column, index) => (
                <td
                  key={index}
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {column.cell(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
