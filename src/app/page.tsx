// import { Button } from "@/components/ui/button";
// import { ModeToggle } from "@/components/ModeToggle";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import { prisma } from "@/lib/prisma";

// export default async function Home() {
//   await prisma
//   return (
//     <div>
//           <SignedOut>
//             <SignInButton mode="modal">
//               <Button>Sign in
//                 </Button>
//             </SignInButton>
//           </SignedOut>
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//           <Button variant={"secondary"}>Click me
//           </Button>
//     </div>
//   );
// }






import { prisma } from "@/lib/prisma";

export default async function Home() {
  await prisma
  return (
    <div className="m-4">
      <h1>home page content</h1>
    </div>
  );
}
