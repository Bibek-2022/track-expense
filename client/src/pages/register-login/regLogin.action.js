import { createUser } from "../../helpers/axiosHelper";
import { setIsLoading, setResponse } from "./regLogin.slice";

export const registerAction = (form) => async (dispatch) => {
  //set the loader on
  dispatch(setIsLoading());
  //call axios
  const result = await createUser(form);
  //set the response
  dispatch(setResponse(result));
};
