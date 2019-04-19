import axios from "axios";

const api =
  process.env.REACT_APP_RECORDS_API_URL ||
  "https://5cb5bfa207f233001424d6c5.mockapi.io/api/v1/records";

export const getRecords = () => axios.get(`${api}/api/v1/records`);
