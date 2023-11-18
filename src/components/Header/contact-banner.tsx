import { useState, useEffect } from "react";
import { Modal, Button, Box, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const ContactBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const visitedBefore = localStorage.getItem("visitedBefore");
    if (!visitedBefore) {
      setOpen(true);
      localStorage.setItem("visitedBefore", "true");
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          p: 3,
          width: 300,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
        <h2>¡Comparte con nosotros para recibir ofertas especiales!</h2>
        <p>Ingresa tu correo electrónico:</p>
        <input type="email" placeholder="Correo electrónico" />
        <Button variant="contained" color="primary" onClick={handleClose}>
          Recibe nuestra experiencia!!!
        </Button>
      </Box>
    </Modal>
  );
};

export default ContactBanner;
