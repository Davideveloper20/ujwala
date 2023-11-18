import React from "react";
import { Grid, Typography, Paper, Button, Box, Container } from "@mui/material";

interface SectionProps {
  imageUrl: string;
  title: string;
  description: string;
}

function Section({ title, imageUrl, description }: SectionProps) {
  return (
    <Container>
      <img src={imageUrl} alt={title} style={{ maxWidth: "100%" }} />
      <Typography variant="h4" component="h2">
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Container>
  );
}

export default Section;
