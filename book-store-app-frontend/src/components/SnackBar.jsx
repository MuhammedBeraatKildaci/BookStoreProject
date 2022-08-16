import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {  useDispatch } from "react-redux";
import { closeSnackBar } from "../../store/actions/settingActions";
import MuiAlert from "@mui/material/Alert";

export default function SnackBar({ snackbar }) {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const { message, duration, open, severity } = snackbar;
  const snackBarDispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    snackBarDispatch(closeSnackBar());
  };

  const action = (
    <>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleClose}
      >
        <CloseIcon fontSize='small' />
      </IconButton>
    </>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}
        message={message}
        action={action}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}