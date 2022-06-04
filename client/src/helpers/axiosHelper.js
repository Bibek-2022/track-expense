import axios from "axios";

const apiEp =
  process.env.NODE_ENV === "production"
    ? "/api/v1/users"
    : "http://localhost:8000/api/v1/users";

export const createUser = async (usrObj) => {
  try {
    const { data } = await axios.post(apiEp, usrObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = async (usrObj) => {
  try {
    const { data } = await axios.post(apiEp + "/login", usrObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
