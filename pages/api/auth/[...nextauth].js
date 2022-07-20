import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
// import jwt from "jsonwebtoken"

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Assistant",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        let user ;

        const res = await fetch(`${ process.env.NEXTAUTH_URL }/api/auth/authUser`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          })
            .then((res) => res.json())
            .then(
              (result) => {
                if (result.ok) {

                  user = result.user
                  
                  return user;
                }
                // Return null if user data could not be retrieved
                return null;
              },
              (err) => {
                console.log(err);
              }
            );

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }

      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      return token
    },
    session: async ({ session, token }) => {
      session.user = token.user // Setting token in session
      return session
    },
  },

  pages: {
    signIn: '/auth/login',
    // signOut: '/api/auth/signout',
  }
})
