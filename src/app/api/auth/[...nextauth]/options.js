import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";


const token = process.env.NEXTAUTH_SECRET;


export const options = {

  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60, // the duration of this session will last for two days
  },


  providers: [
    Credentials({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },

      async authorize(credentials) {
        console.log('Using token:', token);
        const { email, password } = credentials;
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/login', {
            email,
            password
          }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
             }
          });

          const user = response.data;
          if (user) {
            console.log('Using token:', token);
            return user;
          } else {
            return null;
          }
        } catch (error) {
          // Handle any errors that occur during the API request
          console.error('Login error response data:', error.response.data);
          console.error('Login error response status:', error.response.status);
          console.error('Login error response headers:', error.response.headers);
          console.error('Login error:', error);
          return null;
        }
      },
    }),

    FacebookProvider({
      profile(profile) {
        console.log("Facebook user: ", profile);

        return {
          ...profile,
          id: profile.sub,
          loggedInAs: "facebook",
        };
      },
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),

    GoogleProvider({
      profile(profile) {
        console.log("Profile Google: ", profile);

        return {
          ...profile,
          id: profile.sub,
          loggedInAs: "google",
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  pages: {
    signIn: "/auth/signin",
  },

  callbacks: {
    async signIn({ user, credentials }) {
      if (credentials && user) {
        console.log("Successful login using credentials:", user); 
        window.location.href = "/";
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
