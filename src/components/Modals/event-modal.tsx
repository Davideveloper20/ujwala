import React from "react";
import { Button, Dialog } from "@mui/material";

import AddEventForm from "../Forms/add-event-form";

import ShowEventForm from "../Forms/show-event-form";

import UpdateEventForm from "../Forms/update-event-form";

import { useEventContext } from "@/contexts/event-context";

const chooseFormType = (props: any) => {
  if (props.type === "add") {
    return <AddEventForm />;
  } else if (props.type === "show") {
    return <ShowEventForm />;
  } else if (props.type === "update") {
    return <UpdateEventForm />;
  }
};

export default function EventModal() {
  const { open, handleClickOpen, handleClose, formType, setFormType } =
    useEventContext();

  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => {
          handleClickOpen();
          setFormType("add");
        }}
      >
        Icono faltante de calendar plus
      </Button>
      <Dialog open={open} onClose={handleClose}>
        {chooseFormType({ type: formType })}
      </Dialog>
    </div>
  );
}
