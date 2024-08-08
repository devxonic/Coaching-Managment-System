import { apiHandler } from "./apihandler";
import { endpoints } from "./endpoints";

export const classes = async (body: any) => {
  try {
    const response = await apiHandler().post(endpoints.CLASSES, body);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getClasses = async () => {
  try {
    const response = await apiHandler().get(endpoints.CLASSES);
    console.log("get All Classes ", response.data);
    return response.data;
  } catch (error) {
    console.log("Get All Classes ",error);
  }
};
