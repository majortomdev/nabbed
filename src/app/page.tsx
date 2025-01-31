import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  console.log("HHHHHHHHHEy from front/main page");
  return (
    <div>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-red-500">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
    </div>
  );
}
