import Link from "next/link";

function SignupPage() {
  return (
    <div>
      <Link href={"/auth/signin"}>
        <span>Inicia sesion</span>
      </Link>
    </div>
  );
}

export default SignupPage;
