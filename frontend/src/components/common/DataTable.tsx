import React from "react";
import { Pencil, Trash2 } from "lucide-react";

interface Column {
  key: string;
  label: string;
}

interface DataTableProps<T> {
  columns: Column[];
  data: T[];
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
}

export default function DataTable<T extends Record<string, any>>({
  columns,
  data,
  onEdit,
  onDelete,
}: DataTableProps<T>) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        background: "#fff",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <thead>
        <tr
          style={{
            background: "#f8fafc",
          }}
        >
          {columns.map((column) => (
            <th
              key={column.key}
              style={{
                textAlign: "left",
                padding: "16px",
                borderBottom: "1px solid #e2e8f0",
                color: "#334155",
              }}
            >
              {column.label}
            </th>
          ))}

          {(onEdit || onDelete) && (
            <th
              style={{
                width: 120,
                textAlign: "center",
              }}
            >
              Acciones
            </th>
          )}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td
                key={column.key}
                style={{
                  padding: "16px",
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                {String(row[column.key] ?? "")}
              </td>
            ))}

            {(onEdit || onDelete) && (
              <td
                style={{
                  textAlign: "center",
                }}
              >
                {onEdit && (
                  <button
                    onClick={() => onEdit(row)}
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      marginRight: 10,
                    }}
                  >
                    <Pencil size={18} color="#2563eb" />
                  </button>
                )}

                {onDelete && (
                  <button
                    onClick={() => onDelete(row)}
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <Trash2 size={18} color="#dc2626" />
                  </button>
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}