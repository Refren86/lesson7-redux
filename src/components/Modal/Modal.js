import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Box, Button, Modal, TextField } from "@mui/material";

import { editProductAction } from "../../actions/productActions";

import styles from "./Modal.module.css";

export const ModalWindow = ({ isEditable, toggleEdit, item }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const { id, title, description } = item;

  const submitChanges = (data) => {
    dispatch(editProductAction({ ...data, id }));
    toggleEdit();
  };

  return (
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
  );
};
