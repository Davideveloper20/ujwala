
import React from "react";
import useRouter from "next/router";

import { useAtom } from 'jotai';

import { cartAtom } from '@/store/cart-atom';

import Container from "@mui/material/Container";

import AppBarMain from "@/components/Header/app-bar-main";
import ShoppingCarts from "@/components/ShoppingCart/shopping-carts";


import ProductList from "@/components/Products/product-list";
import ProductSelected from "@/components/Products/product-selected";
import ProductMassage from "@/components/Products/product-massage";
import Footer from "@/components/Footer";



const Cart = () => {
 const [cart] = useAtom(cartAtom);

  const router = useRouter;
  const { product } = router.query;

  const productObject = product ? JSON.parse(product as string) : null;

  return (
    <>
      <AppBarMain />
      <ShoppingCarts />
      <Footer />
    </>
  );
};

export default Cart;