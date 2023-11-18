// NEW 2

import React, { useState } from "react";
import useRouter from "next/router";
import { useAtom } from "jotai";
import { cartAtom } from "@/store/cart-atom";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from "@mui/material";

import { ButtonMain, ButtonSecondary } from "@/style/styled";

interface Product {
  id: number;
  title: string;
  image: string;
  priceValue: string;
}

interface ProductListProps {
  title: string;
  products: Product[];
}

const ProductList = ({ title, products }: ProductListProps) => {
  const [isModalOpenSuccess, setIsModalOpenSuccess] = useState(false);

  const [cart, setCart] = useAtom(cartAtom);

  const addToCart = (product: Product) => {
    setIsModalOpenSuccess(true);
    setCart((prevCart) => [...prevCart, product]);
  };

  const navigateToProductDetail = (product: Product) => {
    const router = useRouter;
    router.push({
      pathname: "/product",
      query: { product: JSON.stringify(product) },
    });
  };

  return (
    <Box>
      <Typography
        variant="h3"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          fontFamily: "Cinzel, serif",
          textAlign: "center",
          marginTop: 20,
          marginBottom: 25,
        }}
      >
        {title}
      </Typography>

      {products.map((product) => (
        <Card
          key={product.id}
          style={{ width: "100%", margin: "56px 0", display: "flex" }}
        >
          <CardMedia
            component="img"
            height="200"
            width="250"
            image={product.image}
            alt={product.title}
            style={{ flex: "1", }}
          />
          <CardContent style={{ flex: "2" }}>
            <Stack direction="column" spacing={2}>
              <Typography variant="h6" fontWeight={900}>
                {product.title}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Typography variant="body1" fontWeight={900} gutterBottom>
                  Precio:
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {product.priceValue}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="flex-end" spacing={4}>
                <ButtonSecondary onClick={() => addToCart(product)}>
                  Agregar al carrito
                </ButtonSecondary>
                <ButtonSecondary onClick={() => navigateToProductDetail(product)}>
                  Ver más
                </ButtonSecondary>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ))}

      <Dialog
        open={isModalOpenSuccess}
        onClose={() => setIsModalOpenSuccess(false)}
      >
        <DialogTitle sx={{ background: "#000", color: "#fff" }}>
          Producto agregado
        </DialogTitle>
        <Divider sx={{ width: "100%" }} />
        <DialogContent>
          <Stack width="100%" direction="column" spacing={2} mt={2}>
            <Typography variant="body1" textAlign="justify">
              Hemos agregado tu masaje al carrito de compras!
            </Typography>

            <DialogActions>
              <Stack direction="row" spacing={2}>
                <Button
                  onClick={() => setIsModalOpenSuccess(false)}
                  sx={{
                    background: "#fff",
                    border: "1px solid #fff",
                    fontWeight: "900",
                    color: "#000",
                    "&:hover": { background: "hsl(0deg 0% 0% / 16%)" },
                  }}
                >
                  Entendido
                </Button>
              </Stack>
            </DialogActions>
          </Stack>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ProductList;


// NEW 1

// import React, { useState } from "react";
// import useRouter from "next/router";
// import { useAtom } from "jotai";
// import { cartAtom } from "@/store/cart-atom";

// import {
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
//   Grid,
//   Stack,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Divider,
// } from "@mui/material";

// import { styled } from "@mui/system";

// import { ButtonMain, ButtonSecondary } from "@/style/styled";

// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   priceValue: string;
// }

// interface ProductListProps {
//   title: string;
//   products: Product[];
// }

// const ProductList = ({ title, products }: ProductListProps) => {
//   // Estado para almacenar los productos en el carrito

//   const [isModalOpenSuccess, setIsModalOpenSuccess] = useState(false);

//   const [cart, setCart] = useAtom(cartAtom);

