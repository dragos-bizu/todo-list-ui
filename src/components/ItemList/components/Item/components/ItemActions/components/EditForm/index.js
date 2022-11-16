import React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles.css";

const EditForm = (props) => {
  const { handleConfirmButton, handleClose, itemTitle, itemDescription } =
    props;

  return (
    <Box component="form" onSubmit={handleConfirmButton} className="edit-form">
      <DialogContent>
        <DialogContentText>Edit this item from your list.</DialogContentText>
        <TextField
          autoFocus
          id="title"
          name="title"
          label="Item Title"
          type="text"
          fullWidth
          className="edit-item-title"
          defaultValue={itemTitle}
        />
        <TextField
          multiline
          rows={5}
          id="description"
          name="description"
          label="Description"
          type="text"
          fullWidth
          className="edit-item-description"
          defaultValue={itemDescription}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Edit Item</Button>
      </DialogActions>
    </Box>
  );
};

export default EditForm;
