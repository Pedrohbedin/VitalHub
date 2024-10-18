import Image from "next/image";
import Logo from "@/app/images/VitalHub_Logo 2.png"

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-bl from-blue-400 to-blue-800 w-1/2 h-svh flex items-center justify-center">
        <div>
          <Image
            src={Logo}
            alt="Logo"
            width={200}
            height={100}
          />
        </div>
      </div>
    </main>
  );
}
