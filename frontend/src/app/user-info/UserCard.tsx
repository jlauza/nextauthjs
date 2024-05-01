import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { Button } from "@mantine/core";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function UserCard() {
  const session = await getServerSession(options);

  return (
    <>
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
      {/* <a href="/api/auth/signout">Sign out</a> */}
      <Link href="/api/auth/signout">
        <Button variant="filled">Sign Out</Button>
      </Link>
    </>
  );
}
