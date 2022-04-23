import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import React, { useContext, useState } from "react";

import { Box } from "@mui/system";
import { Button, Modal, TextField } from "@mui/material";

import {
  editProductAction,
  removeProductAction,
} from "../../actions/productActions";
import { ThemeContext } from "../../App";

import styles from "./ProductItem.module.css";

export const ProductItem = ({ product, index }) => {
  const dispatch = useDispatch();
  const { id, title, description } = product;
  const { register, handleSubmit } = useForm();
  const { darkTheme } = useContext(ThemeContext);
  const [isEditable, setIsEditable] = useState(false);

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  const deleteProduct = (id) => {
    dispatch(removeProductAction(id));
  };

  const submitChanges = (data) => {
    dispatch(editProductAction({ ...data, id }));
    toggleEdit();
  };

  return (
    <div
      className={`${styles.productBlock} ${
        darkTheme ? styles.productBlockDark : styles.productBlockLight
      }`}
    >
      {isEditable && (
        <Modal open={isEditable} onClose={toggleEdit}>
          <Box className={styles.modal}>
            <form onSubmit={handleSubmit(submitChanges)}>
              <TextField
                fullWidth
                label="Enter new title"
                variant="outlined"
                defaultValue={title}
                {...register("newTitle")}
              />
              <TextField
                fullWidth
                label="Enter new description"
                variant="outlined"
                sx={{ mt: 2 }}
                defaultValue={description}
                {...register("newDescription")}
              />
              <Box sx={{ mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mr: 2 }}
                >
                  Apply
                </Button>
                <Button onClick={toggleEdit} variant="contained" color="error">
                  Cancel
                </Button>
              </Box>
            </form>
          </Box>
        </Modal>
      )}

      <div className={styles.productInfo}>
        <h2>
          {index + 1}) {title}
        </h2>

        <p>{description}</p>

        <div className={styles.buttonsWrapper}>
          <Button onClick={toggleEdit} variant="contained" color="primary">
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
