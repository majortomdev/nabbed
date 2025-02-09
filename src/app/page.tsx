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






import CreatePost from "@/components/ui/CreatePost";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  await prisma;
  const user = await currentUser();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        {user? <CreatePost /> : null}  
      </div>

      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        WhoToFollow
      </div>
      
    </div>
  );
}
