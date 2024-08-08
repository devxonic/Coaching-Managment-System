import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export default function DataTable(props: any) {
  const { rows, columns, setGetId, getId } = props;

  const getRowIds = (data: any) => {
    setGetId(data.id);
    console.log("getRowIds", data.id);
  };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onCellClick={getRowIds}
        initialState={{
          pagination: {
            paginationModel: {
              page: 0,
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, rows.length]}
        checkboxSelection
      />
    </div>
  );
}
