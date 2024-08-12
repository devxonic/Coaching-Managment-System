import { apiHandler } from "./apihandler";
import { endpoints } from "./endpoints";

export const getStudents = async () => {
  try {
    const response = await apiHandler().get(endpoints.STUDENTS);
    console.log("get All Students ", response.data);
    return response.data;
  } catch (error) {
    console.log("Get All Students ", error);
  }
};

export const createStudent = async (data: any) => {
  try {
    const response = await apiHandler().post(endpoints.STUDENTS, data);
    console.log("Create Student ", response);
    return response.data;
  } catch (error) {
    console.log("Create Student ", error);
  }
};

export const updateStudent = async (data: any, id: any) => {
  try {
    const response = await apiHandler().put(
      `${endpoints.STUDENTS}/${id}`,
      data
    );
    console.log("Update Student ", response);
    return response.data;
  } catch (error) {
    console.log("Update Student ", error);
  }
};

export const deleteStudent = async (id: any) => {
  try {
    const response = await apiHandler().delete(`${endpoints.STUDENTS}/${id}`);
    console.log("Delete Student ", response);
    return response.data;
  } catch (error) {
    console.log("Delete Student ", error);
  }
};
