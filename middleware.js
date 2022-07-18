// import { withAuth } from "next-auth/middleware"

// // More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
// export default withAuth({
//   callbacks: {
//     authorized: ({ token }) => token?.userRole === "admin",
//   },
// })
import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"



export async  function middleware(req) {
  if (req.nextUrl.pathname.startsWith('/owner/')) {
    const session = await getToken({ req, secret: process.env.SECRET })
    console.log( session );

    if (!session) return req.redirect("/api/auth/signin")

    if (session.user.userLevel !== 'role-hcvd7ol5qnpscw') {
      const url = req.nextUrl.clone()
      url.pathname = '/'
      return NextResponse.rewrite(url)
    }
    
  }

  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    // This logic is only applied to /dashboard
  }
}