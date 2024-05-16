export async function getJobs(pageNumber) {
  let response;
  try {
    response = await axios.get(
      `https://fa27b89d-912b-4414-acd5-522e571d92d1.mock.pstmn.io/jobs?page=${pageNumber}`
    );
  } catch (error) {
    console.log("Error in fetching Jobs : ", error);
  }
  return response.data;
}
