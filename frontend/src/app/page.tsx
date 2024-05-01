import React from "react";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { Center, Box, Button } from "@mantine/core";
import UserCard from "./user-info/UserCard";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <>
          <UserCard pagetype={"Dashboard"} />
          {/* <h1>Hi {session.user?.name}, you are logged in</h1>
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
          <a href="/api/auth/signout">Sign out</a> */}
        </>
      ) : (
        <>
          <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
            <Box bg="var(--mantine-color-blue-light)">
              <h1>Welcome back! Please login.</h1>
              <a href="/api/auth/signin">Sign In</a>
            </Box>
          </Center>
        </>
      )}
    </>
  );
}
