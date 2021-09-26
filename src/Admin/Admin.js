import React from "react";
import { Route, Routes } from "react-router";
import ProductEdit from "../Products/ProductEdit";
import ProductsIndex from "../Products/ProductsIndex";

const Admin = () => (
  <div>
    <h1>Admin</h1>
    <Routes>
      <Route path="/" element={ProductsIndex} />
      <Route path="/new" element={ProductEdit} />
    </Routes>
  </div>
);

export default Admin;
