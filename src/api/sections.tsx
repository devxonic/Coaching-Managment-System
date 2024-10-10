import { apiHandler } from "./apihandler";
import { endpoints } from "./endpoints";

export const getBatch = async () => {
  try {
    const response = await apiHandler().get(endpoints.GET_BATCHES);
    console.log("get All Batch ", response.data);
    return response.data;
  } catch (error) {
    console.log("Error Get All Batch ", error);
    throw error;
  }
};

export const createBatch = async (data: any) => {
  try {
    const response = await apiHandler().post(endpoints.ADD_BATCH, data);
    console.log("Create Batch ", response);
    return response.data;
  } catch (error) {
    console.log("Error Create Batch ", error);
    throw error;
  }
};

// export const updateSections = async (data: any, id: any) => {
//   try {
//     const response = await apiHandler().put(
//       `${endpoints.SECTIONS}/${id}`,
//       data
//     );
//     console.log("Update Sections ", response);
//     return response.data;
//   } catch (error) {
//     console.log("Error Update Sections ", error);
//     throw error;
//   }
// };

// export const deleteSections = async (id: any) => {
//   try {
//     const response = await apiHandler().delete(`${endpoints.SECTIONS}/${id}`);
//     console.log("Delete Sections ", response);
//     return response.data;
//   } catch (error) {
//     console.log("Error Delete Sections ", error);
//     throw error;
//   }
// };
