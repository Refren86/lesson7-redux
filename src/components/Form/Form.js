import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import { joiResolver } from "@hookform/resolvers/joi";

import { ThemeContext } from "../../App";
import { InputValidator } from "../../validator/inputValidator";
import { addProductAction } from "../../actions/productActions";

import styles from "./Form.module.css";

export const Form = () => {
  const dispatch = useDispatch();
  const { darkTheme } = useContext(ThemeContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: joiResolver(InputValidator), mode: "onBlur" });

  const submit = (data) => {
    dispatch(addProductAction({ ...data, id: Date.now() }));

    reset();
  };

  return (
    <form
      className={`${styles.form} ${
        darkTheme ? styles.darkThemeForm : styles.lightThemeForm
      }`}
      onSubmit={handleSubmit(submit)}
    >
      <TextField
        fullWidth
        error={errors.title && true}
        label="Enter title"
        variant="outlined"
        helperText={errors.title && errors.title.message}
        {...register("title")}
      />

      <TextField
        fullWidth
        error={errors.description && true}
        label="Enter description"
        variant="outlined"
        helperText={errors.description && errors.description.message}
        {...register("description")}
      />

      <Button
        className={styles.formBtn}
        type="submit"
        variant="contained"
        color="success"
      >
        Add
      </Button>
    </form>
  );
};
