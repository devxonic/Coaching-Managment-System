"use client";
import Header from "@/components/Main/Drawer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header>{children}</Header>
    </>
  );
}
