import React, { useState } from "react";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Item from "./components/Item";
import "./styles.css";
import AddItem from "./components/AddItem";
import AlertBar from "../AlertBar";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";

const ItemList = (props) => {
  const { items, reload, setReload } = props;
  const [openAlert, setOpenAlert] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState("");
  const location = useLocation();
  const openAlertFunctions = { setOpenAlert, setSeverity, setMessage };

  return (
    <>
      <Typography variant="h3" className="list-title" align="center">
        {location.pathname === "/pending" ? "Pending" : "Completed"}
      </Typography>
      <Paper elevation={2} className="item-list">
        {location.pathname === "/pending" && (
          <AddItem reload={reload} setReload={setReload} />
        )}
        <List
          sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
        >
          {items.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                reload={reload}
                setReload={setReload}
                openAlertFunctions={openAlertFunctions}
              />
            );
          })}
        </List>
        <AlertBar
          open={openAlert}
          setOpen={setOpenAlert}
          severity={severity}
          message={message}
        />
      </Paper>
    </>
  );
};

export default ItemList;
