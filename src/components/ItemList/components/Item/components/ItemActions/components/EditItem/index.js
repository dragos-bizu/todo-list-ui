import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import ajax from "../../../../../../../../services/fetch";
import PopOverDialog from "../../../../../../../PopOverDialog";
import EditForm from "../EditForm";

const EditItem = (props) => {
  const {
    itemId,
    itemTitle,
    itemDescription,
    reload,
    setReload,
    openAlertFunctions,
  } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const { setOpenAlert, setSeverity, setMessage } = openAlertFunctions;

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const openDialogForm = () => {
    setOpenDialog(true);
  };

  const handleEdit = (event) => {
    event.preventDefault();
    const body = new FormData(event.currentTarget);
    const requestBody = JSON.stringify(Object.fromEntries(body));
    handleCloseDialog();
    ajax({ url: `/items/${itemId}`, method: "PATCH", body: requestBody })
      .then(() => {
        setSeverity("success");
        setMessage("Item edited successfully!");
        setOpenAlert(true);
        setReload(!reload);
      })
      .catch((error) => {
        setSeverity("error");
        setMessage(error);
        setOpenAlert(true);
      });
  };

  return (
    <>
      <Tooltip title="Edit Item!" placement="right">
        <IconButton aria-label="delete" size="inherit" onClick={openDialogForm}>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <PopOverDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        handleConfirmButton={handleEdit}
        title="Edit Item"
      >
        <EditForm
          handleConfirmButton={handleEdit}
          handleClose={handleCloseDialog}
          itemTitle={itemTitle}
          itemDescription={itemDescription}
        />
      </PopOverDialog>
    </>
  );
};

export default EditItem;
