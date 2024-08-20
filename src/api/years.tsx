import { apiHandler } from "./apihandler";
import { endpoints } from "./endpoints";

export const getYears = async () => {
  try {
    const response = await apiHandler().get(endpoints.YEARS);
    console.log("get All Years ", response.data.data);
    return response.data.data;
  } catch (error) {
    console.log("Error Get All Years ", error);
    throw error;
  }
};

export const createYears = async (data: any) => {
  try {
    const response = await apiHandler().post(endpoints.YEARS, data);
    console.log("Create Years ", response);
    return response.data;
  } catch (error) {
    console.log("Error Create Years ", error);
    throw error;
  }
};

export const updateYears = async (data: any, id: any) => {
  try {
    const response = await apiHandler().put(`${endpoints.YEARS}/${id}`, data);
    console.log("Update Years ", response);
    return response.data;
  } catch (error) {
    console.log("Error Update Years ", error);
    throw error;
  }
};

export const deleteYears = async (id: any) => {
  try {
    const response = await apiHandler().delete(`${endpoints.YEARS}/${id}`);
    console.log("Delete Years ", response);
    return response.data;
  } catch (error) {
    console.log("Error Delete Years ", error);
    throw error;
  }
};
