import { apiHandler } from "./apihandler";
import { endpoints } from "./endpoints";

export const getStudentReceipts = async () => {
  try {
    const response = await apiHandler().get(endpoints.GET_STUDENT_RECEIPT);
    console.log("get All Student Receipt ", response.data.data);
    return response.data;
  } catch (error) {
    console.log("Error Get All Student Rececipt ", error);
    throw error;
  }
};

export const createStudentReceipt = async (data: any) => {
  try {
    const response = await apiHandler().post(
      endpoints.ADD_STUDENT_RECEIPT,
      data
    );
    console.log("Create Students Receipt ", response);
    return response.data.data;
  } catch (error) {
    console.log("Error Create Students Receipt ", error);
    throw error;
  }
};
