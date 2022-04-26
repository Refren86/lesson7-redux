import { useDispatch } from "react-redux";
import React, { useState } from "react";

import { Button } from "@mui/material";

import { ModalWindow } from "../Modal/Modal";
import { useTheme } from "../../context/ThemeContext";
import { removeProductAction } from "../../actions/productActions";

import styles from "./ProductItem.module.css";

export const ProductItem = ({ product, index }) => {
  const darkTheme = useTheme();
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);

  const { id, title, description } = product;

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  const deleteProduct = (id) => {
    dispatch(removeProductAction(id));
  };

  return (
    <div
      className={`${styles.productBlock} ${
        darkTheme ? styles.productBlockDark : styles.productBlockLight
      }`}
    >
      {isEditable && (
        <ModalWindow
          isEditable={isEditable}
          toggleEdit={toggleEdit}
          item={product}
        />
      )}

      <div className={styles.productInfo}>
        <h2>
          {index + 1}) {title}
        </h2>

        <p>{description}</p>

        <div className={styles.buttonsWrapper}>
          <Button
            onClick={toggleEdit}
            variant="contained"
            color="primary"
            disabled={isEditable}
          >
            Edit
          </Button>

          <Button
            onClick={() => deleteProduct(id)}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
