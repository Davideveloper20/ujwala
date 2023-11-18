import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import Container from "@mui/material/Container";
import ModalCalendar from "../Calendar/modal-calendar";

interface MainImagePostProps {
  post: {
    description: string;
    image: string;
    imageText: string;
    linkText: string;
    title: string;
  };
}

export default function MainImagePost(props: MainImagePostProps) {
  const { post } = props;

  useEffect(() => {
    const strings = ["UJWALA!", "Tratamientos", "Holísticos"];

    const combinedText = strings.join(" ");

    const typewriter = new Typewriter("#typewriter-container", {
      strings: [combinedText],
      autoStart: true,
      loop: true,
      erase: false,
      typeSpeed: 5,
    });

    const descriptionStrings = [
      "¡Encuentra el equilibrio!",
      "con la naturaleza",
      "desde una experiencia",
      "relajante para la",
      "mente y cuerpo",
    ];

    const combinedDescription = descriptionStrings.join(" ");

    const typewriterDescription = new Typewriter(
      "#typewriter-container-description",
      {
        strings: [combinedDescription],
        autoStart: true,
        loop: true,
        erase: false,
        typeSpeed: 5,
      }
    );

    return () => {
      typewriter.stop();
      typewriterDescription.stop();
    };
  }, []);

  return (
    <Paper
      sx={{
        position: "relative",
        color: "#fff",
        fontFamily: "Cinzel, serif",
        mb: 4,
        backgroundSize: "cover",
        backgroundImage: `url(${post.image})`,
        height: "800px",
        right: 0,
        left: 0,
        marginTop: -10,
        marginLeft: -10,
        marginRight: -10,
        padding: 5,
      }}
    >
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }

      <Box
        mt={2}
        sx={{
          position: "relative",
          p: { xs: 3, md: 6 },
          pr: { md: 0 },
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          color="#fff"
          fontFamily="Cinzel, serif"
          gutterBottom
          id="typewriter-container"
        ></Typography>
        <Typography
          mt={4}
          variant="h5"
          color="#fff"
          fontFamily="Cinzel, serif"
          paragraph
          id="typewriter-container-description"
        ></Typography>
      </Box>
    </Paper>
  );
}
