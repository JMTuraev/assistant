import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
    const {
        data: session
    } = useSession()

    if (session) {
        return (
          <>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}> Sign out </button>{" "}
          </>
        );
    }

    return (
      <>
        Not signed in <br />
        <button
          onClick={()  => 
            signIn("Assistant", { redirect: false }).then(
              ({ ok, error }) => {
                if (ok) {
                  router.push("/dashboard");
                } else {
                  console.log(error);
                  toast("Credentials do not match!", { type: "error" });
                }
              }
            )
          }
        >
          {" "}
          Sign in{" "}
        </button>{" "}
      </>
    );
}