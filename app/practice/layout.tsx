import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function PracticeLayout({ children }: { children: React.ReactNode }) {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  return <>{children}</>;
}