import { useState } from "react";

export default function GenerateImage() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  async function generateImage() {
    setLoading(true);
    const res = await fetch("/api/openai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        endpoint: "images",
        payload: { prompt, n: 1, size: "1024x1024" }
      }),
    });
    const data = await res.json();
    setImageUrl(data?.data?.[0]?.url || null);
    setLoading(false);
  }

  return (
    <div className="p-6 mt-24 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-pasiyaBlue mb-4">
        Image Generator
      </h1>
      <textarea
        className="w-full border rounded-xl p-4 mb-4"
        placeholder="Enter your image idea..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={generateImage}
        disabled={loading}
        className="w-full py-3 bg-pasiyaBlue text-white rounded-xl hover:bg-blue-600 transition"
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {imageUrl && (
        <div className="mt-6 text-center">
          <img src={imageUrl} alt="Generated" className="rounded-xl shadow-lg mx-auto" />
          <a
            href={imageUrl}
            download
            className="block mt-3 text-blue-600 underline"
          >
            Download Image
          </a>
        </div>
      )}
    </div>
  );
}
