// NEW 2

import {
  Container,
  Grid,
  IconButton,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import {
  Instagram,
  Facebook,
  Twitter,
  Email,
  LocationOn,
} from "@mui/icons-material";
import NextLink from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "20px 0",
        marginTop: 10,
      }}
    >
      <Container>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <MuiLink
              href="https://www.instagram.com/uj.wa.la_colombia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <Instagram style={{ color: "#fff" }} />
              </IconButton>
            </MuiLink>
          </Grid>
          <Grid item>
            <MuiLink
              href="https://www.instagram.com/uj.wa.la_colombia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <Facebook style={{ color: "#fff" }} />
              </IconButton>
            </MuiLink>
          </Grid>
          <Grid item>
            <IconButton>
              <Twitter style={{ color: "#fff" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <Email style={{ color: "#fff" }} />
            </IconButton>
          </Grid>

          <Grid item>
            <Typography color="white" fontFamily="Montserrat, sans-serif">
              Calle 4 sur N 64-67 Santa Elena, Parcelas Santa María (En toda la
              estación de policía principal de Sta Elena) <LocationOn />
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="white" fontFamily="Montserrat, sans-serif">
              París, Francia Calle 66 Cr 8987 #456 <LocationOn />
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              &copy; {currentYear} Ujwala. Todos los derechos reservados.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;

// NEW 1

// import { Container, Grid, IconButton, Typography } from "@mui/material";
// import { Instagram, Facebook, Twitter, Email } from "@mui/icons-material";
// import Link from "next/link";

// const Footer = () => {
//   const currentYear = new Date().getFullYear(); // Obtén el año actual

//   return (
//     <footer
//       style={{ backgroundColor: "#000", color: "#fff", padding: "20px 0" }}
//     >
//       <Container>
//         <Grid container justifyContent="center" alignItems="center" spacing={2}>
//           {/* Redes sociales */}
//           <Grid item>
//             <IconButton>
//               <Instagram style={{ color: "#fff" }} />
//             </IconButton>
//           </Grid>
//           <Grid item>
//             <IconButton>
//               <Facebook style={{ color: "#fff" }} />
//             </IconButton>
//           </Grid>
//           <Grid item>
//             <IconButton>
//               <Twitter style={{ color: "#fff" }} />
//             </IconButton>
//           </Grid>
//           <Grid item>
//             <IconButton>
//               <Email style={{ color: "#fff" }} />
//             </IconButton>
//           </Grid>

//           {/* Otras direcciones y logo */}
//           <Grid item sx={{ color: "white" }}>
//             <Typography color="white" fontFamily="Montserrat, sans-serif">
//               Dirección 1: Calle 4 sur N 64-67 Santa Elena, Parcelas Santa María (En toda la
//               estación de policía principal de Sta Elena)
//             </Typography>
//           </Grid>
//           <Grid item>
//             <Typography color="white" fontFamily="Montserrat, sans-serif">
//               Dirección 2 : París, Francia Calle 66 Cr 8987 #456
//             </Typography>
//           </Grid>

//           {/* <Grid item width={20} height={20}>
//             <img src="/img/logo-main.png" alt="Logo pequeño" />
//           </Grid> */}

//           {/* Copyright y año */}
//           <Grid item xs={12}>
//             <Typography variant="body2" align="center">
//               &copy; {currentYear} Ujwala. Todos los derechos reservados.
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;

// OLD

// import { Container, Grid, IconButton } from "@mui/material";
// import { Instagram, Facebook, Twitter, Email } from "@mui/icons-material";

// const Footer = () => {
//   return (
//     <footer style={{ backgroundColor: "#333", color: "#fff", padding: "20px 0" }}>
//       <Container>
//         <Grid container justifyContent="center" alignItems="center" spacing={2}>
//           <Grid item>
//             <IconButton>
//               <Instagram style={{ color: "#fff" }} />
//             </IconButton>
//           </Grid>
//           <Grid item>
//             <IconButton>
//               <Facebook style={{ color: "#fff" }} />
//             </IconButton>
//           </Grid>
//           <Grid item>
//             <IconButton>
//               <Twitter style={{ color: "#fff" }} />
//             </IconButton>
//           </Grid>
//           <Grid item>
//             <IconButton>
//               <Email style={{ color: "#fff" }} />
//             </IconButton>
//           </Grid>
//           {/* Add more icons and links as needed */}
//         </Grid>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
