"use client";
import Dropdown from "@/components/Base/Dropdown";
import Input from "@/components/Base/Input";
import { Clear, Delete, Update } from "@mui/icons-material";
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
import DataTable from "@/components/Main/DataGrid";
import { createYears, deleteYears, getYears, updateYears } from "@/api/years";

type FormData = {
  id: number;
  YCODE: string;
  YEARS: number;
  REMARKS: string;
  ACTIVE: string;
}[];

const Years = () => {
  let ChecboxValues: any = ["Active", "Non Active"];
  let Heading: any = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "YCODE", headerName: "Code", width: 200 },
    { field: "REMARKS", headerName: "Remarks", width: 200 },
    { field: "YEARS", headerName: "Years", width: 250 },
    { field: "ACTIVE", headerName: "Status", width: 200 },
  ];

  const [getId, setGetId] = React.useState<string[]>([""]);
  const [formData, setFormData] = React.useState<FormData>();
  const [openED, setOpenED] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);
  const [update, setUpdate] = React.useState({});
  const [dropdownValue, setDropdownValue] = React.useState<string>("");
  const [filterFormData, setFilterFormData] = React.useState<any>({
    YCODE: "",
    YEARS: "",
    REMARKS: "",
    ACTIVE: "",
  });
  const [modalData, setModalData] = React.useState<any>({
    YCODE: "",
    YEARS: "",
    REMARKS: "",
    ACTIVE: "",
  });
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

  const addYears = () => {
    let data = {
      ...modalData,
      ACTIVE: modalData.ACTIVE === "Active" ? true : false,
    };
    createYears(data)
      .then((res) => {
        console.log(res);
        setUpdate({ id: data.YCODE });
      })
      .catch((err) => {
        console.log(err);
      });
    setModalData("");
    handleClose();
  };
  const handlerEdit = () => {
    setModalData(formData?.find((data) => data.id === Number(getId[1])));
    handleClickOpen();
  };
  const handlerUpdate = () => {
    let id = getId[1];
    let data = {
      ...modalData,
      ACTIVE: modalData.ACTIVE === "Active" ? true : false,
    };
    console.log("Update Handler", data);
    updateYears(data, id)
      .then((res) => {
        console.log(res);
        setUpdate({ id: id });
      })
      .catch((err) => {
        console.log(err);
      });
    handleClose();
  };
  const handlerDelete = () => {
    console.log("Delete Handler", getId);
    let id = getId[1];
    deleteYears(id)
      .then((res) => {
        console.log("Delete Response", res);
        setUpdate({ id: id });
      })
      .catch((err) => {
        console.log("Delete Error", err);
      });
    setGetId([""]);
  };
  const clearSection = () => {
    setModalData({
      YCODE: "",
      YEARS: "",
      REMARKS: "",
      ACTIVE: "",
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    clearSection();
  };

  const inputSearch = (value: string) => {
    setDropdownValue("");
    setValue(value);
    let data = formData?.filter((data) => {
      return (
        value === "" ||
        data.REMARKS.toLowerCase().includes(value.toLowerCase()) ||
        data.YEARS.toString().toLowerCase().includes(value)
      );
    }); //filtering the data
    setFilterFormData(data);
  };
  const dropdownSearch = (value: any) => {
    setValue("");
    setDropdownValue(value);
    let data = formData?.filter((data) => {
      console.log(data.ACTIVE, value);
      return value === "" || data.ACTIVE === value;
    });
    setFilterFormData(data);
  };
  React.useEffect(() => {
    getYears()
      .then((res) => {
        let rowData = res;
        let data = rowData?.map((data: any) => {
          return {
            id: data.YID,
            YCODE: data.YCODE,
            YEARS: data.YEARS,
            REMARKS: data.REMARKS,
            ACTIVE: data.ACTIVE ? "Active" : "Non Active",
          };
        });
        console.log(data);
        setFormData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);
  React.useEffect(() => {
    setOpenED(getId.length > 1 ? true : false);
  }, [getId]);

  return (
    <>
      <main className="h-full p-0 w-full">
        <div className="h-36 bg-slate-100 shadow-md flex justify-between ">
          <div className="w-full">
            <div
              className="h-2/4  w-full border-b-2 flex items-center gap-10 pl-12"
              style={{ borderColor: "#12B27C" }}
            >
              <div
                className={
                  openED
                    ? "flex gap-2 cursor-not-allowed text-gray-400"
                    : "flex gap-2 cursor-pointer"
                }
                onClick={() => (openED ? null : handleClickOpen())}
              >
                <AddIcon />
                <button>Add File</button>
              </div>
              <div
                className={
                  openED
                    ? "flex gap-2 cursor-pointer"
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
              <div className="flex gap-2 cursor-pointer">
                <img
                  width={20}
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCI+CjxwYXRoIGQ9Ik0gMjguODc1IDAgQyAyOC44NTU0NjkgMC4wMDc4MTI1IDI4LjgzMjAzMSAwLjAxOTUzMTMgMjguODEyNSAwLjAzMTI1IEwgMC44MTI1IDUuMzQzNzUgQyAwLjMzNTkzOCA1LjQzMzU5NCAtMC4wMDc4MTI1IDUuODU1NDY5IDAgNi4zNDM3NSBMIDAgNDMuNjU2MjUgQyAtMC4wMDc4MTI1IDQ0LjE0NDUzMSAwLjMzNTkzOCA0NC41NjY0MDYgMC44MTI1IDQ0LjY1NjI1IEwgMjguODEyNSA0OS45Njg3NSBDIDI5LjEwMTU2MyA1MC4wMjM0MzggMjkuNDAyMzQ0IDQ5Ljk0OTIxOSAyOS42MzI4MTMgNDkuNzYxNzE5IEMgMjkuODU5Mzc1IDQ5LjU3NDIxOSAyOS45OTYwOTQgNDkuMjk2ODc1IDMwIDQ5IEwgMzAgNDQgTCA0NyA0NCBDIDQ4LjA5Mzc1IDQ0IDQ5IDQzLjA5Mzc1IDQ5IDQyIEwgNDkgOCBDIDQ5IDYuOTA2MjUgNDguMDkzNzUgNiA0NyA2IEwgMzAgNiBMIDMwIDEgQyAzMC4wMDM5MDYgMC43MTA5MzggMjkuODc4OTA2IDAuNDM3NSAyOS42NjQwNjMgMC4yNDYwOTQgQyAyOS40NDkyMTkgMC4wNTQ2ODc1IDI5LjE2MDE1NiAtMC4wMzUxNTYzIDI4Ljg3NSAwIFogTSAyOCAyLjE4NzUgTCAyOCA2LjUzMTI1IEMgMjcuODY3MTg4IDYuODA4NTk0IDI3Ljg2NzE4OCA3LjEyODkwNiAyOCA3LjQwNjI1IEwgMjggNDIuODEyNSBDIDI3Ljk3MjY1NiA0Mi45NDUzMTMgMjcuOTcyNjU2IDQzLjA4NTkzOCAyOCA0My4yMTg3NSBMIDI4IDQ3LjgxMjUgTCAyIDQyLjg0Mzc1IEwgMiA3LjE1NjI1IFogTSAzMCA4IEwgNDcgOCBMIDQ3IDQyIEwgMzAgNDIgTCAzMCAzNyBMIDM0IDM3IEwgMzQgMzUgTCAzMCAzNSBMIDMwIDI5IEwgMzQgMjkgTCAzNCAyNyBMIDMwIDI3IEwgMzAgMjIgTCAzNCAyMiBMIDM0IDIwIEwgMzAgMjAgTCAzMCAxNSBMIDM0IDE1IEwgMzQgMTMgTCAzMCAxMyBaIE0gMzYgMTMgTCAzNiAxNSBMIDQ0IDE1IEwgNDQgMTMgWiBNIDYuNjg3NSAxNS42ODc1IEwgMTIuMTU2MjUgMjUuMDMxMjUgTCA2LjE4NzUgMzQuMzc1IEwgMTEuMTg3NSAzNC4zNzUgTCAxNC40Mzc1IDI4LjM0Mzc1IEMgMTQuNjY0MDYzIDI3Ljc2MTcxOSAxNC44MTI1IDI3LjMxNjQwNiAxNC44NzUgMjcuMDMxMjUgTCAxNC45MDYyNSAyNy4wMzEyNSBDIDE1LjAzNTE1NiAyNy42NDA2MjUgMTUuMTYwMTU2IDI4LjA1NDY4OCAxNS4yODEyNSAyOC4yODEyNSBMIDE4LjUzMTI1IDM0LjM3NSBMIDIzLjUgMzQuMzc1IEwgMTcuNzUgMjQuOTM3NSBMIDIzLjM0Mzc1IDE1LjY4NzUgTCAxOC42NTYyNSAxNS42ODc1IEwgMTUuNjg3NSAyMS4yMTg3NSBDIDE1LjQwMjM0NCAyMS45NDE0MDYgMTUuMTk5MjE5IDIyLjUxMTcxOSAxNS4wOTM3NSAyMi44NzUgTCAxNS4wNjI1IDIyLjg3NSBDIDE0Ljg5ODQzOCAyMi4yNjU2MjUgMTQuNzEwOTM4IDIxLjcyMjY1NiAxNC41IDIxLjI4MTI1IEwgMTEuODEyNSAxNS42ODc1IFogTSAzNiAyMCBMIDM2IDIyIEwgNDQgMjIgTCA0NCAyMCBaIE0gMzYgMjcgTCAzNiAyOSBMIDQ0IDI5IEwgNDQgMjcgWiBNIDM2IDM1IEwgMzYgMzcgTCA0NCAzNyBMIDQ0IDM1IFoiPjwvcGF0aD4KPC9zdmc+"
                />
                <button>Export to Excel</button>
              </div>
            </div>
            <div className="h-2/4  w-full flex items-center gap-5 pl-12">
              <div className="flex items-center gap-3 w-5/12">
                <p className="w-3/12">Find Text</p>
                <Input
                  className="rounded-lg h-9 w-8/12 border-gray-200 border-2 outline-none p-1 px-2"
                  value={value}
                  onChange={(e: any) => {
                    inputSearch(e.target.value);
                  }}
                />
              </div>
              <div className="flex items-center gap-4 w-5/12">
                <p>Status</p>
                <Dropdown
                  data={ChecboxValues}
                  value={dropdownValue}
                  onChange={(e: any) => {
                    dropdownSearch(e);
                  }}
                />
              </div>
              <div className="flex items-center gap-4 w-2/12">
                <p
                  onClick={() => {
                    setFilterFormData([]);
                    setValue("");
                    setDropdownValue("");
                  }}
                  style={{ backgroundColor: "#12B27C" }}
                  className="text-sm rounded-md py-2 px-2 cursor-pointer text-white flex align-middle gap-2"
                >
                  <Clear fontSize="small" />
                  Clear All
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center pr-8">
            <p className="font-normal"> Powered By</p>
            <h1 className="text-5xl font-medium">devxonic.</h1>
          </div>
        </div>
        <div className="mt-5">
          <DataTable
            rows={
              filterFormData?.length >= 1
                ? filterFormData
                : value.length > 1
                ? filterFormData
                : formData
            }
            columns={Heading}
            setGetId={setGetId}
            getId={getId}
          />
        </div>
      </main>
      <React.Fragment>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          maxWidth={"lg"}
          className="p-0"
        >
          <DialogTitle id="customized-dialog-title">Years</DialogTitle>
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
              className={
                openED
                  ? "flex gap-3 p-2 cursor-not-allowed text-gray-400"
                  : "flex gap-3 p-2 cursor-pointer"
              }
              onClick={() => (openED ? null : addYears())}
            >
              <SaveIcon />
              <h2>Add</h2>
            </div>
            <div
              className={
                openED
                  ? "flex gap-3 p-2 cursor-pointer"
                  : "flex gap-3 p-2 cursor-not-allowed text-gray-400"
              }
              onClick={() => (openED ? handlerUpdate() : null)}
            >
              <Update />
              <h2>Update</h2>
            </div>
            <div
              className="flex gap-3 p-2 cursor-pointer"
              onClick={clearSection}
            >
              <EditIcon />
              <h2>Clear</h2>
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
            <h5>Years</h5>
          </div>
          <div className="flex justify-between px-4">
            <h5>USER NAME : {"Admin"}</h5>
            <h5>
              {day}, {date}-{month}-{year}
            </h5>
          </div>
          <div className="flex flex-col gap-2 mx-8 my-5 p-3 border-2 border-gray-400">
            <div className="flex gap-2 justify-between items-center">
              <div className="flex justify-start w-6/12">
                <h3 className="w-2/6 text-right">Code :</h3>
                <Input
                  className="rounded-lg h-7 w-4/6  border-gray-200 border-2 outline-none p-1 px-2"
                  onChange={(e: any) =>
                    setModalData({ ...modalData, YCODE: e.target.value })
                  }
                  value={modalData.YCODE}
                />
              </div>
              <div className="flex gap-2 items-center justify-start w-6/12">
                <h3>Status :</h3>
                <Dropdown
                  data={ChecboxValues}
                  value={modalData.ACTIVE}
                  onChange={(e: any) => {
                    setModalData({ ...modalData, ACTIVE: e });
                  }}
                />
              </div>
            </div>
            <div className="flex justify-start gap-2 w-full">
              <div className="w-2/12">
                <h3 className="text-right">Years :</h3>
              </div>
              <div className="w-10/12">
                <Input
                  className="rounded-lg h-7 w-full  border-gray-200 border-2 outline-none p-1 px-2"
                  onChange={(e: any) =>
                    setModalData({ ...modalData, YEARS: e.target.value })
                  }
                  value={modalData.YEARS}
                />
              </div>
            </div>
            <div className="flex justify-start gap-2 w-full">
              <div className="w-2/12">
                <h3 className="text-right">Remarks :</h3>
              </div>
              <div className="w-10/12">
                <Input
                  className="rounded-lg h-7 w-full  border-gray-200 border-2 outline-none p-1 px-2"
                  onChange={(e: any) =>
                    setModalData({ ...modalData, REMARKS: e.target.value })
                  }
                  value={modalData.REMARKS}
                />
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex justify-center p-2">
            <h5>Sort By</h5>
          </div>
        </Dialog>
      </React.Fragment>
    </>
  );
};
export default Years;
