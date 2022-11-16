import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import ajax from "../../../../../../../../services/fetch";

const CheckItem = (props) => {
  const { itemId, isDone, reload, setReload } = props;
  const [checked, setChecked] = useState(isDone);

  const handleChange = () => {
    setChecked(!checked);
    setTimeout(() => {
      const body = { is_done: !checked };
      const requestBody = JSON.stringify(body);
      ajax({
        url: `/items/${itemId}`,
        method: "PATCH",
        body: requestBody,
      })
        .then(() => {
          setReload(!reload);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 3000);
  };
  return (
    <Tooltip title={checked ? "Undone!" : "Done!"} placement="right">
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        className="checkbox"
      />
    </Tooltip>
  );
};

export default CheckItem;
