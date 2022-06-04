import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";

const auth = false;
export const Dashboard = () => {
  const navigation = useNavigate();
  useEffect(() => {
    !auth && navigation("/");
  });

  return <Layout>Dashboard Layout</Layout>;
};
