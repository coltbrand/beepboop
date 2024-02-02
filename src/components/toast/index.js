import Snackbar from "@mui/material/Snackbar";
import React from "react";

function Toast(message, severity, duration) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={duration}
      message={message}
      severity={severity}
    />
  );
}

export default Toast;
