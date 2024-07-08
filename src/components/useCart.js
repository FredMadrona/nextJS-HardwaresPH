import { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { useSession, signOut } from "next-auth/react";
import {fetcher} from "@/utils/fetcher";


export const useCart = (token) => {
  // const { data: session, status } = useSession();
  // const [token, setToken] = useState(null);
  const basePath = process.env.NEXT_PUBLIC_API_URL;

  // useEffect(() => {
  //   if (session?.user?.data?.token) {
  //     setToken(session.user.data.token);
  //   }
  // }, [session]);

  const { data: cartItems, mutate, error } = useSWR(
      //token ? [`${basePath}/cart`] : null,
     // fetcher,
      //{

     // }
      '/cart', url => fetcher(url, token)
  );

  useEffect(() => {
    if (token && typeof window !== "undefined") {
      mutate(); // Trigger initial fetch or re-fetch when token changes
    }
  }, [token, mutate]);

  const addToCart = async (item) => {
    if (!token) return; // Ensure token is available

    try {
      await axios.post(
          `${basePath}/cart`,
          { item },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
      );
      mutate(); // Re-fetch the cart data from the API
    } catch (error) {
      console.error("Failed to add item to cart", error);
    }
  };

  const removeFromCart = async (itemId) => {
    if (!token) return; // Ensure token is available

    try {
      await axios.delete(`${basePath}/cart/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      mutate(); // Re-fetch the cart data from the API
    } catch (error) {
      console.error("Failed to remove item from cart", error);
    }
  };

  const updateCart = async (updatedCart) => {
    if (!token) return; // Ensure token is available

    try {
      await axios.put(
          `${basePath}/cart`,
          { cart: updatedCart },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
      );
      mutate(); // Re-fetch the cart data from the API
    } catch (error) {
      console.error("Failed to update cart", error);
    }
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateCart,
    isLoading: status === "loading",
    isError: status === "error" || !!error,
  };
};
