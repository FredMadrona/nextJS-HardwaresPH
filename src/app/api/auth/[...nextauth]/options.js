import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";

export const options = {
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60, // the duration of this session will last for two days
  },

  providers: [
    Credentials({
      type: "credentials",
      credentials: {
        email: { label: "E-Mail", type: "email", placeholder: "Enter your email" },
        password: { label: "Password", type: "password", placeholder: "Enter your password" },
      },

      async authorize(credentials) {
        const { email, password } = credentials;
        if (email === "sample@gmail.com" && password === "password") {
          return {
            Id: 1,
            email: email,
            userName: "Admin",
          };
        } else {
          return null;
        }
      }
    }),

    FacebookProvider({
      profile(profile) {
        console.log("Facebook user: ", profile);

        let userRole = "Facebook User";
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),

    GoogleProvider({
      profile(profile) {
        console.log("Profile Google: ", profile);

        let userRole = "Google User";
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
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
