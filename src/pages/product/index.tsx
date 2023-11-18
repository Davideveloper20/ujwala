// NEW

import React from "react";
import useRouter from "next/router";

import Container from "@mui/material/Container";

import AppBarMain from "@/components/Header/app-bar-main";

import ProductList from "@/components/Products/product-list";
import ProductSelected from "@/components/Products/product-selected";
import ProductMassage from "@/components/Products/product-massage";
import Footer from "@/components/Footer";

const ProductDetail = () => {

  const router = useRouter;
  const { product } = router.query;

  // Comprueba si la variable "product" no está vacía y conviértela de nuevo a un objeto
  const productObject = product ? JSON.parse(product as string) : null;

  return (
    <>
      <AppBarMain />
      <ProductMassage detailProduct={productObject} />
      <Footer />
    </>
  );
};

export default ProductDetail;
