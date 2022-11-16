import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

const PopOverDialog = (props) => {
  const { open, handleClose, title, children } = props;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
};

export default PopOverDialog;
