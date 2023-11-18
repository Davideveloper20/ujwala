// NEW

import React from "react";
import Container from "@mui/material/Container";

import AppBarMain from "@/components/Header/app-bar-main";

import ProductList from "@/components/Products/product-list";
import ProductSelected from "@/components/Products/product-selected";
import Footer from "@/components/Footer";

const products = [
  {
    id: 1,
    title: "Ujwala Signature",
    priceValue: "380.000",
    image: "/img/ujwala-signature.png",
  },
  {
    id: 2,
    title: "Le Grand Muka",
    priceValue: "350.000",
    image: "/img/legrand-muka.png",
  },
  {
    id: 3,
    title: "Miolift Fascia 3D",
    priceValue: "250.000",
    image: "/img/miolift-fascia.png",
  },
  {
    id: 4,
    title: "Muka Tridoshiko",
    priceValue: "250.000",
    image: "/img/muka-tridoshico.png",
  },
  {
    id: 5,
    title: "Gua Sha Sagrada",
    priceValue: "200.000",
    image: "/img/guasha-sagrada.png",
  },
  {
    id: 6,
    title: "Prana Profundo",
    priceValue: "200.000",
    image: "/img/prana-profundo.png",
  },
];

const MassageMenu = () => {
  const openCartImage = "/img/ujwala-signature.png";

  const buttonText = "Ver carrito";

  const handleButtonClick = () => {
    console.log("Botón clicado");
  };

  return (
    <>
      <AppBarMain />
      <Container>
        <ProductList title="Carta de Masajes" products={products} />
      </Container>

      <Footer />
    </>
  );
};

export default MassageMenu;

// // OLD

// src/pages/index.js
// import React, { useState } from "react";
// import Router from "next/router";

// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

// import {
//   Button,
//   Container,
//   Grid,
//   Typography,
//   CssBaseline,
// } from "@mui/material";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import BlogPostMain from "@/components/blog-post-main";
// import ModalCalendar from "@/components/Calendar/modal-calendar";

// import AppBarMain from "@/components/Header/app-bar-main";
// import MainImagePost from "@/components/MainBlog/main-image-post";
// import ArticlesNewBlog from "@/components/MainBlog/articles-new-blog";
// import ArticlePostMain from "@/components/MainBlog/article-post-main";
// import Sidebar from "@/components/MainBlog/sidebar";
// // import Section from "@/components/MainBlog/section";
// // import SectionMain from "@/components/Sections/section-main";

// import Section from "@/components/Sections/section";

// const featuredSection = [
//   {
//     title: "Encuentra la paz interior y exterior",
//     description:
//       "Tenemos una gran variedad de procesos relajantes para conectarte con tu cuerpo y la naturaleza. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in velit nec nisl lacinia ullamcorper. Sed varius, velit a luctus mattis, metus dui suscipit orci, a fringilla quam purus non augue. Proin id feugiat ipsum. Nullam sit amet sapien euismod, lobortis justo eu, euismod ipsum. Integer eget purus ac eros dignissim fermentum. Suspendisse potenti. Nullam eu urna at libero rhoncus varius. Vivamus sit amet tristique arcu. Suspendisse potenti. Mauris scelerisque libero at lacinia. Sed vel justo eu purus interdum volutpat. Sed egestas, libero eu venenatis suscipit, turpis urna tincidunt felis, vel varius quam risus id libero.",

//     image: "/img/mastailandes.jpg",
//   },
//   {
//     title: "Evento Yoga compartido",
//     // date: "Nov 11",
//     description:
//       "Tenemos una gran variedad de procesos relajantes para conectarte con tu cuerpo y la naturaleza.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in velit nec nisl lacinia ullamcorper. Sed varius, velit a luctus mattis, metus dui suscipit orci, a fringilla quam purus non augue. Proin id feugiat ipsum. Nullam sit amet sapien euismod, lobortis justo eu, euismod ipsum. Integer eget purus ac eros dignissim fermentum. Suspendisse potenti. Nullam eu urna at libero rhoncus varius. Vivamus sit amet tristique arcu. Suspendisse potenti. Mauris scelerisque libero at lacinia. Sed vel justo eu purus interdum volutpat. Sed egestas, libero eu venenatis suscipit, turpis urna tincidunt felis, vel varius quam risus id libero.",

//     image: "/img/reflexologia-podal.jpg",
//   },

//   {
//     title: "Tarjeta de regalo",
//     description:
//       "Tenemos una gran variedad de procesos relajantes para conectarte con tu cuerpo y la naturaleza.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in velit nec nisl lacinia ullamcorper. Sed varius, velit a luctus mattis, metus dui suscipit orci, a fringilla quam purus non augue. Proin id feugiat ipsum. Nullam sit amet sapien euismod, lobortis justo eu, euismod ipsum. Integer eget purus ac eros dignissim fermentum. Suspendisse potenti. Nullam eu urna at libero rhoncus varius. Vivamus sit amet tristique arcu. Suspendisse potenti. Mauris scelerisque libero at lacinia. Sed vel justo eu purus interdum volutpat. Sed egestas, libero eu venenatis suscipit, turpis urna tincidunt felis, vel varius quam risus id libero.",

//     image: "/img/masaje1.jpg",
//   },
// ];

// const toCalendar = () => {
//   Router.push("/calendar");
// };

// const HomePage = () => {
//   const [modalCalendarOpen, setModalCalendarOpen] = useState(false);

//   return (
//     <>
//       <AppBarMain />

//       {featuredSection.map((section) => (
//         <Section
//           imageUrl={section.image}
//           title={section.title}
//           description={section.description}
//         />
//       ))}
//     </>
//   );
// };

// export default HomePage;
