import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";


const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMGYwNDkwZDMxZjI5NWM5MmUxNWEyOWNkOGIxNTZhNjI0MjUxYzNlM2YxZWY2MGY1NzhmZGM4ODllYzc2MDA4OGIzNmIzNjg0MTY2ZWQ3NDciLCJpYXQiOjE3MTc1OTI5MDYuMDMyMDQsIm5iZiI6MTcxNzU5MjkwNi4wMzIwNDMsImV4cCI6MTc0OTEyODkwNi4wMTMxMDYsInN1YiI6IiIsInNjb3BlcyI6W119.SDZH_af2eokK5m_4fp0aY9CoNIRsBYhmnyHM9a5PgFbeRyKsV0hWuDlZBE0T9s67Nu5oqHL1rRwui92_baSHaDkDgmVA3MGuHAS1ZG_9Tunf0TwCBMeTpv9hHjKIQudNSK351q4UGLxyzw2x5x9myjGg_T1C7QO14SmYw7okgNG9XQfmbNH2taZ1T_Asya61aIuq3637nvYsgJ9ZU5Xw8HngFEj076tVVrMSVIBWX-v26FFWHYQd8lCy4UsrSXop-uXL2cqoR1O272WX1vVyoCL8HVh5c9ARzEyHY-5MLIN6PYW4A89xrbT1phh0IU9ZtWnkrK0OYZVyn9QBqm4E6xUxEjgc3uYLRDLA7vvSwC1IIlAzBr5aEbPRMV7hcOLI4DAaRZve1leVuCWuihsgMAmYIQwlzuaNl9JbQ5eq4JwYQgz2OkNGDYUggGB9NZBvGcRuwV6lZ3kFSEGEZiw7yls9aRPflukyT9SGcNi38Vi9dp8gYV8SmnIVjEa8MHNDdzFPfSCh6PzwDJP8Gsd1kqNyTrt67JFACWdO9Nt0KB2Y7_GmI3T9ze7xAHTJHHEeyrK1MciGpJl-GEUOysO6Kowx0viP-tDBn_pdF1udrc-hbyS6tLQEJqpfhdyhnl0wb8h8bIpd9F3AFRLPxVJgGadJpt-TmWeWEozVQyjkSrY";


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
        return true; // Allow the login to proceed
      }
      return false; // Prevent the login if no user
    },
    async jwt({ token, user }) {
      // Add user data to the JWT token
      if (user) {
        token.id = user.id;
        token.firstName = user.first_name;
        token.lastName = user.last_name;
        token.email = user.email;
        token.role = user.role || 'user'; // Add a default role if not present
        token.token = user.token; // Include the token
      }
      return token;
    },
    async session({ session, token }) {
      // Add user data to the session
      if (session?.user) {
        session.user.id = token.id;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.token = token.token; // Include the token
      } else {
        console.log("saving session failed");
      }
      return session;
    },
  },
};
