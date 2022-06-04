import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigation = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(window.sessionStorage.getItem("user"));

    !storedUser?._id && navigation("/");
  }, []);

  return <Layout>Dashboard Layout</Layout>;
};
