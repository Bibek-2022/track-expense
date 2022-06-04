import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { postTransaction } from "../../helpers/axiosHelper";

export const Dashboard = () => {
  const navigation = useNavigate();
  const [form, setForm] = useState({});
  const [resp, setResp] = useState({});
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
    const result = await postTransaction(form);
    console.log(e);
    setResp(result);
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
    </Layout>
  );
};
