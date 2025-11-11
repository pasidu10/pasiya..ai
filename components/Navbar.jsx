import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-white shadow fixed top-0 left-0 right-0 p-4 flex justify-between items-center">
      <h1 className="text-pasiyaBlue font-bold text-xl">PASIYA-MD AI</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/chat">Chat</Link>
        <Link href="/generate-image">Image</Link>
        <Link href="/generate-code">Code</Link>
      </div>
    </nav>
  );
}
