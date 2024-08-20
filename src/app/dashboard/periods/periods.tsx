"use client";
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
import Dropdown from "@/components/Base/Dropdown";
import ComboInput from "@/components/Base/Autocomplete";
import { getYears } from "@/api/years";
import {
  createPeriods,
  deletePeriods,
  getPeriods,
  updatePeriods,
} from "@/api/periods";
import CustomAlert from "@/components/Base/Alert";

type FormData = {
  PRDID: number;
  YEARS: string;
  PRDMONTH: string;
  PRDSTATUS: string;
}[];

const Periods = () => {
  let ChecboxValues: any = ["Active", "InActive", "Pending", "Completed"];
  let Heading: any = [
    { field: "PRDID", headerName: "ID", width: 100 },
    { field: "YEARS", headerName: "Year", width: 200 },
    { field: "PRDMONTH", headerName: "Month", width: 200 },
    { field: "PRDSTATUS", headerName: "Status", width: 250 },
  ];

  const [getId, setGetId] = React.useState<string[]>([""]);
  const [formData, setFormData] = React.useState<FormData>();
  const [openED, setOpenED] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);
  const [update, setUpdate] = React.useState({});
  const [openAlert, setOpenAlert] = React.useState<any>({});
  const [dropdownValue, setDropdownValue] = React.useState<string>("");
  const [yearData, setYearData] = React.useState<any>([]);
  const [filterFormData, setFilterFormData] = React.useState<any>({
    YCODE: "",
    Periods: "",
    REMARKS: "",
    ACTIVE: "",
  });
  const [modalData, setModalData] = React.useState<any>({
    YCODE: "",
    PRDMONTHS: [
      { month: "", status: "" },
      { month: "", status: "" },
      { month: "", status: "" },
      { month: "", status: "" },
      { month: "", status: "" },
      { month: "", status: "" },
      { month: "", status: "" },
      { month: "", status: "" },
      { month: "", status: "" },
      { month: "", status: "" },
      { month: "", status: "" },
      { month: "", status: "" },
    ],
  });
  const [editModalData, setEditModalData] = React.useState<any>();
  const [addEdit, setAddEdit] = React.useState<boolean>(true);

  console.log("EDIT MODAL DATA", editModalData);
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

  const addPeriods = () => {
    createPeriods(modalData)
      .then((res) => {
        console.log(res);
        setUpdate({ id: modalData.YCODE });
        setOpenAlert({
          open: true,
          Message: "Periods Added Successfully",
          type: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        setOpenAlert({
          open: true,
          Message: "Periods Not Added",
          type: "error",
        });
      });
    setModalData("");
    handleClose();
  };
  const handlerEdit = () => {
    let editData = formData?.find((data) => data.PRDID === Number(getId[1]));
    console.log("Edit Data", editData);
    setEditModalData(formData?.find((data) => data.PRDID === Number(getId[1])));
    handleClickOpen(false);
    console.log("Edit Handler", editModalData);
  };
  const handlerUpdate = () => {
    let id = getId[1];
    console.log("Update Handler", editModalData);
    updatePeriods(editModalData, id)
      .then((res) => {
        console.log(res);
        setUpdate(id);
        setYearData([]);
        setModalData({});
        handleClose();
        setUpdate({ id: id });
        setOpenAlert({
          open: true,
          Message: "Periods Updated Successfully",
          type: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        setOpenAlert({
          open: true,
          Message: "Periods Not Updated",
          type: "error",
        });
      });
  };
  const handlerDelete = () => {
    console.log("Delete Handler", getId);
    let id = getId[1];
    deletePeriods(id)
      .then((res) => {
        console.log("Delete Response", res);
        setUpdate({ id: id });
        setOpenAlert({
          open: true,
          Message: "Periods Deleted Successfully",
          type: "success",
        });
      })
      .catch((err) => {
        console.log("Delete Error", err);
        setOpenAlert({
          open: true,
          Message: "Periods Not Deleted",
          type: "error",
        });
      });
    setGetId([""]);
  };
  const clearSection = () => {
    setModalData({
      YCODE: "",
      Periods: "",
      REMARKS: "",
      ACTIVE: "",
    });
  };

  const handleClickOpen = (val: boolean) => {
    setAddEdit(val);
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
        data.PRDMONTH.toLowerCase().includes(value.toLowerCase()) ||
        data.YEARS.toString().toLowerCase().includes(value)
      );
    }); //filtering the data
    setFilterFormData(data);
  };
  const dropdownSearch = (value: any) => {
    setValue("");
    setDropdownValue(value);
    let data = formData?.filter((data) => {
      return value === "" || data.PRDSTATUS === value;
    });
    setFilterFormData(data);
  };

  const handlerYearCode = (value: any) => {
    yearData?.map((data: any) => {
      if (data.label === value) {
        setYearData(data);
        setModalData({
          ...modalData,
          YCODE: value,
          PRDMONTHS: [
            { month: `January-${data.label}`, status: "Active" },
            { month: `February-${data.label}`, status: "Active" },
            { month: `March-${data.label}`, status: "Active" },
            { month: `April-${data.label}`, status: "Active" },
            { month: `May-${data.label}`, status: "Active" },
            { month: `June-${data.label}`, status: "Active" },
            { month: `July-${data.label}`, status: "Active" },
            { month: `August-${data.label}`, status: "Active" },
            { month: `September-${data.label}`, status: "Active" },
            { month: `October-${data.label}`, status: "Active" },
            { month: `November-${data.label}`, status: "Active" },
            { month: `December-${data.label}`, status: "Active" },
          ],
        });
      }
    });
  };

  React.useEffect(() => {
    getPeriods()
      .then((res) => {
        let rowData = res;
        let data = rowData?.map((data: any) => {
          return {
            id: data.PRDID,
            PRDID: data.PRDID,
            YEARS: data.YEARS,
            PRDMONTH: data.PRDMONTH,
            PRDSTATUS: data.PRDSTATUS,
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

  React.useEffect(() => {
    getYears()
      .then((res) => {
        let data = res?.map((data: any) => {
          return {
            id: data.YID,
            label: data.YEARS,
            remarks: data.REMARKS,
          };
        });
        setYearData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <CustomAlert
        open={openAlert.open}
        setOpen={setOpenAlert}
        message={openAlert.Message}
        type={openAlert.type}
      />
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
                onClick={() => (openED ? null : handleClickOpen(true))}
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
          <div className="sticky">
            <DialogTitle id="customized-dialog-title">Periods</DialogTitle>
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
                onClick={() => (openED ? null : addPeriods())}
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
              <h5>Periods</h5>
            </div>
          </div>
          {addEdit === true ? (
            <div className="overflow-scroll overflow-x-hidden">
              <div className="flex justify-between px-4">
                <h5>USER NAME : {"Admin"}</h5>
                <h5>
                  {day}, {date}-{month}-{year}
                </h5>
              </div>
              <div className="flex flex-col gap-2 mx-8 my-5 p-3 border-2 border-gray-400">
                <div className="flex items-center">
                  <h3 className="w-2/12 text-right">Code :</h3>
                  <ComboInput
                    value={modalData.YCODE == "" ? null : modalData.YCODE}
                    size="small"
                    styles={{ width: "90%" }}
                    label="Year Code"
                    option={yearData}
                    onChange={(e: any) =>
                      handlerYearCode(e == null ? null : e.label)
                    }
                  />
                </div>
                <div className="flex justify-start gap-2 w-full">
                  <div className="w-2/12">
                    <h3 className="text-right">Years :</h3>
                  </div>
                  <div className="w-10/12">
                    <Input
                      className="rounded-lg h-7 w-full  border-gray-200 border-2 outline-none p-1 px-2"
                      value={yearData?.label}
                    />
                  </div>
                </div>
                <div className="flex justify-start items-center gap-2 w-full">
                  <div className="w-2/12">
                    <h3 className="text-right text-sm">Remarks :</h3>
                  </div>
                  <div className="w-10/12">
                    <Input
                      className="rounded-lg h-7 w-full  border-gray-200 border-2 outline-none p-1 px-2"
                      value={yearData?.remarks}
                    />
                  </div>
                </div>
                {yearData.label > 1 ? (
                  <div className="h-fit bg-slate-50 p-2">
                    <div className="flex gap-1 justify-around">
                      <p className="font-semibold">Months</p>
                      <p className="font-semibold">Status</p>
                    </div>
                    {modalData.PRDMONTHS?.map((data: any, index: number) => {
                      return (
                        <div key={index} className="flex gap-1 mt-2">
                          <Input
                            className="rounded-lg h-10 w-full  border-gray-200 border-2 outline-none p-1 px-2"
                            disabled={true}
                            value={data.month}
                            onChange={(e: any) => {
                              setModalData({
                                ...modalData,
                                month: e.target.value,
                              });
                            }}
                          />
                          <Dropdown
                            data={[
                              "Active",
                              "InActive",
                              "Pending",
                              "Completed",
                            ]}
                            value={data.status}
                            onChange={(e: any) => {
                              setModalData({
                                ...modalData,
                                PRDMONTHS: modalData.PRDMONTHS.map(
                                  (val: any, i: number) => {
                                    return i === index
                                      ? { month: data.month, status: e }
                                      : val;
                                  }
                                ),
                              });
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
          {addEdit === false ? (
            <div className="overflow-scroll overflow-x-hidden">
              <div className="flex justify-between px-4">
                <h5>USER NAME : {"Admin"}</h5>
                <h5>
                  {day}, {date}-{month}-{year}
                </h5>
              </div>
              <div className="flex flex-col gap-2 mx-8 my-5 p-3 border-2 border-gray-400">
                <div className="flex justify-start items-center gap-2 w-full">
                  <div className="w-2/12">
                    <h3 className="text-right">Code :</h3>
                  </div>
                  <div className="w-10/12">
                    <Input
                      disabled={true}
                      className="rounded-lg h-7 w-full  border-gray-200 border-2 outline-none p-1 px-2"
                      value={editModalData?.year}
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
                      value={editModalData?.YEARS}
                      onChange={(e: any) => {
                        setEditModalData({
                          ...editModalData,
                          YEARS: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-start gap-2 w-full">
                  <div className="w-2/12">
                    <h3 className="text-right">Months :</h3>
                  </div>
                  <div className="w-10/12">
                    <Input
                      className="rounded-lg h-7 w-full  border-gray-200 border-2 outline-none p-1 px-2"
                      value={editModalData?.PRDMONTH}
                      onChange={(e: any) => {
                        setEditModalData({
                          ...editModalData,
                          PRDMONTH: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-start items-center gap-2 w-full">
                  <div className="w-2/12">
                    <h3 className="text-right text-sm">Status :</h3>
                  </div>
                  <div className="w-10/12">
                    <Dropdown
                      data={["Active", "InActive", "Pending", "Completed"]}
                      value={editModalData?.PRDSTATUS}
                      onChange={(e: any) => {
                        setEditModalData({
                          ...editModalData,
                          PRDSTATUS: e,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <Divider />
        </Dialog>
      </React.Fragment>
    </>
  );
};
export default Periods;
