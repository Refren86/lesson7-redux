import { Button } from "@mui/material";

import { useTheme, useThemeUpdate } from "../../context/ThemeContext";

import { Form } from "../Form/Form";
import { ProductList } from "../ProductList/ProductList";

import styles from "./Layout.module.css";

export const Layout = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

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
