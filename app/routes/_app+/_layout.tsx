import { Outlet } from "@remix-run/react";
import { AppLayout } from "~/components/layout/app-layout";

export default function Layout() {
  return (
    <>
      <AppLayout
        profileButtonDetails={{ username: "@johndoe", fullName: "John Doe" }}
      >
        <Outlet />
      </AppLayout>
    </>
  );
}
