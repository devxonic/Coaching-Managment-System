import { apiHandler } from "./apihandler";
import { endpoints } from "./endpoints";

export const getClasses = async () => {
  try {
    const response = await apiHandler().get(endpoints.CLASSES);
    console.log("get All Classes ", response.data);
    return response.data;
  } catch (error) {
    console.log("Get All Classes ", error);
  }
};

export const createClass = async (data: any) => {
  try {
    const response = await apiHandler().post(endpoints.CLASSES, data);
    console.log("Create Class ", response);
    return response.data;
  } catch (error) {
    console.log("Create Class ", error);
  }
};

export const updateClass = async (data: any, id: any) => {
  try {
    const response = await apiHandler().put(`${endpoints.CLASSES}/${id}`, data);
    console.log("Update Class ", response);
    return response.data;
  } catch (error) {
    console.log("Update Class ", error);
  }
};

export const deleteClass = async (id: any) => {
  try {
    const response = await apiHandler().delete(`${endpoints.CLASSES}/${id}`);
    console.log("Delete Class ", response);
    return response.data;
  } catch (error) {
    console.log("Delete Class ", error);
  }
};
