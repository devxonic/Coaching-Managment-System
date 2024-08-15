"use client";
import Checkbox from "@/components/Base/Dropdown";
import Input from "@/components/Base/Input";
import CustomTable from "@/components/Main/Table";
import { CheckBox, Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SaveIcon from "@mui/icons-material/Save";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Divider } from "@mui/material";
import CustomCheckBox from "@/components/Base/Checkbox";
import DataTable from "@/components/Main/DataGrid";

const Receipt = () => {
  // let ChecboxValues: any = ["Active", "Non Active"];
  let Heading: any = [
    {
      name: "Code",
      key: "code",
    },
    {
      name: "Rec. Date",
      key: "resDate",
    },
    {
      name: "Description",
      key: "description",
    },
    {
      name: "Student",
      key: "student",
    },
    {
      name: "Amount",
      key: "amount",
    },
    {
      name: "Status",
      key: "status",
    },
    {
      name: "Created By",
      key: "createdBy",
    },
  ];
  let Table: any = [
    {
      code: 1,
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Active",
      createdBy: "Admin",
    },
    {
      code: 2,
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      code: 3,
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Active",
      createdBy: "Admin",
    },
    {
      code: 4,
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Active",
      createdBy: "Admin",
    },
    {
      code: 5,
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      code: 6,
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      code: 7,
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      code: 8,
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      code: 9,
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      code: 10,
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      code: 11,
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      code: 12,
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
  ];
  let TableValues: any = [
    {
      month: "January",
      amount: "1000",
      description: "Fees for the month of january-2024",
    },
    {
      month: "February",
      amount: "1000",
      description: "Fees for the month of january-2024",
    },
    {
      month: "March",
      amount: "1000",
      description: "Fees for the month of january-2024",
    },
  ];
  let TableHeading: any = [
    {
      name: "Month",
      key: "month",
    },
    {
      name: "Amount",
      key: "amount",
    },
    {
      name: "Description",
      key: "description",
    },
  ];
  const [column, setColumn] = useState([
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "code",
      headerName: "Code",
    },
    {
      field: "resDate",
      headerName: "Rec. Date",
    },
    {
      field: "description",
      headerName: "Description",
    },
    {
      field: "student",
      headerName: "Student",
    },
    {
      field: "amount",
      headerName: "Amount",
    },
    {
      field: "status",
      headerName: "Status",
    },
    {
      field: "createdBy",
      headerName: "Created By",
    },
  ]);
  const [row, setRow] = useState([
    {
      id: "00001",
      code: "0011",
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Active",
      createdBy: "Admin",
    },
    {
      id: "00002",
      code: "0012",
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      id: "00003",
      code: "0013",
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Active",
      createdBy: "Admin",
    },
    {
      id: "00004",
      code: "0014",
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Active",
      createdBy: "Admin",
    },
    {
      id: "00005",
      code: "0015",
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      id: "00006",
      code: "0016",
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      id: "00007",
      code: "0017",
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      id: "00008",
      code: "0018",
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      id: "00009",
      code: "0019",
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      id: "00010",
      code: "0020",
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      id: "00011",
      code: "0021",
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      id: "00012",
      code: "0022",
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      id: "00013",
      code: "0023",
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      id: "00014",
      code: "0024",
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
    {
      id: "00015",
      code: "0025",
      resDate: "12/12/2021",
      description: "Fees for the month of january-2024",
      student: "John Doe",
      amount: "1000",
      status: "Non Active",
      createdBy: "Admin",
    },
  ]);
  const [getId, setGetId] = useState<any>();

  const handlerDelete = () => {
    let data = row.filter((item) => item.id !== getId);
    setRow(data);
    setGetId(null);
  };
  const handlerEdit = () => {
    handleClickOpen();
    let data = row.filter((item) => item.id !== getId);
    setRow(data);
    setGetId(null);
  };

  const [openED, setOpenED] = useState<boolean>(false);
  useEffect(() => {
    setOpenED(getId ? true : false);
    console.log(getId);
  }, [getId]);

  let currentDate = new Date();
  let date = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let dey = currentDate.getDay();
  let year = currentDate.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dey];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <main className="h-full p-0 w-full">
      <div className="h-36 bg-slate-100 shadow-md flex justify-between ">
        <div className="w-full">
          <div
            className="h-2/4  w-full border-b-2 flex items-center gap-10 pl-12"
            style={{ borderColor: "#12B27C" }}
          >
            <div
              className="flex gap-2 cursor-pointer"
              onClick={handleClickOpen}
            >
              <AddIcon />
              <button>Add File</button>
            </div>
            <div
              className={
                openED
                  ? "flex gap-2 cursor-pointer  "
                  : "flex gap-2 cursor-not-allowed text-gray-400"
              }
              onClick={() => (openED ? handlerEdit() : null)}
            >
              <EditIcon />
              <p>Edit</p>
            </div>
            <div
              className={
                openED
                  ? "flex gap-2 cursor-pointer"
                  : "flex gap-2 cursor-not-allowed text-gray-400"
              }
              onClick={() => (openED ? handlerDelete() : null)}
            >
              <Delete />
              <p>Delete</p>
            </div>
            <div className="flex gap-2">
              <img
                width={20}
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCI+CjxwYXRoIGQ9Ik0gMjguODc1IDAgQyAyOC44NTU0NjkgMC4wMDc4MTI1IDI4LjgzMjAzMSAwLjAxOTUzMTMgMjguODEyNSAwLjAzMTI1IEwgMC44MTI1IDUuMzQzNzUgQyAwLjMzNTkzOCA1LjQzMzU5NCAtMC4wMDc4MTI1IDUuODU1NDY5IDAgNi4zNDM3NSBMIDAgNDMuNjU2MjUgQyAtMC4wMDc4MTI1IDQ0LjE0NDUzMSAwLjMzNTkzOCA0NC41NjY0MDYgMC44MTI1IDQ0LjY1NjI1IEwgMjguODEyNSA0OS45Njg3NSBDIDI5LjEwMTU2MyA1MC4wMjM0MzggMjkuNDAyMzQ0IDQ5Ljk0OTIxOSAyOS42MzI4MTMgNDkuNzYxNzE5IEMgMjkuODU5Mzc1IDQ5LjU3NDIxOSAyOS45OTYwOTQgNDkuMjk2ODc1IDMwIDQ5IEwgMzAgNDQgTCA0NyA0NCBDIDQ4LjA5Mzc1IDQ0IDQ5IDQzLjA5Mzc1IDQ5IDQyIEwgNDkgOCBDIDQ5IDYuOTA2MjUgNDguMDkzNzUgNiA0NyA2IEwgMzAgNiBMIDMwIDEgQyAzMC4wMDM5MDYgMC43MTA5MzggMjkuODc4OTA2IDAuNDM3NSAyOS42NjQwNjMgMC4yNDYwOTQgQyAyOS40NDkyMTkgMC4wNTQ2ODc1IDI5LjE2MDE1NiAtMC4wMzUxNTYzIDI4Ljg3NSAwIFogTSAyOCAyLjE4NzUgTCAyOCA2LjUzMTI1IEMgMjcuODY3MTg4IDYuODA4NTk0IDI3Ljg2NzE4OCA3LjEyODkwNiAyOCA3LjQwNjI1IEwgMjggNDIuODEyNSBDIDI3Ljk3MjY1NiA0Mi45NDUzMTMgMjcuOTcyNjU2IDQzLjA4NTkzOCAyOCA0My4yMTg3NSBMIDI4IDQ3LjgxMjUgTCAyIDQyLjg0Mzc1IEwgMiA3LjE1NjI1IFogTSAzMCA4IEwgNDcgOCBMIDQ3IDQyIEwgMzAgNDIgTCAzMCAzNyBMIDM0IDM3IEwgMzQgMzUgTCAzMCAzNSBMIDMwIDI5IEwgMzQgMjkgTCAzNCAyNyBMIDMwIDI3IEwgMzAgMjIgTCAzNCAyMiBMIDM0IDIwIEwgMzAgMjAgTCAzMCAxNSBMIDM0IDE1IEwgMzQgMTMgTCAzMCAxMyBaIE0gMzYgMTMgTCAzNiAxNSBMIDQ0IDE1IEwgNDQgMTMgWiBNIDYuNjg3NSAxNS42ODc1IEwgMTIuMTU2MjUgMjUuMDMxMjUgTCA2LjE4NzUgMzQuMzc1IEwgMTEuMTg3NSAzNC4zNzUgTCAxNC40Mzc1IDI4LjM0Mzc1IEMgMTQuNjY0MDYzIDI3Ljc2MTcxOSAxNC44MTI1IDI3LjMxNjQwNiAxNC44NzUgMjcuMDMxMjUgTCAxNC45MDYyNSAyNy4wMzEyNSBDIDE1LjAzNTE1NiAyNy42NDA2MjUgMTUuMTYwMTU2IDI4LjA1NDY4OCAxNS4yODEyNSAyOC4yODEyNSBMIDE4LjUzMTI1IDM0LjM3NSBMIDIzLjUgMzQuMzc1IEwgMTcuNzUgMjQuOTM3NSBMIDIzLjM0Mzc1IDE1LjY4NzUgTCAxOC42NTYyNSAxNS42ODc1IEwgMTUuNjg3NSAyMS4yMTg3NSBDIDE1LjQwMjM0NCAyMS45NDE0MDYgMTUuMTk5MjE5IDIyLjUxMTcxOSAxNS4wOTM3NSAyMi44NzUgTCAxNS4wNjI1IDIyLjg3NSBDIDE0Ljg5ODQzOCAyMi4yNjU2MjUgMTQuNzEwOTM4IDIxLjcyMjY1NiAxNC41IDIxLjI4MTI1IEwgMTEuODEyNSAxNS42ODc1IFogTSAzNiAyMCBMIDM2IDIyIEwgNDQgMjIgTCA0NCAyMCBaIE0gMzYgMjcgTCAzNiAyOSBMIDQ0IDI5IEwgNDQgMjcgWiBNIDM2IDM1IEwgMzYgMzcgTCA0NCAzNyBMIDQ0IDM1IFoiPjwvcGF0aD4KPC9zdmc+"
              />
              <button>Export to Excel</button>
            </div>
          </div>
          <div className="h-2/4  w-full flex items-center gap-10 pl-12">
            <div className="flex items-center gap-4">
              <p>Find Text</p>
              <Input />
            </div>
            <div className="flex items-center gap-4">
              <p>Status</p>
              {/* <Checkbox value={ChecboxValues} /> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center pr-8">
          <p className="font-normal"> Powered By</p>
          <h1 className="text-5xl font-medium">devxonic.</h1>
        </div>
      </div>
      <div className="mt-5">
        <DataTable rows={row} columns={column} setGetId={setGetId} />
      </div>
      <React.Fragment>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          maxWidth={"lg"}
          className="p-0"
        >
          <DialogTitle id="customized-dialog-title">
            Receipt Vouchers
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Divider />
          <div className="flex px-4 pr-40">
            <div
              className="flex gap-3 p-2 cursor-pointer"
              onClick={handleClose}
            >
              <SaveIcon />
              <h2>Save & Print</h2>
            </div>
            <div
              className="flex gap-3 p-2 cursor-pointer"
              onClick={handleClose}
            >
              <EditIcon />
              <h2>Clear</h2>
            </div>
            <div
              className="flex gap-3 p-2 cursor-pointer"
              onClick={handleClose}
            >
              <Delete />
              <h2>Delete</h2>
            </div>
            <div
              className="flex gap-3 p-2 cursor-pointer"
              onClick={handleClose}
            >
              <HighlightOffIcon />
              <h2>Close</h2>
            </div>
            <div
              className="flex gap-3 p-2 cursor-pointer"
              onClick={handleClose}
            >
              <PostAddIcon />
              <h2>Post</h2>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#12B27C" }}
            className="text-center text-gray-100 py-2"
          >
            <h5>Receipt Vouchers</h5>
          </div>
          <div className="flex justify-between px-4 py-3">
            <h5>USER NAME : {"Admin"}</h5>
            <h5>
              {day}, {date}-{month}-{year}
            </h5>
          </div>
          <div className="flex flex-col gap-2 mx-2  p-3 ">
            <div className="flex w-full">
              <div className="flex justify-end w-1/5">
                <h5>Ref No: </h5>
              </div>
              <div className="flex w-4/5">
                <Input className={"border border-gray-400 w-full"} />
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex justify-end w-1/5">
                <h5>Description: </h5>
              </div>
              <div className="flex w-4/5 ">
                <div className="flex w-3/5">
                  <Input className={"border border-gray-400 w-full"} />
                </div>
                <div className="flex justify-end 2/5 ">
                  <div className="flex justify-end w-2/5">
                    <h5>Date: </h5>
                  </div>
                  <div className="flex w-3/5">
                    <Input className={"border w-full border-gray-400"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex justify-end w-1/5">
                <h5>Students: </h5>
              </div>
              <div className="flex w-4/5 justify-between gap-1">
                <div className="flex w-2/5">
                  <Input className={"border border-gray-400 w-full"} />
                </div>
                <div className="flex  w-3/5 bg-slate-500">
                  <Input className={"border w-full border-gray-400"} />
                </div>
              </div>
            </div>
            <div className="flex w-full mb-5">
              <div className="flex justify-end w-1/5">
                <h5>Class: </h5>
              </div>
              <div className="flex w-4/5 justify-between gap-1">
                <div className="flex w-2/5">
                  <Input className={"border border-gray-400 w-full"} />
                </div>
                <div className="flex  w-3/5 bg-slate-500">
                  <Input className={"border w-full border-gray-400"} />
                </div>
              </div>
            </div>
            <Divider />
          </div>
          <div className="flex gap-1">
            <div className="flex w-1/4 flex-col items-center">
              <h2 className="text-sm font-bold">Month</h2>
              <Input className={"border border-gray-400 w-4/5 px-2 rounded"} />
            </div>
            <div className="flex w-1/4 flex-col items-center">
              <h2 className="text-sm font-bold">Amount</h2>
              <Input className={"border border-gray-400 w-4/5 px-2 rounded"} />
            </div>
            <div className="flex w-1/4 flex-col items-center">
              <h2 className="text-sm font-bold">Desciption</h2>
              <Input className={"border border-gray-400 w-4/5 px-2 rounded"} />
            </div>
            <div className="flex w-1/5 flex-col gap-2 p-3">
              <button
                style={{ backgroundColor: "#12B27C" }}
                className="text-gray-100 p-2 h-7 rounded-md flex items-center justify-center"
              >
                Add Row
              </button>
              <button
                style={{ backgroundColor: "#12B27C" }}
                className="text-gray-100 p-2 h-7 rounded-md flex items-center justify-center"
              >
                Delete Row
              </button>
            </div>
          </div>
          <div className="flex mx-5">
            <CustomTable Heading={TableHeading} TableValues={TableValues} />
          </div>
          <div className="flex flex-col my-5 mx-5 gap-2">
            <div className="flex w-full gap-2">
              <div className="flex w-1/2 justify-end">
                <h5>Sub Total : </h5>
                <Input className={"border border-gray-400 w-2/4"} />
              </div>
              <div className="flex w-1/2 justify-end">
                <h5>Discount : </h5>
                <Input className={"border border-gray-400 w-2/4"} />
              </div>
            </div>
            <div className="flex w-full gap-2">
              <div className="flex w-1/2 justify-end">
                <h5>Inc . Admission Fee : </h5>
                <Input className={"border border-gray-400 w-2/4"} />
              </div>
              <div className="flex w-1/2 justify-end">
                <h5>Amount : </h5>
                <Input className={"border border-gray-400 w-2/4"} />
              </div>
            </div>
            <div className="flex items-center ml-6">
              <CustomCheckBox />
              <p>Discount In %</p>
            </div>
          </div>
          <Divider />
          <div className="flex justify-center p-2">
            <h5>Sort By</h5>
          </div>
        </Dialog>
      </React.Fragment>
    </main>
  );
};

export default Receipt;
