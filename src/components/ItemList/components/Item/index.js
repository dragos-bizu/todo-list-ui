import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Moment from "react-moment";
import ItemActions from "./components/ItemActions";
import "./styles.css";
import CheckItem from "./components/ItemActions/components/CheckItem";

const Item = (props) => {
  const { item, reload, setReload, openAlertFunctions } = props;
  const {
    title: itemTitle,
    description: itemDescription,
    is_done: isDone,
    created_at: createdAt,
    modified_at: modifiedAt,
    id: itemId,
  } = item;

  const [expanded, setExpanded] = useState(false);
  const [displayActions, setDisplayActions] = useState(false);
  const handleExpand = () => {
    setExpanded(!expanded);
    if (expanded) {
      setDisplayActions(false);
    } else {
      setTimeout(() => {
        setDisplayActions(true);
      }, 200);
    }
  };

  return (
    <Paper className="item">
      <Accordion
        elevation={0}
        expanded={expanded}
        onChange={handleExpand}
        className="accordion"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="title">{itemTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails className="description">
          <Typography>{itemDescription}</Typography>
        </AccordionDetails>
        <div className="dates">
          <Typography className="created-at" variant="inherit">
            Created at:&nbsp;
            <Moment format="DD/MM/YYYY hh:mm">{createdAt}</Moment>
          </Typography>
          <Typography className="modified-at" variant="inherit">
            Modified at:&nbsp;
            <Moment format="DD/MM/YYYY hh:mm">{modifiedAt}</Moment>
          </Typography>
        </div>
      </Accordion>
      <Stack direction="column" spacing={1}>
        <CheckItem
          itemId={itemId}
          isDone={isDone}
          reload={reload}
          setReload={setReload}
        />
        {displayActions ? (
          <ItemActions
            itemId={itemId}
            itemTitle={itemTitle}
            itemDescription={itemDescription}
            reload={reload}
            setReload={setReload}
            openAlertFunctions={openAlertFunctions}
          />
        ) : null}
      </Stack>
    </Paper>
  );
};

export default Item;
