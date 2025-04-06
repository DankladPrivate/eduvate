import FooterHomeOne from "@/components/footer/FooterHomeOne";
import FooterHomeThree from "@/components/footer/FooterHomeThree";
import NavbarFour from "@/components/navbar/NavbarFour";
import NavbarOne from "@/components/navbar/NavbarOne";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inner Pages - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

export default function InnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarFour />
      {children}
      <FooterHomeThree />
    </>
  );
}
