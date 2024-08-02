"use client";
import Checkbox from "@/components/Base/Dropdown";
import Input from "@/components/Base/Input";
import CustomTable from "@/components/Main/Table";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Divider } from "@mui/material";

const Sections = () => {
  let ChecboxValues: any = ["Active", "Non Active"];
  let Heading: any = [
    {
      name: "Code",
      key: "code",
    },
    {
      name: "Description",
      key: "description",
    },
    {
      name: "Active",
      key: "active",
    },
  ];
  let Table: any = [
    {
      code: 1,
      description: "Batch 1 2024 (New Campus)",
      active: "Active",
    },
    {
      code: 2,
      description: "Batch 2 2024 (New Campus)",
      active: "Non Active",
    },
    {
      code: 3,
      description: "Batch 3 2024 (New Campus)",
      active: "Active",
    },
    {
      code: 4,
      description: "Batch 4 2024 (New Campus)",
      active: "Active",
    },
    {
      code: 5,
      description: "Batch 5 2024 (New Campus)",
      active: "Non Active",
    },
    {
      code: 6,
      description: "Batch 6 2024 (New Campus)",
      active: "Non Active",
    },
    {
      code: 7,
      description: "Batch 7 2024 (New Campus)",
      active: "Non Active",
    },
    {
      code: 8,
      description: "Batch 8 2024 (New Campus)",
      active: "Non Active",
    },
    {
      code: 9,
      description: "Batch 5 2024 (New Campus)",
      active: "Non Active",
    },
    {
      code: 10,
      description: "Batch 5 2024 (New Campus)",
      active: "Non Active",
    },
    {
      code: 11,
      description: "Batch 5 2024 (New Campus)",
      active: "Non Active",
    },
    {
      code: 12,
      description: "Batch 5 2024 (New Campus)",
      active: "Non Active",
    },
  ];
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
              className="flex gap-2 cursor-pointer"
              onClick={handleClickOpen}
            >
              <EditIcon />
              <button>Edit</button>
            </div>
            <div
              className="flex gap-2 cursor-pointer"
              onClick={handleClickOpen}
            >
              <Delete />
              <button>Delete</button>
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
              <Checkbox value={ChecboxValues} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center pr-8">
          <p className="font-normal"> Powered By</p>
          <h1 className="text-5xl font-medium">devxonic.</h1>
        </div>
      </div>
      <div className="mt-5">
        <CustomTable Heading={Heading} TableValues={Table} />
      </div>

      <React.Fragment>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          maxWidth={"lg"}
          className="p-0"
        >
          <DialogTitle id="customized-dialog-title">Sections</DialogTitle>
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
              <h2>Save</h2>
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
          </div>
          <div
            style={{ backgroundColor: "#12B27C" }}
            className="text-center text-gray-100 py-2"
          >
            <h5>Sections</h5>
          </div>
          <div className="flex justify-between px-4">
            <h5>USER NAME : {"Admin"}</h5>
            <h5>
              {day}, {date}-{month}-{year}
            </h5>
          </div>
          <div className="flex flex-col gap-2 mx-8 my-5 p-3 border-2 border-gray-400">
            <div className="flex gap-2  justify-between items-center">
              <div className="flex justify-start w-1/2">
                <h3 className="w-1/5 text-right">Code :</h3>
                <input
                  className="rounded-lg h-7 w-4/5 border-gray-200 border-2 outline-none p-1 px-2"
                  id=""
                />
              </div>
              <div className="flex gap-2 items-center justify-start w-1/2">
                <h3>Status :</h3>
                <Checkbox value={ChecboxValues} />
              </div>
            </div>
            <div className="flex justify-start w-1/2">
              <h3 className="w-1/5 text-right">Description :</h3>
              <input
                className="rounded-lg h-7 w-4/5 border-gray-200 border-2 outline-none p-1 px-2"
                id=""
              />
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

export default Sections;
