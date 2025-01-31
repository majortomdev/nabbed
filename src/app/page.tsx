import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  console.log("HHHHHHHHHEy from front/main page");
  return (
    <div>
          <SignedOut>
            <SignInButton mode="modal">
              <Button>Sign in
                </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <ModeToggle />
          <Button variant={"secondary"}>Click me
          </Button>
    </div>
  );
}
