import Header from "@/components/Header";
import { LandingPage } from "@/components/LandingPage";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();

  console.log(users);
  return (
    <>
      <Header />
      <LandingPage />
    </>
  );
}
