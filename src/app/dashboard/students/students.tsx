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
import ComboInput from "@/components/Base/Autocomplete";
import { getClasses } from "@/api/classes";
import { getSubjects } from "@/api/subjects";
import {
  createStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from "@/api/students";
import CustomAlert from "@/components/Base/Alert";

type FormData = {
  id: number;
  SCODE: number;
  name: string;
  s_of: string;
  status: any;
}[];

const Students = () => {
  let dropdownValues: any = ["Active", "Non Active"];
  let gender: any = ["Male", "Female"];
  let Heading: any = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "SCODE", headerName: "Code", width: 200 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "s_of", headerName: "S/o | D/o", width: 250 },
    { field: "status", headerName: "Status", width: 200 },
  ];

  const [getId, setGetId] = React.useState<string[]>([""]);
  const [formData, setFormData] = React.useState<FormData>();
  const [openED, setOpenED] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);
  const [update, setUpdate] = React.useState({});
  const [openAlert, setOpenAlert] = React.useState<any>({});
  const [classData, setClassData] = React.useState<any>([]);
  const [subjectData, setSubjectData] = React.useState<any>([]);
  const [dropdownValue, setDropdownValue] = React.useState<string>("");
  const [filterFormData, setFilterFormData] = React.useState<any>({
    SCODE: "",
    name: "",
    status: "",
  });
  const [modalData, setModalData] = React.useState<any>({
    SCODE: "",
    name: "",
    s_of: "",
    gender: "",
    classId: "",
    batchId: "",
    subjectId: "",
    fees_amount: "",
    admissionFee: "",
    phone: "",
    cnic: "",
    email: "",
    address: "",
    status: "",
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

  const addStudents = () => {
    let data = {
      ...modalData,
      status: modalData.status === "Active" ? 0 : 1,
      gender: modalData.gender === "Male" ? 0 : 1,
    };
    console.log("Add Handler", data);
    createStudent(data)
      .then((res) => {
        console.log(res);
        setUpdate({ id: data.SCODE });
        setOpenAlert({
          open: true,
          setOpen: setOpenAlert,
          type: "success",
          message: "Student Added Successfully",
        });
      })
      .catch((err) => {
        console.log(err);
        setOpenAlert({
          open: true,
          setOpen: setOpenAlert,
          type: "error",
          message: "Student Not Added",
        });
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
      status: modalData.status === "Active" ? true : false,
    };
    console.log("Update Handler", data);
    updateStudent(data, id)
      .then((res) => {
        console.log(res);
        setUpdate({ id: id });
        setOpenAlert({
          open: true,
          setOpen: setOpenAlert,
          type: "success",
          message: "Student Updated Successfully",
        });
      })
      .catch((err) => {
        console.log(err);
        setOpenAlert({
          open: true,
          setOpen: setOpenAlert,
          type: "error",
          message: "Student Not Updated",
        });
      });
    handleClose();
  };
  const handlerDelete = () => {
    console.log("Delete Handler", getId);
    let id = getId[1];
    deleteStudent(id)
      .then((res) => {
        console.log("Delete Response", res);
        setUpdate({ id: id });
        setOpenAlert({
          open: true,
          setOpen: setOpenAlert,
          type: "success",
          message: "Student Deleted Successfully",
        });
      })
      .catch((err) => {
        console.log("Delete Error", err);
        setOpenAlert({
          open: true,
          setOpen: setOpenAlert,
          type: "error",
          message: "Student Not Deleted",
        });
      });
    setGetId([""]);
  };
  const clearSection = () => {
    setModalData({
      SCODE: "",
      name: "",
      s_of: "",
      gender: "",
      classId: "",
      batchId: "",
      subjectId: "",
      fees_amount: "",
      admissionFee: "",
      phone: "",
      cnic: "",
      email: "",
      address: "",
      status: "",
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
        data.name.toLowerCase().includes(value.toLowerCase()) ||
        data.SCODE.toString().toLowerCase().includes(value)
      );
    }); //filtering the data
    setFilterFormData(data);
  };
  const dropdownSearch = (value: any) => {
    setValue("");
    setDropdownValue(value);
    let data = formData?.filter((data) => {
      return value === "" || data.status === value;
    });
    setFilterFormData(data);
  };
  React.useEffect(() => {
    getStudents()
      .then((res) => {
        let rowData = res;
        let data = rowData?.map((data: any) => {
          return {
            id: data.id,
            SCODE: data.id,
            name: data.name,
            s_of: data.s_of,
            status: data.status == 0 ? "Active" : "Non Active",
            gender: data.gender == 0 ? "Male" : "female",
            classId: data.classId,
            batchId: data.batchId,
            subjectId: data.subjectId,
            fees_amount: data.fees_amount,
            admissionFee: data.admissionFee,
            phone: data.phone,
            cnic: data.cnic,
            email: data.email,
            address: data.address,
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
    getClasses()
      .then((res) => {
        let data = res.map((data: any) => {
          return { id: data.classId, label: data.CDESC };
        });
        setClassData(data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    getSubjects().then((res) => {
      let data = res.map((data: any) => {
        return { id: data.SUBCODE, label: data.SUBDESC };
      });
      setSubjectData(data);
      console.log(res);
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
              className="h-2/4  w-full border-b-2 flex items-center md:gap-5 md:pl-6 lg:gap-10 lg:pl-12"
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
                <p>Add</p>
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
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  width={20}
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCI+CjxwYXRoIGQ9Ik0gMjguODc1IDAgQyAyOC44NTU0NjkgMC4wMDc4MTI1IDI4LjgzMjAzMSAwLjAxOTUzMTMgMjguODEyNSAwLjAzMTI1IEwgMC44MTI1IDUuMzQzNzUgQyAwLjMzNTkzOCA1LjQzMzU5NCAtMC4wMDc4MTI1IDUuODU1NDY5IDAgNi4zNDM3NSBMIDAgNDMuNjU2MjUgQyAtMC4wMDc4MTI1IDQ0LjE0NDUzMSAwLjMzNTkzOCA0NC41NjY0MDYgMC44MTI1IDQ0LjY1NjI1IEwgMjguODEyNSA0OS45Njg3NSBDIDI5LjEwMTU2MyA1MC4wMjM0MzggMjkuNDAyMzQ0IDQ5Ljk0OTIxOSAyOS42MzI4MTMgNDkuNzYxNzE5IEMgMjkuODU5Mzc1IDQ5LjU3NDIxOSAyOS45OTYwOTQgNDkuMjk2ODc1IDMwIDQ5IEwgMzAgNDQgTCA0NyA0NCBDIDQ4LjA5Mzc1IDQ0IDQ5IDQzLjA5Mzc1IDQ5IDQyIEwgNDkgOCBDIDQ5IDYuOTA2MjUgNDguMDkzNzUgNiA0NyA2IEwgMzAgNiBMIDMwIDEgQyAzMC4wMDM5MDYgMC43MTA5MzggMjkuODc4OTA2IDAuNDM3NSAyOS42NjQwNjMgMC4yNDYwOTQgQyAyOS40NDkyMTkgMC4wNTQ2ODc1IDI5LjE2MDE1NiAtMC4wMzUxNTYzIDI4Ljg3NSAwIFogTSAyOCAyLjE4NzUgTCAyOCA2LjUzMTI1IEMgMjcuODY3MTg4IDYuODA4NTk0IDI3Ljg2NzE4OCA3LjEyODkwNiAyOCA3LjQwNjI1IEwgMjggNDIuODEyNSBDIDI3Ljk3MjY1NiA0Mi45NDUzMTMgMjcuOTcyNjU2IDQzLjA4NTkzOCAyOCA0My4yMTg3NSBMIDI4IDQ3LjgxMjUgTCAyIDQyLjg0Mzc1IEwgMiA3LjE1NjI1IFogTSAzMCA4IEwgNDcgOCBMIDQ3IDQyIEwgMzAgNDIgTCAzMCAzNyBMIDM0IDM3IEwgMzQgMzUgTCAzMCAzNSBMIDMwIDI5IEwgMzQgMjkgTCAzNCAyNyBMIDMwIDI3IEwgMzAgMjIgTCAzNCAyMiBMIDM0IDIwIEwgMzAgMjAgTCAzMCAxNSBMIDM0IDE1IEwgMzQgMTMgTCAzMCAxMyBaIE0gMzYgMTMgTCAzNiAxNSBMIDQ0IDE1IEwgNDQgMTMgWiBNIDYuNjg3NSAxNS42ODc1IEwgMTIuMTU2MjUgMjUuMDMxMjUgTCA2LjE4NzUgMzQuMzc1IEwgMTEuMTg3NSAzNC4zNzUgTCAxNC40Mzc1IDI4LjM0Mzc1IEMgMTQuNjY0MDYzIDI3Ljc2MTcxOSAxNC44MTI1IDI3LjMxNjQwNiAxNC44NzUgMjcuMDMxMjUgTCAxNC45MDYyNSAyNy4wMzEyNSBDIDE1LjAzNTE1NiAyNy42NDA2MjUgMTUuMTYwMTU2IDI4LjA1NDY4OCAxNS4yODEyNSAyOC4yODEyNSBMIDE4LjUzMTI1IDM0LjM3NSBMIDIzLjUgMzQuMzc1IEwgMTcuNzUgMjQuOTM3NSBMIDIzLjM0Mzc1IDE1LjY4NzUgTCAxOC42NTYyNSAxNS42ODc1IEwgMTUuNjg3NSAyMS4yMTg3NSBDIDE1LjQwMjM0NCAyMS45NDE0MDYgMTUuMTk5MjE5IDIyLjUxMTcxOSAxNS4wOTM3NSAyMi44NzUgTCAxNS4wNjI1IDIyLjg3NSBDIDE0Ljg5ODQzOCAyMi4yNjU2MjUgMTQuNzEwOTM4IDIxLjcyMjY1NiAxNC41IDIxLjI4MTI1IEwgMTEuODEyNSAxNS42ODc1IFogTSAzNiAyMCBMIDM2IDIyIEwgNDQgMjIgTCA0NCAyMCBaIE0gMzYgMjcgTCAzNiAyOSBMIDQ0IDI5IEwgNDQgMjcgWiBNIDM2IDM1IEwgMzYgMzcgTCA0NCAzNyBMIDQ0IDM1IFoiPjwvcGF0aD4KPC9zdmc+"
                />
                <p className="md:text-xs lg:text-base">Export to Excel</p>
              </div>
            </div>
            <div className="h-2/4  w-full flex items-center md:gap-2 md:pl-5 lg:gap-5 lg:pl-12">
              <div className="flex items-center md:gap-1 lg:gap-3 md:w-5/12 xl:w-5/12">
                <p className="md:w-4/12 lg:w-3/12 md:text-xs xl:text-base">
                  Find Text
                </p>
                <Input
                  className="rounded-lg h-9 md:w-8/12 lg:w-8/12 border-gray-200 border-2 outline-none p-1 px-2"
                  value={value}
                  onChange={(e: any) => {
                    inputSearch(e.target.value);
                  }}
                />
              </div>
              <div className="flex items-center md:gap-1 lg:gap-4 md:w-4/12  xl:w-5/12">
                <p>Status</p>
                <Dropdown
                  data={dropdownValues}
                  value={dropdownValue}
                  onChange={(e: any) => {
                    dropdownSearch(e);
                  }}
                />
              </div>
              <div className="flex items-center justify-end md:gap- xl:gap-4 md:w-3/12 xl:w-2/12">
                <p
                  onClick={() => {
                    setFilterFormData([]);
                    setValue("");
                    setDropdownValue("");
                  }}
                  style={{
                    fontSize: 14,
                    backgroundColor: "#12B27C",
                    alignItems: "center",
                  }}
                  className="lg:text-sm rounded-md sm:p-1 md:p-1 lg:p-1 xl:p-2 cursor-pointer text-white flex align-middle gap-2"
                >
                  <Clear sx={{ fontSize: 16 }} />
                  Clear All
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center md:pr-4 lg:pr-8">
            <p className="font-normal"> Powered By</p>
            <h1 className="lg:text-5xl md:text-3xl font-medium">devxonic.</h1>
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
            <DialogTitle id="customized-dialog-title">Students</DialogTitle>
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
                onClick={() => (openED ? null : addStudents())}
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
              <h5>Students</h5>
            </div>
          </div>
          <div className="overflow-scroll overflow-x-hidden">
            <div className="flex justify-between px-4">
              <h5>USER NAME : {"Admin"}</h5>
              <h5>
                {day}, {date}-{month}-{year}
              </h5>
            </div>
            <div className="flex flex-col gap-2 mx-8 my-5 p-3 border-2 border-gray-200 rounded-sm">
              <div className="flex gap-2  justify-between items-center">
                <div className="flex justify-start w-1/2 items-center">
                  <h3 className="w-1/5 text-right text-xs">Code:</h3>
                  <Input
                    className="rounded-lg h-7 border-gray-200 border-2 outline-none p-1 px-2"
                    onChange={(e: any) =>
                      setModalData({ ...modalData, SCODE: e.target.value })
                    }
                    value={modalData.SCODE}
                  />
                </div>
                <div className="flex items-center justify-start w-1/2">
                  <div className="w-1/6">
                    <h3 className="text-xs text-right">Status:</h3>
                  </div>
                  <div className="w-5/6">
                    <Dropdown
                      data={dropdownValues}
                      value={modalData.status}
                      onChange={(e: any) => {
                        setModalData({ ...modalData, status: e });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-start w-1/2 items-center">
                <h3 className="w-1/5 text-right text-xs">Name:</h3>
                <Input
                  className="rounded-lg h-7 border-gray-200 border-2 outline-none p-1 px-2"
                  onChange={(e: any) =>
                    setModalData({ ...modalData, name: e.target.value })
                  }
                  value={modalData.name}
                />
              </div>
              <div className="flex justify-start w-1/2 items-center">
                <h3 className="w-1/5 text-right text-xs">S/o D/o:</h3>
                <Input
                  className="rounded-lg h-7 border-gray-200 border-2 outline-none p-1 px-2"
                  onChange={(e: any) =>
                    setModalData({ ...modalData, s_of: e.target.value })
                  }
                  value={modalData.s_of}
                />
              </div>
              <div className="flex gap-2  justify-between items-center">
                <div className="flex items-center justify-start w-1/2">
                  <h3 className="text-xs text-right w-1/5">Gender:</h3>
                  <div className="w-4/5">
                    <Dropdown
                      data={gender}
                      value={modalData.gender}
                      onChange={(e: any) => {
                        setModalData({ ...modalData, gender: e });
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-start w-1/2 items-center">
                  <h3 className="w-1/5 text-right text-xs">Email Id:</h3>
                  <Input
                    className="rounded-lg h-7 border-gray-200 border-2 outline-none p-1 px-2"
                    onChange={(e: any) =>
                      setModalData({ ...modalData, email: e.target.value })
                    }
                    value={modalData.email}
                  />
                </div>
              </div>
              <div className="flex gap-2  justify-between items-center">
                <div className="flex justify-start w-1/2 items-center">
                  <h3 className="w-1/5 text-right text-xs">Class:</h3>
                  <ComboInput
                    value={modalData.classId}
                    size="small"
                    styles={{ width: "77%" }}
                    label="Class"
                    option={classData}
                    onChange={(e: any) =>
                      setModalData({
                        ...modalData,
                        classId: e == null ? "" : e.label,
                      })
                    }
                  />
                </div>
                <div className="flex gap-2 items-center justify-start w-1/2">
                  <Input
                    className="rounded-lg h-7 w-full border-gray-200 border-2 outline-none p-1 px-2"
                    value={modalData.classId ? modalData.classId : ""}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="flex gap-2  justify-between items-center">
                <div className="flex justify-start w-1/2 items-center">
                  <h3 className="w-1/5 text-right text-xs">Batch:</h3>
                  <ComboInput
                    value={modalData.batchId}
                    size="small"
                    styles={{ width: "77%" }}
                    label="Batch"
                    option={classData}
                    onChange={(e: any) =>
                      setModalData({
                        ...modalData,
                        batchId: e == null ? "" : e.label,
                      })
                    }
                  />
                </div>
                <div className="flex gap-2 items-center justify-start w-1/2">
                  <Input
                    className="rounded-lg h-7 w-full border-gray-200 border-2 outline-none p-1 px-2"
                    value={modalData.batchId ? modalData.batchId : ""}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="flex gap-2  justify-between items-center">
                <div className="flex justify-start w-1/2 items-center">
                  <h3 className="w-1/5 text-right text-xs">Subject:</h3>
                  <ComboInput
                    value={modalData.subjectId}
                    size="small"
                    styles={{ width: "77%" }}
                    label="Subject"
                    option={subjectData}
                    onChange={(e: any) =>
                      setModalData({
                        ...modalData,
                        subjectId: e == null ? "" : e.label,
                      })
                    }
                  />
                </div>
                <div className="flex gap-2 items-center justify-start w-1/2">
                  <Input
                    className="rounded-lg h-7 w-full border-gray-200 border-2 outline-none p-1 px-2"
                    value={modalData.subjectId ? modalData.subjectId : ""}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="flex gap-2  justify-between items-center">
                <div className="flex justify-start w-1/2 items-center">
                  <h3 className="w-1/5 text-right text-xs">Fees:</h3>
                  <Input
                    className="rounded-lg h-7 border-gray-200 border-2 outline-none p-1 px-2"
                    onChange={(e: any) =>
                      setModalData({
                        ...modalData,
                        fees_amount: e.target.value,
                      })
                    }
                    value={modalData.fees_amount}
                  />
                </div>
                <div className="flex gap-2 items-center justify-start w-1/2">
                  <h3 className="text-xs">Admission Fees :</h3>
                  <Input
                    className="rounded-lg h-7 border-gray-200 border-2 outline-none p-1 px-2"
                    onChange={(e: any) =>
                      setModalData({
                        ...modalData,
                        admissionFee: e.target.value,
                      })
                    }
                    value={modalData.admissionFee}
                  />
                </div>
              </div>
              <div className="flex gap-2  justify-between items-center">
                <div className="flex justify-start w-1/2 items-center">
                  <h3 className="w-1/5 text-right text-xs">Phone No:</h3>
                  <Input
                    className="rounded-lg h-7 border-gray-200 border-2 outline-none p-1 px-2"
                    onChange={(e: any) =>
                      setModalData({ ...modalData, phone: e.target.value })
                    }
                    value={modalData.phone}
                  />
                </div>
                <div className="flex gap-2 items-center justify-start w-1/2">
                  <h3 className="text-xs">CNIC No :</h3>
                  <Input
                    className="rounded-lg h-7 border-gray-200 border-2 outline-none p-1 px-2"
                    onChange={(e: any) =>
                      setModalData({ ...modalData, cnic: e.target.value })
                    }
                    value={modalData.cnic}
                  />
                </div>
              </div>
              <div className="flex gap-2  justify-between items-center">
                <div className="flex justify-start w-1/2 items-center">
                  <h3 className="w-1/5 text-right text-xs">Address:</h3>
                  <Input
                    className="rounded-lg h-7 w-full border-gray-200 border-2 outline-none p-1 px-2"
                    onChange={(e: any) =>
                      setModalData({ ...modalData, address: e.target.value })
                    }
                    value={modalData.address}
                  />
                </div>
              </div>
            </div>
          </div>
          <Divider />
        </Dialog>
      </React.Fragment>
    </>
  );
};
export default Students;
