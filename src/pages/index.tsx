// NEW

import React, { useState } from "react";

import AppBarMain from "@/components/Header/app-bar-main";

import SectionMain from "@/components/Sections/section-main";
import Footer from "@/components/Footer";
import ContactBanner from "@/components/Header/contact-banner";

const featuredSection = [
  {
    title: "Masajes Faciales",
    description:
      "Cuidado facial holístico con las técnicas mas avanzadas para la regeneración de cuerpo , mente y alma.",

    image: "/img/back-body-skill-color.jpg",
  },
];

const HomePage = () => {
  return (
    <>
      <AppBarMain />

      {featuredSection.map((section) => (
        <SectionMain
          imageUrl={section.image}
          title={section.title}
          description={section.description}
        />
      ))}
      <Footer />
    </>
  );
};

export default HomePage;

// OLD

// // src/pages/index.js
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
// import Section from "@/components/MainBlog/section";

// const blogPosts = [
//   {
//     title: "Mi primer post",
//     content: "Este es mi primer artículo en el blog...",
//   },
//   {
//     title: "Otro post interesante",
//     content: "Hoy quiero hablar sobre otro tema interesante...",
//   },
// ];

// const mainFeaturedPost = {
//   title: "Tratamientos Holísticos",
//   description:
//     "Encuentra el equilibrio con la naturaleza desde una experiencia relajante para la mente y cuerpo.",
//   // image: "https://source.unsplash.com/random?wallpapers",

//   // image: "/img/imagemain.jpg",

//   // image: "/img/main-image2.webp",

//   // image: "/img/masaje1.jpg",

//   image: "/img/reflexologia-podal.jpg",

//   // image: "/img/flower_index.jpg",

//   // image: "/img/1.png",

//   // image: "/img/descarga.jpg",

//   // image: "/img/mastailandes.jpg",

//   imageText: "main image description",
//   linkText: "Continue reading…",
// };

// const featuredPosts = [
//   {
//     title: "Encuentra la paz interior y exterior",
//     date: "Nov 12",
//     description:
//       "Tenemos una gran variedad de procesos relajantes para conectarte con tu cuerpo y la naturaleza. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in velit nec nisl lacinia ullamcorper. Sed varius, velit a luctus mattis, metus dui suscipit orci, a fringilla quam purus non augue. Proin id feugiat ipsum. Nullam sit amet sapien euismod, lobortis justo eu, euismod ipsum. Integer eget purus ac eros dignissim fermentum. Suspendisse potenti. Nullam eu urna at libero rhoncus varius. Vivamus sit amet tristique arcu. Suspendisse potenti. Mauris scelerisque libero at lacinia. Sed vel justo eu purus interdum volutpat. Sed egestas, libero eu venenatis suscipit, turpis urna tincidunt felis, vel varius quam risus id libero.",

//     image: "/img/mastailandes.jpg",

//     // image: 'https://source.unsplash.com/random?wallpapers',
//     imageLabel: "Image Text",
//   },
//   {
//     title: "Evento Yoga compartido",
//     date: "Nov 11",
//     description:
//       "Tenemos una gran variedad de procesos relajantes para conectarte con tu cuerpo y la naturaleza.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in velit nec nisl lacinia ullamcorper. Sed varius, velit a luctus mattis, metus dui suscipit orci, a fringilla quam purus non augue. Proin id feugiat ipsum. Nullam sit amet sapien euismod, lobortis justo eu, euismod ipsum. Integer eget purus ac eros dignissim fermentum. Suspendisse potenti. Nullam eu urna at libero rhoncus varius. Vivamus sit amet tristique arcu. Suspendisse potenti. Mauris scelerisque libero at lacinia. Sed vel justo eu purus interdum volutpat. Sed egestas, libero eu venenatis suscipit, turpis urna tincidunt felis, vel varius quam risus id libero.",

//     image: "/img/descarga.jpg",

//     // image: 'https://source.unsplash.com/random?wallpapers',
//     imageLabel: "Image Text",
//   },
// ];

// const featuredSection = [
//   {
//     title: "Encuentra la paz interior y exterior",
//     description:
//       "Tenemos una gran variedad de procesos relajantes para conectarte con tu cuerpo y la naturaleza.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in velit nec nisl lacinia ullamcorper. Sed varius, velit a luctus mattis, metus dui suscipit orci, a fringilla quam purus non augue. Proin id feugiat ipsum. Nullam sit amet sapien euismod, lobortis justo eu, euismod ipsum. Integer eget purus ac eros dignissim fermentum. Suspendisse potenti. Nullam eu urna at libero rhoncus varius. Vivamus sit amet tristique arcu. Suspendisse potenti. Mauris scelerisque libero at lacinia. Sed vel justo eu purus interdum volutpat. Sed egestas, libero eu venenatis suscipit, turpis urna tincidunt felis, vel varius quam risus id libero.",

//     image: "/img/masaje1.jpg",

//     // image: 'https://source.unsplash.com/random?wallpapers',
//     // imageLabel: "Image Text",
//   },
//   {
//     title: "Evento Yoga compartido",
//     // date: "Nov 11",
//     description:
//       "Tenemos una gran variedad de procesos relajantes para conectarte con tu cuerpo y la naturaleza.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in velit nec nisl lacinia ullamcorper. Sed varius, velit a luctus mattis, metus dui suscipit orci, a fringilla quam purus non augue. Proin id feugiat ipsum. Nullam sit amet sapien euismod, lobortis justo eu, euismod ipsum. Integer eget purus ac eros dignissim fermentum. Suspendisse potenti. Nullam eu urna at libero rhoncus varius. Vivamus sit amet tristique arcu. Suspendisse potenti. Mauris scelerisque libero at lacinia. Sed vel justo eu purus interdum volutpat. Sed egestas, libero eu venenatis suscipit, turpis urna tincidunt felis, vel varius quam risus id libero.",

