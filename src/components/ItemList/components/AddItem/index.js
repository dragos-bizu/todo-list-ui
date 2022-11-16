import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { IconButton } from "@mui/material";
import PopOverDialog from "../../../PopOverDialog";
import "./styles.css";
import ajax from "./../../../../services/fetch";
import AddForm from "./../AddForm/index";
import AlertBar from "../../../AlertBar";

const AddItem = (props) => {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState("");
  const { reload, setReload } = props;

  const handleAddButton = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmButton = (event) => {
    event.preventDefault();
    const body = new FormData(event.currentTarget);
    const requestBody = JSON.stringify(Object.fromEntries(body));
    setOpen(false);
    ajax({
      url: "/items",
      method: "POST",
      body: requestBody,
    })
      .then(() => {
        setSeverity("success");
        setMessage("Item added successfully!");
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
      <div className="add-item-container">
        <IconButton
          aria-label="add"
          onClick={handleAddButton}
          className="add-button"
        >
          <AddBoxIcon fontSize="inherit" color="primary" />
        </IconButton>
      </div>
      <PopOverDialog
        open={open}
        handleClose={handleClose}
        handleConfirmButton={handleConfirmButton}
        title="Add Item"
      >
        <AddForm
          handleConfirmButton={handleConfirmButton}
          handleClose={handleClose}
        />
      </PopOverDialog>
      <AlertBar
        open={openAlert}
        setOpen={setOpenAlert}
        severity={severity}
        message={message}
      />
    </>
  );
};

export default AddItem;
