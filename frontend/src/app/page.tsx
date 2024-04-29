import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <>
          {/* <UserCard user={session?.user} pagetype={"Dashboard"} /> */}
          <h1>Hi {session.user?.name}, you are logged in</h1>
          <ul>
            <img
              src={session.user?.image as string}
              alt="user image"
              width={120}
              height={120}
              style={{ borderRadius: "50%" }}
            />
            <li>{session.user?.name}</li>
            <li>{session.user?.email}</li>
          </ul>
          <a href="/api/auth/signout">Sign out</a>
        </>
      ) : (
        <>
          <h1>Not logged in</h1>
          <a href="/api/auth/signin">Sign in</a>
        </>
      )}
    </>
  );
}
