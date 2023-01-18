import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";

export default function useCart() {
  return useContext(CartContext);
}