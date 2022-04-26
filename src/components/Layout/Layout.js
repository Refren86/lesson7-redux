import { Button } from "@mui/material";

import { Form, ProductList } from "../";
import { useTheme, useThemeUpdate } from "../../context/ThemeContext";

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
      <div className={styles.toggleBtn}>
        <Button onClick={toggleTheme} variant="contained" color="secondary">
          Toggle Theme
        </Button>
      </div>

      <div className={styles.wrapper}>
        <Form />

        <ProductList />
      </div>
    </div>
  );
};
