import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/firebaseConfig";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  async function googleLogin() {
    try {
      await signInWithPopup(auth, provider);
      router.push("/admin/dashboard");
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-green-100">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center">
        <h1 className="text-3xl font-bold text-pasiyaBlue mb-6">
          Admin Login
        </h1>
        <button
          onClick={googleLogin}
          className="bg-pasiyaBlue text-white px-6 py-3 rounded-xl hover:bg-blue-600"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
