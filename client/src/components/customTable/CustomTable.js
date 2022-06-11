import React from "react";
import { useEffect, useState } from "react";
import { Button, FormCheck, Table } from "react-bootstrap";
import { getTransaction } from "../../helpers/axiosHelper.js";

export const CustomTable = () => {
  const [data, setData] = useState([]);
  const [ids, setIds] = useState([]);
  // const [res, setRes] = useState({ status: "", message: "" });

  useEffect(() => {
    const { _id } = JSON.parse(window.sessionStorage.getItem("user"));

    const fetchData = async () => {
      const transInfo = await getTransaction(_id);
      if (transInfo.status === "success") {
        setData(transInfo.result);
      }
    };
    fetchData();
  }, []);

  const handelOnCheck = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setIds([...ids, value]);
    } else {
      const filterIds = ids.filter((ids) => ids !== value);
      setIds(filterIds);
    }
  };
  const handelOnDelete = () => {};
  const incomeTotal = data.reduce((acc, item) => {
    return data.type === "income" ? acc + acc.amount : acc - item.amount;
  }, 0);

  return (
    <div className="mt-5">
      <h1 className="text-center"> Transaction Found !!</h1>
      <Table className="mt-3" hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Data</th>
            <th>Title</th>
            <th>Expenses</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          {data.map((trans, i) => (
            <tr key={trans._id}>
              <td>
                <FormCheck onClick={handelOnCheck} value={trans._id} />
              </td>

              <td>{new Date(trans.createdAt).toLocaleDateString()}</td>
              <td>{trans.title}</td>

              {trans.type === "income" ? (
                <>
                  <td></td>
                  <td>
                    {" "}
                    <span className="fw-bold text-success">
                      ${trans.amount}
                    </span>
                  </td>
                </>
              ) : (
                <>
                  <td>
                    <span className="fw-bold text-danger">
                      -${trans.amount}
                    </span>
                  </td>
                  <td></td>
                </>
              )}
            </tr>
          ))}

          <td colSpan={5} className="text-end fw-bold">
            Balance ${incomeTotal}
          </td>
        </tbody>
      </Table>
      {ids.length > 0 && (
        <Button variant="danger" onClick={handelOnDelete}>
          Delete {ids.length} Selected Transaction
        </Button>
      )}
    </div>
  );
};
