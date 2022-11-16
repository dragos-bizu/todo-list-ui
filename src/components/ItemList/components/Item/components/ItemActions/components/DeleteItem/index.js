import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import ajax from "../../../../../../../../services/fetch";
import PopOverDialog from "../../../../../../../PopOverDialog";
import DeleteForm from "../DeleteForm";

const DeleteItem = (props) => {
  const { itemId, reload, setReload, openAlertFunctions } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const { setOpenAlert, setSeverity, setMessage } = openAlertFunctions;

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const openDialogForm = () => {
    setOpenDialog(true);
  };

  const handleDelete = () => {
    ajax({ url: `/items/${itemId}`, method: "DELETE" })
      .then(() => {
        setSeverity("success");
        setMessage("Item deleted successfully!");
        setOpenAlert(true);
        setReload(!reload);
        console.log("Item deleted successfully!");
      })
      .catch((error) => {
        setSeverity("error");
        setMessage(error);
        setOpenAlert(true);
      });
  };

  return (
    <>
      <Tooltip title="Delete Item!" placement="right">
        <IconButton aria-label="delete" size="inherit" onClick={openDialogForm}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <PopOverDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        handleConfirmButton={handleDelete}
        title="Delete Item"
      >
        <DeleteForm
          handleConfirmButton={handleDelete}
          handleClose={handleCloseDialog}
        />
      </PopOverDialog>
    </>
  );
};

export default DeleteItem;
