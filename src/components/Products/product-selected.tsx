import React from "react";
import { Button, Box, Container } from "@mui/material";

interface ProductSelectedProps {
  imageUrl: string;
  buttonText: string;
  onButtonClick: () => void;
}

const ProductSelected = ({
  imageUrl,
  buttonText,
  onButtonClick,
}: ProductSelectedProps) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url( ${imageUrl} )`,
      }}
    >
      <Container>
        <Button variant="contained" color="primary" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Container>
    </Box>
  );
};

export default ProductSelected;
