// NEW

import { ButtonMain } from "@/style/styled";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Stack,
  Container,
} from "@mui/material";

const teamMembers = [
  {
    name: "Persona 1",
    role: "Cargo 1",
    image: "/img/julia_y_julian.jpg",

    video: "enlace-al-video-1",
    description: "Descripción de la persona 1.",
  },
];

interface AboutUsProps {
  imageUrl: string;
  title: string;
  description: string;
  index: number;
}

const AboutUs = ({ title, imageUrl, description, index }: AboutUsProps) => {
  return (
    <Container>
      {index % 2 === 0 ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} mt={10} p={10} textAlign="left">
            <Typography
              variant="h3"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontFamily: "Cinzel, serif",
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{ fontFamily: "Cinzel, serif", mt: 5 }}
              variant="body1"
            >
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={imageUrl}
              alt="Tratamientos Holísticos"
              style={{ maxWidth: "100%" }}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={imageUrl}
              alt="Tratamientos Holísticos"
              style={{ maxWidth: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6} mt={10} p={10} textAlign="right">
            <Typography
              variant="h3"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontFamily: "Cinzel, serif",
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{ fontFamily: "Cinzel, serif", mt: 5 }}
              variant="body1"
            >
              {description}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default AboutUs;
