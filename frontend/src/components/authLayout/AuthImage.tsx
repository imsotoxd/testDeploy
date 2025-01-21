import Image from "next/image";
import React from "react";

interface AuthImageProps {
  type: "signin" | "signup";
}

const AuthImage: React.FC<AuthImageProps> = ({ type }) => {
  const imageSrc = type === "signin" ? "/signup.jpg" : "/signin.jpg";

  return (
    <div className="w-1/2 relative hidden md:block">
      <Image
        src={imageSrc}
        alt={`Imagen de ${type}`}
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default AuthImage;
