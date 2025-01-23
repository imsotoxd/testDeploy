"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const imageSrc = pathname === "/auth/signin" ? "/signin.jpg" : "/signup.jpg";

  return (
    <div className="flex h-screen">
      <div className="w-1/2 relative hidden md:block">
        <Image
          src={imageSrc}
          alt="Imagen de autenticación"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white p-8">
        <Link href={"/"}>
          <Image src="/logo.svg" alt="logo" width={264} height={117} />
        </Link>
        {children}
      </div>
    </div>
  );
}
