import * as React from "react";
import DeleteItem from "./components/DeleteItem";
import EditItem from "./components/EditItem";

const ItemActions = (props) => {
  const {
    itemId,
    itemTitle,
    itemDescription,
    reload,
    setReload,
    openAlertFunctions,
  } = props;

  return (
    <>
        <DeleteItem
          itemId={itemId}
          reload={reload}
          setReload={setReload}
          openAlertFunctions={openAlertFunctions}
        />
        <EditItem
          itemId={itemId}
          itemTitle={itemTitle}
          itemDescription={itemDescription}
          reload={reload}
          setReload={setReload}
          openAlertFunctions={openAlertFunctions}
        />
    </>
  );
};

export default ItemActions;
