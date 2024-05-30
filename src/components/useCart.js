// hooks/useCart.js
import { useEffect } from "react";
import useSWR from "swr";
import axios from "axios";

// Define the fetcher function to fetch cart data from the API
const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const useCart = () => {
  const { data: cartItems, mutate } = useSWR("/api/cart", fetcher, {
    fallbackData: [],
  });

  useEffect(() => {
    // Fetch the cart data from the API when the component mounts
    if (typeof window !== "undefined") {
      mutate();
    }
  }, [mutate]);

  const addToCart = async (item) => {
    const updatedCart = [...cartItems, item];
    mutate(updatedCart, false);

    if (typeof window !== "undefined") {
      try {
        await axios.post("/api/cart/add", { item });
        mutate(); // Re-fetch the cart data from the API
      } catch (error) {
        console.error("Failed to add item to cart", error);
      }
    }
  };

  const removeFromCart = async (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    mutate(updatedCart, false);

    if (typeof window !== "undefined") {
      try {
        await axios.post("/api/cart/remove", { itemId });
        mutate(); // Re-fetch the cart data from the API
      } catch (error) {
        console.error("Failed to remove item from cart", error);
      }
    }
  };

  const updateCart = async (updatedCart) => {
    mutate(updatedCart, false);

    if (typeof window !== "undefined") {
      try {
        await axios.post("/api/cart/update", { cart: updatedCart });
        mutate(); // Re-fetch the cart data from the API
      } catch (error) {
        console.error("Failed to update cart", error);
      }
    }
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateCart,
  };
};
