import React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const AddForm = (props) => {
  const { handleConfirmButton, handleClose } = props;

  return (
    <>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this item?.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleConfirmButton}>Delete Item</Button>
      </DialogActions>
    </>
  );
};

export default AddForm;
