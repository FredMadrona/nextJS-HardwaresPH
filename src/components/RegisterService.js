// registerService.js

import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const registerService = {
  signUp: async ({ first_name, last_name, email, password, confirm_password, token }) => {
    try {
      const response = await axios.post(
        `${API_URL}/register`,
        {
          first_name,
          last_name,
          email,
          password,
          confirm_password
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("SignUp Result:", JSON.stringify(response.data, null, 2)); // Log the response from the server

      if (response.data.error) {
        return { error: true, message: response.data.message };
      } else {
        return { error: false, data: response.data };
      }
    } catch (error) {
      console.error("An error occurred during sign up:", error); // Log any caught errors
      return { error: true, message: "An unexpected error occurred" };
    }
  }
};

export default registerService;
