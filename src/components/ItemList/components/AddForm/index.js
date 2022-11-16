import React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles.css";

const AddForm = (props) => {
  const { handleConfirmButton, handleClose } = props;

  return (
    <Box component="form" onSubmit={handleConfirmButton} className="add-form">
      <DialogContent>
        <DialogContentText>Add a new item to your list.</DialogContentText>
        <TextField
          autoFocus
          id="title"
          name="title"
          label="Item Title"
          type="text"
          fullWidth
          className="add-item-title"
        />
        <TextField
          multiline
          rows={5}
          id="description"
          name="description"
          label="Description"
          type="text"
          fullWidth
          className="add-item-description"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Add Item</Button>
      </DialogActions>
    </Box>
  );
};

export default AddForm;