//   const addToCart = (product: Product) => {
//     // Utilizar la función de actualización del átomo para modificar el carrito
//     setIsModalOpenSuccess(true);
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const navigateToProductDetail = (product: Product) => {
//     const router = useRouter;
//     router.push({
//       pathname: "/product", // Reemplaza con la ruta de tu página de detalles del producto
//       query: { product: JSON.stringify(product) }, // Convierte el objeto a una cadena JSON y envíalo como parámetro en la URL
//     });
//   };

//   return (
//     <div>
//       <Typography
//         variant="h3"
//         style={{
//           textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Agrega una sombra al texto como trazo
//           fontFamily: "Cinzel, serif",
//           textAlign: "center",
//           marginTop: 20,
//           marginBottom: 25,
//         }}
//       >
//         {title}
//       </Typography>

//       <Grid container spacing={10}>
//         {products.map((product) => (
//           <Grid item xs={12} sm={6} md={4} key={product.id}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={product.image}
//                 alt={product.title}
//               />
//               <CardContent>
//                 <Stack direction="column" spacing={2}>
//                   <Typography variant="h6" fontWeight={900}>
//                     {product.title}
//                   </Typography>
//                   <Stack direction="row" spacing={2}>
//                     <Typography variant="body1" fontWeight={900} gutterBottom>
//                       Precio:
//                     </Typography>
//                     <Typography variant="body1" gutterBottom>
//                       {product.priceValue}
//                     </Typography>
//                   </Stack>

//                   <Stack direction="row" spacing={4}>
//                     <ButtonSecondary
//                       onClick={() => addToCart(product)} // Agregar al carrito
//                     >
//                       Agregar al carrito
//                     </ButtonSecondary>
//                     <ButtonSecondary
//                       onClick={() => navigateToProductDetail(product)}
//                     >
//                       Ver más
//                     </ButtonSecondary>
//                   </Stack>
//                 </Stack>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <Dialog
//         open={isModalOpenSuccess}
//         onClose={() => setIsModalOpenSuccess(false)}
//       >
//         {/* <DialogTitle sx={{ background: "#b27dd961", color: "#4b0082" }}> */}
//         <DialogTitle sx={{ background: "#000", color: "#fff" }}>
//           Producto agregado
//         </DialogTitle>
//         <Divider sx={{ width: "100%" }} />
//         <DialogContent>
//           <Stack width="100%" direction="column" spacing={2} mt={2}>
//             <Typography variant="body1" textAlign="justify">
//               Hemos agregado tu masaje al carrito de compras!
//             </Typography>

//             <DialogActions>
//               <Stack direction="row" spacing={2}>
//                 <Button
//                   onClick={() => setIsModalOpenSuccess(false)}
//                   sx={{
//                     background: "#fff",
//                     border: "1px solid #fff",
//                     fontWeight: "900",

//                     color: "#000",

//                     "&:hover": { background: "hsl(0deg 0% 0% / 16%)" },
//                   }}
//                 >
//                   Entendido
//                 </Button>
//               </Stack>
//             </DialogActions>
//           </Stack>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default ProductList;

// OLD

// import React from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
//   Grid,
//   Stack,
// } from "@mui/material";

// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   priceValue: string;
// }

// interface ProductListProps {
//   title: string;
//   products: Product[];
// }

// const ProductList = ({ title, products }: ProductListProps) => {
//   return (
//     <div>
//       <Typography variant="h4" gutterBottom>
//         {title}
//       </Typography>

//       <Grid container spacing={2}>
//         {products.map((product) => (
//           <Grid item xs={12} sm={6} md={4} key={product.id}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={product.image}
//                 alt={product.title}
//               />
//               <CardContent>
//                 <Typography variant="h6">{product.title}</Typography>
//                 <Stack direction='row' spacing={2}>
//                   <Typography variant="body1" fontWeight={900} gutterBottom>
//                     Precio:
//                   </Typography>

//                   <Typography variant="body1" gutterBottom>
//                     {product.priceValue}
//                   </Typography>
//                 </Stack>

//                 <Button variant="contained" color="primary">
//                   Agregar al carrito
//                 </Button>
//                 <Button variant="outlined" color="primary">
//                   Ver más
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default ProductList;
