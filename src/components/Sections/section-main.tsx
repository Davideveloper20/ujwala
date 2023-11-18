// NEW

import React, { useState } from "react";
import Router from "next/router";

import {
  Grid,
  Typography,
  Paper,
  Button,
  Box,
  Container,
  Stack,
} from "@mui/material";
import { ButtonMain } from "@/style/styled";
import ModalCalendar from "../Calendar/modal-calendar";
import ContactBanner from "../Header/contact-banner";

interface SectionMainProps {
  imageUrl: string;
  title: string;
  description: string;
}
function SectionMain({ title, imageUrl, description }: SectionMainProps) {
  const [modalCalendarOpen, setModalCalendarOpen] = useState(false);

  const handleRouteNavMenu = () => {
    Router.push("/massage-menu");
  };
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={imageUrl} alt={title} style={{ maxWidth: "100%" }} />

            {modalCalendarOpen && <ModalCalendar fromRequest={false} />}
          </Grid>
          <Grid item xs={12} md={6} mt={10} textAlign="right">
            <Typography
              variant="h3"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", 
                fontFamily: "Cinzel, serif",
              }}
            >
              {title}
            </Typography>

            <Typography sx={{ fontFamily: "Cinzel, serif", fontWeight:600, mt:5 }} variant="body1">
            {/* <Typography sx={{ fontFamily: "Montserrat, sans-serif", mt:5 }} variant="body1"> */}

              {description}
            </Typography>

            <Stack
              direction="column"
              spacing={4}
              mt={15}
              maxWidth={300}
              sx={{ marginLeft: "auto" }}
            >
              <ButtonMain
                sx={{ height: 80 }}
                onClick={() => setModalCalendarOpen(true)}
              >
                Agendar
              </ButtonMain>
              <ButtonMain onClick={handleRouteNavMenu} sx={{ height: 80 }}>
                Ver toda la carta
              </ButtonMain>
            </Stack>
          </Grid>
        </Grid>
        <ContactBanner />
      </Container>
    </>
  );
}

export default SectionMain;

// OLD

// // components/Section.js
// import React from "react";
// import { Grid, Typography, Paper, Button, Box } from "@mui/material";

// interface SectionProps {
//   image: string;
//   title: string;
//   description: string;
// }

// const Section = ({ image, title, description }: SectionProps) => {
//   return (
//     // <Grid container spacing={2}>
//     //   <Grid item xs={12} sm={6}>
//     //     <img src={image} alt={title} width='800px' height='500px' />
//     //   </Grid>
//     //   <Grid item xs={12} sm={6}>
//     //     <Paper>
//     //       <Typography variant="h4">{title}</Typography>
//     //       <Typography variant="body1">{description}</Typography>
//     //     </Paper>
//     //   </Grid>
//     // </Grid>

//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6} style={{ position: "relative" }}>
//         <img src={image} alt={title} width="800px" height="500px" />
//         <div
//           style={{
//             position: "absolute",
//             top: 100,
//             left: 600,
//             width: "100%",
//             background: "rgba(255, 255, 255, 0.7)",
//             border: "1px solid #4b00822e",
//             borderRadius: "5px",
//             // background: "#4b00822e",

//             padding: "16px",
//             boxSizing: "border-box",
//           }}
//         >
//           <Typography variant="h4">{title}</Typography>
//           <Typography variant="body1">{description}</Typography>
//           <Box textAlign='right'>
//            <Button
//               sx={{
//                 background: "#b27dd961",
//                 border: "1px solid #b27dd961",
//                 fontWeight: "900",
//                 color: "rgb(101 31 207 / 87%)",
//                 "&:hover": { background: "#b27dd9de" },
//                 fontSize:'12px',
//                 textTransform:'lowercase'
//               }}
//           >
//             Agregar al carrito
//           </Button>
//           </Box>
//         </div>

//       </Grid>
//     </Grid>
//   );
// };

// export default Section;
