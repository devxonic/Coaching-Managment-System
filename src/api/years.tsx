import { apiHandler } from "./apihandler";
import { endpoints } from "./endpoints";

export const getYears = async () => {
  try {
    const response = await apiHandler().get(endpoints.GET_YEARS);
    console.log("get All Years", response.data);
    return response.data;
  } catch (error) {
    console.log("Error Get All Years ", error);
    throw error;
  }
};

export const createYears = async (data: any) => {
  try {
    const response = await apiHandler().post(endpoints.ADD_YEARS, data);
    console.log("Create Years ", response);
    return response.data;
  } catch (error) {
    console.log("Error Create Years ", error);
    throw error;
  }
};

