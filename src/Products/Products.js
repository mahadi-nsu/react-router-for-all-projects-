import React from "react";
import { css } from "@emotion/css";
import { Outlet } from "react-router-dom";

const ProductStyles = css`
  display: flex;
  flex-direction: column;
  .Logo {
    width: 125px;
    margin: 0 auto 25px;
  }
`;

const Products = () => {
  return (
    <div className={ProductStyles}>
      <img src="/assets/img/logo.svg" alt="Ultimate Burgers" className="Logo" />
      <Outlet />
    </div>
  );
};

export default Products;
