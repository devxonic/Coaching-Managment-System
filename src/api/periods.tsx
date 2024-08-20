import { apiHandler } from "./apihandler";
import { endpoints } from "./endpoints";

export const getPeriods = async () => {
  try {
    const response = await apiHandler().get(endpoints.PERIODS);
    console.log("get All Periods ", response.data.data);
    return response.data.data;
  } catch (error) {
    console.log("Error Get All Periods ", error);
    throw error;
  }
};

export const createPeriods = async (data: any) => {
  try {
    const response = await apiHandler().post(endpoints.PERIODS, data);
    console.log("Create Periods ", response);
    return response.data;
  } catch (error) {
    console.log("Error Create Periods ", error);
    throw error;
  }
};

export const updatePeriods = async (data: any, id: any) => {
  try {
    const response = await apiHandler().put(`${endpoints.PERIODS}/${id}`, data);
    console.log("Update Periods ", response);
    return response.data;
  } catch (error) {
    console.log("Error Update Periods", error);
    throw error;
  }
};

export const deletePeriods = async (id: any) => {
  try {
    const response = await apiHandler().delete(`${endpoints.PERIODS}/${id}`);
    console.log("Delete Periods ", response);
    return response.data;
  } catch (error) {
    console.log("Error Delete Periods ", error);
    throw error;
  }
};
