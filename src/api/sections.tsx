import { apiHandler } from "./apihandler";
import { endpoints } from "./endpoints";

export const getSections = async () => {
  try {
    const response = await apiHandler().get(endpoints.SECTIONS);
    console.log("get All Sections ", response.data.data);
    return response.data.data;
  } catch (error) {
    console.log("Get All Sections ", error);
  }
};

export const createSections = async (data: any) => {
  try {
    const response = await apiHandler().post(endpoints.SECTIONS, data);
    console.log("Create Sections ", response);
    return response.data;
  } catch (error) {
    console.log("Create Sections ", error);
  }
};

export const updateSections = async (data: any ,id:any) => {
  try {
    const response = await apiHandler().put(`${endpoints.SECTIONS}/${id}`, data);
    console.log("Update Sections ", response);
    return response.data;
  } catch (error) {
    console.log("Update Sections ", error);
  }
};

export const deleteSections = async (id: any) => {
  try {
    const response = await apiHandler().delete(`${endpoints.SECTIONS}/${id}`);
    console.log("Delete Sections ", response);
    return response.data;
  } catch (error) {
    console.log("Delete Sections ", error);
  }
};
