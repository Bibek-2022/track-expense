import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { postTransaction, getTransaction } from "../../helpers/axiosHelper";
import { CustomTable } from "../../components/customTable/CustomTable";

export const Dashboard = () => {
  const navigation = useNavigate();
  const [recfetchFlage, setRecFetchFlage] = useState(0);
  const [form, setForm] = useState({ title: "", amount: "" });
  const [resp, setResp] = useState({ status: "", message: "" });
  useEffect(() => {
    const storedUser = JSON.parse(window.sessionStorage.getItem("user"));

    !storedUser?._id && navigation("/");
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { _id } = JSON.parse(window.sessionStorage.getItem("user"));
    if (!_id) {
      return alert("Please login frist");
    }

    const info = { ...form, userId: _id };

    const result = await postTransaction(info);

    setResp(result);
    setForm(info);
    if (result.status === "success") {
      setRecFetchFlage(recfetchFlage + 1);
    }
  };
  return (
    <Layout>
      <Form className="mt-5" onSubmit={handleOnSubmit}>
        {resp?.message && (
          <Alert variant={resp?.status === "success" ? "success" : "danger"}>
            {" "}
            {resp?.message}
          </Alert>
        )}
        <Row className="g-2">
          <Col md="2">
            <Form.Select name="type" onChange={handleOnChange} required>
              <option> Choose...</option>
              <option value="income">Income</option>
              <option value="expenses">Expense</option>
            </Form.Select>
          </Col>
          <Col md="6">
            <Form.Control
              name="title"
              placeholder="transaction Title"
              onChange={handleOnChange}
              required
            />
          </Col>
          <Col md="2">
            <Form.Control
              name="amount"
              placeholder="50"
              type="number"
              onChange={handleOnChange}
              required
            />
          </Col>
          <Col md="2">
            <Button
              variant="primary"
              type="submit"
              className="form-control"
              onClick={handleOnSubmit}
            >
              Add
            </Button>
          </Col>
        </Row>
      </Form>

      <hr />
      <Row>
        <CustomTable key={recfetchFlage} />
      </Row>
    </Layout>
  );
};
