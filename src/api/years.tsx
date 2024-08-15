import { apiHandler } from "./apihandler";
import { endpoints } from "./endpoints";

export const getYears = async () => {
  try {
    const response = await apiHandler().get(endpoints.YEARS);
    console.log("get All Years ", response.data.data);
    return response.data.data;
  } catch (error) {
    console.log("Get All Years ", error);
  }
};

export const createYears = async (data: any) => {
  try {
    const response = await apiHandler().post(endpoints.YEARS, data);
    console.log("Create Years ", response);
    return response.data;
  } catch (error) {
    console.log("Create Years ", error);
  }
};

export const updateYears = async (data: any, id: any) => {
  try {
    const response = await apiHandler().put(`${endpoints.YEARS}/${id}`, data);
    console.log("Update Years ", response);
    return response.data;
  } catch (error) {
    console.log("Update Years ", error);
  }
};

export const deleteYears = async (id: any) => {
  try {
    const response = await apiHandler().delete(`${endpoints.YEARS}/${id}`);
    console.log("Delete Years ", response);
    return response.data;
  } catch (error) {
    console.log("Delete Years ", error);
  }
};
