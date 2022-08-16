import { Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const SimpleFab = (url) => {
    const navigate = useNavigate();
    const fabStyle = {
      position: "fixed",
      bottom: 16,
      right: 16,
    };
  
    const fab = {
      color: "secondary",
      sx: fabStyle,
      icon: <AddIcon /> 
    };
  
    return (
      <Fab
        sx={fab.sx}
        aria-label={fab.label}
        onClick={() => navigate(url)}
        color={fab.color}
      >
        {fab.icon}
      </Fab>
    );
}

export default SimpleFab