//     image: "/img/reflexologia-podal.jpg",

//     // image: 'https://source.unsplash.com/random?wallpapers',
//     // imageLabel: "Image Text",
//   },

//   {
//     title: "Tarjeta de regalo",
//     description:
//       "Tenemos una gran variedad de procesos relajantes para conectarte con tu cuerpo y la naturaleza.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in velit nec nisl lacinia ullamcorper. Sed varius, velit a luctus mattis, metus dui suscipit orci, a fringilla quam purus non augue. Proin id feugiat ipsum. Nullam sit amet sapien euismod, lobortis justo eu, euismod ipsum. Integer eget purus ac eros dignissim fermentum. Suspendisse potenti. Nullam eu urna at libero rhoncus varius. Vivamus sit amet tristique arcu. Suspendisse potenti. Mauris scelerisque libero at lacinia. Sed vel justo eu purus interdum volutpat. Sed egestas, libero eu venenatis suscipit, turpis urna tincidunt felis, vel varius quam risus id libero.",

//     image: "/img/masaje1.jpg",

//     // image: 'https://source.unsplash.com/random?wallpapers',
//     // imageLabel: "Image Text",
//   },
// ];

// const sidebar = {
//   title: "About",
//   description:
//     "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
//   archives: [
//     { title: "March 2020", url: "#" },
//     { title: "February 2020", url: "#" },
//     { title: "January 2020", url: "#" },
//     { title: "November 1999", url: "#" },
//     { title: "October 1999", url: "#" },
//     { title: "September 1999", url: "#" },
//     { title: "August 1999", url: "#" },
//     { title: "July 1999", url: "#" },
//     { title: "June 1999", url: "#" },
//     { title: "May 1999", url: "#" },
//     { title: "April 1999", url: "#" },
//   ],
//   social: [
//     { name: "GitHub", icon: GitHubIcon },
//     { name: "Twitter", icon: TwitterIcon },
//     { name: "Facebook", icon: FacebookIcon },
//   ],
// };

// // const posts = [post1, post2, post3];

// const toCalendar = () => {
//   Router.push("/calendar");
// };

// const HomePage = () => {
//   const [modalCalendarOpen, setModalCalendarOpen] = useState(false);

//   return (
//     <Container maxWidth="xl" style={{ padding: 0, right: 0, left: 0 }}>
//       <AppBarMain />
//       <MainImagePost post={mainFeaturedPost} />

//       {/* <Grid container mt={4} mb={4}> */}
//       <Container>
//         <Grid
//           container
//           justifyContent="center"
//           alignItems="center"
//           // style={{ minHeight: "100vh" }}
//         >
//           {modalCalendarOpen && <ModalCalendar />}

//           <Grid item xs={12} md={6} textAlign="center" mt={-90} mb={6}>
//             <Button
//               sx={{
//                 // background: "#6f24a6",
//                 background: "transparent",

//                 color: "primary",
//                 height: "90px",
//                 width: "280px",
//                 p: 5,
//                 border: "solid #fff 3px",
//                 // border: "solid #4b0082 2px",

//               }}
//               onClick={() => setModalCalendarOpen(true)}
//             >
//               <Typography
//                 color="#000"
//                 fontWeight={800}
//                 whiteSpace="nowrap"
//                 fontSize="20px"
//                 fontFamily="Cinzel, serif"
//               >
//                 Agenda tu cita!
//               </Typography>
//             </Button>
//           </Grid>

//           {/* <Button
//             sx={{ background: "blue", color: "primary" }}
//             onClick={toCalendar}
//           >
//             <Typography color="#ffff" fontWeight={800}>
//               Agendar Cita
//             </Typography>
//           </Button> */}

//           {/* {modalCalendarOpen && (
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DateCalendar />
//           </LocalizationProvider>
//         )} */}

//           {/* <MyCalendar /> */}
//         </Grid>

//         <Container maxWidth="xl" style={{ padding: 0, right: 0, left: 0 }}>
//           <CssBaseline />

//           {featuredSection.map((section) => (
//             <Section
//               image={section.image}
//               title={section.title}
//               description={section.description}
//               // image="/imagen1.jpg"
//               // title="Título 1"
//               // description="Descripción de la sección 1."
//             />
//           ))}
//         </Container>

//         <Grid container spacing={4} mb={4}>
//           {featuredPosts.map((post) => (
//             <ArticlesNewBlog key={post.title} post={post} />
//           ))}
//         </Grid>
//         <Grid container spacing={5} sx={{ mt: 3 }}>
//           {/* <ArticlePostMain title="From the firehose" posts={posts} /> */}
//           {/* <Main title="From the firehose" posts={posts} /> */}
//           <Sidebar
//             title={sidebar.title}
//             description={sidebar.description}
//             archives={sidebar.archives}
//             social={sidebar.social}
//           />
//         </Grid>
//         <Typography variant="h4">
//           Encuentra el punto real de equilibrio con la naturaleza!!!
//         </Typography>
//         <Grid container spacing={2}>
//           {blogPosts.map((post, index) => (
//             <Grid item xs={12} sm={6} key={index}>
//               <BlogPostMain title={post.title} content={post.content} />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Container>
//   );
// };

// export default HomePage;
