import Image from "next/image";
import bg from "../../public/background/home-background.png"
import Navigation from "./components/navigation";
import { Navigation as LucideNavigation } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-25"/>
      <div className="w-full h-screen">
        <Navigation />
        {/* If you need to use the Lucide Navigation component, use it as LucideNavigation */}
        {/* <LucideNavigation /> */}
      </div>
    </main>
  );
}
