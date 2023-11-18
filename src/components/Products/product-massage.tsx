// NEW 4

import React, { useState } from "react";
import { Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { ButtonMain } from "@/style/styled";
import ModalCalendar from "../Calendar/modal-calendar";

interface Product {
  id: number;
  title: string;
  image: string;
  priceValue: string;
}

interface ProductMassageProps {
  detailProduct: Product;
}

const ProductMassage = ({ detailProduct }: ProductMassageProps) => {
  const [modalCalendarOpen, setModalCalendarOpen] = useState(false);

  console.log("MIII DETAILPRODUCT TOTAL: ", detailProduct);
  const handleButtonClick = () => {};

  const containerStyle = {
    position: "relative",
    marginTop: "30px",
  };

  const imgStyle = {
    width: "90%",
    height: "70%",
    objectFit: "cover",
  };

  return (
    <Container sx={containerStyle}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <img src={detailProduct.image} alt="image-product" style={imgStyle} />
          {modalCalendarOpen && (
            <ModalCalendar fromRequest={true} detail={detailProduct.title} />
          )}
        </Grid>
        <Grid item xs={2} mt={30}>
          <ButtonMain onClick={() => setModalCalendarOpen(true)}>
            Agendar
          </ButtonMain>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductMassage;

// import React from "react";
// import { Button, Container, Grid } from "@mui/material";

// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   priceValue: string;
// }

// interface ProductMassageProps {
//   detailProduct: Product;
// }

// const ProductMassage = ({ detailProduct }: ProductMassageProps) => {
//   const handleButtonClick = () => {
//     // Función para manejar el click del botón
//   };

//   return (
//     <Container>
//       <Grid container spacing={2}>
//         <Grid item xs={11} md={5}>
//           <img
//             src={detailProduct.image}
//             alt="image-product"
//             style={{ maxWidth: "100%" }}
//           />
//         </Grid>
//         <Grid item xs={1} md={1}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleButtonClick}
//           >
//             Agendar
//           </Button>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ProductMassage;

// NEW 3

// NEW
// import React from "react";
// import { Button, Box, Container, Grid } from "@mui/material";

// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   priceValue: string;
// }

// interface ProductMassageProps {
//   detailProduct: Product;
// }

// const ProductMassage = ({ detailProduct }: ProductMassageProps) => {
//   const handleButtonClick = () => {
//     // Función para manejar el click del botón
//   };

//   return (
//     <Container>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <img
//             src={detailProduct.image}
//             alt="image-product"
//             style={{ maxWidth: "100%" }}
//           />
//           <Grid item xs={16} md={3} mt={10} textAlign="right">
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleButtonClick}
//               sx={{
//                 width: "100%", // El botón ocupa todo el ancho del contenedor
//               }}
//             >
//               Agendar
//             </Button>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ProductMassage;

{
  /* <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          margin: "20px",
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${detailProduct.image})`,

        }}
      >
        <Container maxWidth="sm">
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
            sx={{
              width: "100%", // El botón ocupa todo el ancho del contenedor
            }}
          >
            Agendar
          </Button> 
        </Container>
      </Box>*/
}

// // NEW 1
// import React from "react";
// import { Button, Box, Container } from "@mui/material";

// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   priceValue: string;
// }

// interface ProductMassageProps {
//   detailProduct: Product;
// }

// const ProductMassage = ({ detailProduct }: ProductMassageProps) => {
//   const handleButtonClick = () => {
//     // Función para manejar el click del botón
//   };

//   return (
//     <Container maxWidth="lg">
//       <Box
//         sx={{
//           height: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "20px",
//           margin: "20px",
//           position: "relative",
//           overflow: "hidden",
//           backgroundImage: `url(${detailProduct.image})`,

//         }}
//       >
//         <Container maxWidth="sm">
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleButtonClick}
//             sx={{
//               width: "100%", // El botón ocupa todo el ancho del contenedor
//             }}
//           >
//             Agendar
//           </Button>
//         </Container>
//       </Box>
//     </Container>
//   );
// };

// export default ProductMassage;

// OLD

// import React from "react";
// import { Button, Box, Container } from "@mui/material";

// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   priceValue: string;
// }

// interface ProductMassageProps {
//   detailProduct: Product;
// }

// const ProductMassage = ({ detailProduct }: ProductMassageProps) => {

//   const handleButtonClick = () => {
//   };

//   return (
//     <Box
//       sx={{
//         height: "100vh", // Establece la altura al 100% de la ventana
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundImage: `url(${detailProduct.image})`,
//         padding: "100px",
//         margin: "100px"
//       }}
//     >
//       <Container>
//         <Button variant="contained" color="primary" onClick={handleButtonClick}>
//           Agendar
//         </Button>
//       </Container>
//     </Box>
//   );
// };

// export default ProductMassage;
