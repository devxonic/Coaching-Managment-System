// import * as React from "react";
// import {
//   DataGrid,
//   GridToolbarContainer,
//   GridToolbarExport,
// } from "@mui/x-data-grid";
// import { useDemoData } from "@mui/x-data-grid-generator";

// function CustomToolbar() {
//   return (
//     <GridToolbarContainer>
//       <GridToolbarExport />
//     </GridToolbarContainer>
//   );
// }

// export default function ExportCustomToolbar(props: any) {
//   const row = props.rows;
//   const column = props.columns;
//   const setRow = props.setRow;
//   const getRowIds = (data: any) => {
//     console.log(data.id);
//     confirm("Are you sure you want to delete this row?")
//       ? callthis(data.id)
//       : console.log("No");
//   };
//   const callthis = (id: any) => {
//     const newRows = row.filter((row: any) => row.id !== id);
//     setRow(newRows);
//   };

//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
//       <DataGrid
//         rows={row}
//         columns={column}
//         checkboxSelection={true}
//         onCellClick={getRowIds}
//         slots={{
//           toolbar: CustomToolbar,
//         }}
//       />
//     </div>
//   );
// }
