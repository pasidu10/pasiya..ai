export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pasiyaBlue">PASIYA-MD AI</h1>
        <div className="space-x-4">
          <a href="/" className="hover:text-pasiyaGreen">Home</a>
          <a href="/chat" className="hover:text-pasiyaGreen">Chat</a>
          <a href="/generate-code" className="hover:text-pasiyaGreen">Code</a>
          <a href="/generate-image" className="hover:text-pasiyaGreen">Image</a>
          <a href="/admin/login" className="hover:text-pasiyaGreen">Admin</a>
        </div>
      </div>
    </nav>
  );
}
