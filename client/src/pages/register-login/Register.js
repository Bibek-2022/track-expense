import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { createUser } from "../../helpers/axiosHelper";

export const Register = () => {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({
    status: "",
    message: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const result = await createUser(form);
    setResponse(result);
  };

  console.log(response);
  return (
    <Layout>
      <div className="center">
        <Form onSubmit={handleOnSubmit}>
          <h3>Register New User</h3>
          <hr />

          {response.message && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {response.message}
            </Alert>
          )}
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form.Group>

          <div className="text-end">
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
          </div>
        </Form>
      </div>
    </Layout>
  );
};
