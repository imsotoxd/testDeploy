import { redirect } from "next/navigation";

function AuthPage() {
  return redirect("auth/signin");
}

export default AuthPage;
