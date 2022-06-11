import { getTransactions } from "../../helpers/axiosHelper";
import { setIsLoading, setResponse, setTransactions } from "./dashboard.slice";

export const fetchTransactionActions = async () => async (dispatch) => {
  dispatch(setIsLoading());

  //call api

  const data = await getTransactions();

  if (data.status === "success") {
    dispatch(setTransactions(data.result));
  }
};
