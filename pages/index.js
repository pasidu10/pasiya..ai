import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <Navbar />
      <main className="text-center mt-24">
        <img src="/logo.png" className="w-32 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-pasiyaBlue">PASIYA-MD AI</h1>
        <p className="text-lg text-gray-600 mt-3">
          Smart AI Power for Every Dream — Powered by PASIYA-MD Team
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link href="/chat" className="px-6 py-3 bg-pasiyaBlue text-white rounded-xl shadow">
            Chat AI
          </Link>
          <Link href="/generate-image" className="px-6 py-3 bg-pasiyaGreen text-white rounded-xl shadow">
            Image Generator
          </Link>
          <Link href="/generate-code" className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow">
            Code Generator
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
