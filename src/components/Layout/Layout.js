import { Button } from "@mui/material";
import React, { useContext } from "react";

import { ThemeContext } from "../../App";

import { Form } from "../Form/Form";
import { ProductList } from "../ProductList/ProductList";

import styles from "./Layout.module.css";

export const Layout = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.layout} ${
        darkTheme ? styles.layoutDark : styles.layoutLight
      }`}
    >
      <div style={{ textAlign: "center", paddingTop: "15px" }}>
        <Button onClick={toggleTheme} variant="contained" color="secondary">
          Toggle Theme
        </Button>
      </div>

      <div className="wrapper">
        <Form />

        <ProductList />
      </div>
    </div>
  );
};
