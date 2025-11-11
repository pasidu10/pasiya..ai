import { useEffect, useState } from "react";
import { auth } from "../../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else router.push("/admin/login");
    });
    return () => unsub();
  }, [router]);

  if (!user) return <p className="text-center mt-32">Loading...</p>;

  return (
    <div className="p-8 mt-20">
      <h1 className="text-3xl font-bold text-pasiyaBlue">Admin Dashboard</h1>
      <p className="mt-2 text-gray-600">Welcome, {user.displayName}</p>

      <div className="mt-6 flex flex-col gap-4">
        <button className="bg-pasiyaBlue text-white px-4 py-3 rounded-lg">
          Add / Edit Ads
        </button>
        <button className="bg-pasiyaGreen text-white px-4 py-3 rounded-lg">
          Manage Users
        </button>
        <button
          onClick={() => signOut(auth)}
          className="bg-red-500 text-white px-4 py-3 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
