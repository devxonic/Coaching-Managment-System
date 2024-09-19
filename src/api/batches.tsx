import { apiHandler } from "./apihandler";
import { endpoints } from "./endpoints";

export const getBatches = async () => {
  try {
    const response = await apiHandler().get(endpoints.GET_BATCHES);
    console.log("get All Batches ", response.data);
    return response.data;
  } catch (error) {
    console.log("Error Get All Batches ", error);
    throw error;
  }
};
