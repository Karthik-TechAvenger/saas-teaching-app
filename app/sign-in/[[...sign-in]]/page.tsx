import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-[#fe5933] text-white hover:bg-[#fe5933] focus:ring-2 focus:ring-[#fe5933] focus:ring-offset-2",
          },
        }}
      />
    </main>
  );
}
