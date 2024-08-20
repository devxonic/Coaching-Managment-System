import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export default function DataTable(props: any) {
  const { rows, columns, setGetId, getId } = props;

  const getRowIds = (data: any) => {
    if (getId.includes(data.id.toString())) {
      let index = getId.indexOf(data.id.toString());
      getId.splice(index, 1);
      setGetId([...getId]);
      console.log(getId);
      return;
    } else {
      getId.push(data.id.toString());
      setGetId([...getId]);
      console.log(getId);
    }
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
              pageSize: 25,
            },
          },
        }}
        pageSizeOptions={[25, 50, 75, 100]}
        checkboxSelection
      />
    </div>
  );
}
