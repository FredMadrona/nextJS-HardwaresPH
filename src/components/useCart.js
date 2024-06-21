import { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { useSession } from "next-auth/react";

const fetcher = async (url, token) => {
  try {
    console.log(url);
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cart data:", error);
    throw error;
  }
};

export const useCart = () => {
  const { data: session, status } = useSession();
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (session?.user?.data?.token) {
      setToken(session.user.data.token);
    }
  }, [session]);
// ADD URL TO .ENV
  const { data: cartItems, mutate } = useSWR(
      token ? ["http://127.0.0.1:8000/api/cart", token] : null,
      fetcher,
      {
        fallbackData: [],
      }
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
          "http://127.0.0.1:8000/api/cart",
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
      await axios.delete(`http://127.0.0.1:8000/api/cart/${itemId}`, {
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
          "http://127.0.0.1:8000/api/cart",
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
    isError: status === "error",
  };
};
