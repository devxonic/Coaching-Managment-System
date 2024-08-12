import { apiHandler } from "./apihandler";
import { endpoints } from "./endpoints";

export const getSubjects = async () => {
  try {
    const response = await apiHandler().get(endpoints.SUBJECTS);
    console.log("get All Subjects ", response.data.data);
    return response.data;
  } catch (error) {
    console.log("Get All Subjects ", error);
  }
};

export const createSubjects = async (data: any) => {
  try {
    const response = await apiHandler().post(endpoints.SUBJECTS, data);
    console.log("Create Subjects ", response);
    return response.data.data;
  } catch (error) {
    console.log("Create Subjects ", error);
  }
};

export const updateSubjects = async (data: any, id: any) => {
  try {
    const response = await apiHandler().put(
      `${endpoints.SUBJECTS}/${id}`,
      data
    );
    console.log("Update Subjects ", response);
    return response.data;
  } catch (error) {
    console.log("Update Subjects ", error);
  }
};

export const deleteSubjects = async (id: any) => {
  try {
    const response = await apiHandler().delete(`${endpoints.SUBJECTS}/${id}`);
    console.log("Delete Subjects ", response);
    return response.data;
  } catch (error) {
    console.log("Delete Subjects ", error);
  }
};
