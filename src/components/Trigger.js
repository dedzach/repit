import React from "react";
import { Button } from "@material-ui/core";

const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <Button variant="contained" ref={buttonRef} onClick={showModal}>
      Add Exercise
    </Button>
  );
};

export default Trigger;
