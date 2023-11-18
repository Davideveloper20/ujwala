// NEW

import React from "react";
import Container from "@mui/material/Container";

import AppBarMain from "@/components/Header/app-bar-main";

import ProductList from "@/components/Products/product-list";
import ProductSelected from "@/components/Products/product-selected";
import AboutUs from "@/components/About/about-us";
import Footer from "@/components/Footer";

const featuredAbout = [
  {
    title: "Julia Ferry",
    description:
      "Experta francesa en masajes faciales. Julia trabaja entre París y Medellín ofreciendo rituales personalizados con técnicas avanzadas que estudia alrededor del mundo con sus maestros y mentores.",

    image: "/img/julia_y_julian.jpg",
  },
  {
    title: "Masajes Faciales",
    description:
      "Cuidado facial holístico con las técnicas mas avanzadas para la regeneración de cuerpo , mente y alma.",

    image: "/img/about1.jpg",
  },
  {
    title: "Cuidado Facial",
    description:
      "Los beneficios del cuidado facial holístico se sienten mas allá de la piel y la belleza: regeneran el cuerpo , la mente e iluminan el alma .",

    image: "/img/about2.png",
  },

  {
    title: "Ambiente Curativo",
    description:
      "Vivirás en su consultorio una experiencia de rejuvenecimiento y bienestar integral apoyada por su experticia ayurvedica.",

    image: "/img/about3.jpg",
  },

  {
    title: "Formación Continua",
    description:
      "Julia es una profesional que continuamente está investigando y actualizando su contenido y sus productos para ofrecer el mejor servicio con técnicas y prácticas de vanguardia.",

    image: "/img/about5.jpg",
  },

   {
    title: "Productos naturales",
    description:
      "Con una curación exquisita de productos de cuidado facial vivirás en su consultorio una experiencia de rejuvenecimiento y bienestar integral apoyada por su experticia ayurvedica.",

    image: "/img/about8.jpg",
  },

  

  {
    title: "Productos naturales",
    description:
      "Con una curación exquisita de productos de cuidado facial vivirás en su consultorio una experiencia de rejuvenecimiento y bienestar integral apoyada por su experticia ayurvedica.",

    image: "/img/about10.jpg",
  },


  
  
  {
    title: "Masajes Faciales",
    description:
      "Cuidado facial holístico con las técnicas mas avanzadas para la regeneración de cuerpo , mente y alma.",

    image: "/img/about4.jpg",
  },
 
  {
    title: "Masajes Faciales",
    description:
      "Cuidado facial holístico con las técnicas mas avanzadas para la regeneración de cuerpo , mente y alma.",

    image: "/img/about6.jpg",
  },
  {
    title: "Masajes Faciales",
    description:
      "Cuidado facial holístico con las técnicas mas avanzadas para la regeneración de cuerpo , mente y alma.",

    image: "/img/about7.jpg",
  },
 
  {
    title: "Masajes Faciales",
    description:
      "Cuidado facial holístico con las técnicas mas avanzadas para la regeneración de cuerpo , mente y alma.",

    image: "/img/about9.jpg",
  },
 
];

const TabAboutUs = () => {
  return (
    <>
      <AppBarMain />

      {featuredAbout.map((feat, index) => (
        <AboutUs
          imageUrl={feat.image}
          title={feat.title}
          description={feat.description}
          index={index}
        />
      ))}

      <Footer />
    </>
  );
};

export default TabAboutUs;
