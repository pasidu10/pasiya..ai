import { useState } from "react";

export default function GenerateCode() {
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateCode() {
    setLoading(true);
    const res = await fetch("/api/openai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        endpoint: "chat",
        payload: {
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: `Write code for: ${prompt}` }]
        }
      }),
    });
    const data = await res.json();
    const output = data?.choices?.[0]?.message?.content || "No response";
    setCode(output);
    setLoading(false);
  }

  function copyCode() {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  }

  return (
    <div className="p-6 mt-24 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-pasiyaBlue mb-4">
        Code Generator
      </h1>
      <textarea
        className="w-full border rounded-xl p-4 mb-4"
        placeholder="Describe what code you want..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={generateCode}
        disabled={loading}
        className="w-full py-3 bg-pasiyaBlue text-white rounded-xl hover:bg-blue-600 transition"
      >
        {loading ? "Generating..." : "Generate Code"}
      </button>

      {code && (
        <div className="mt-6">
          <pre className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto">
            {code}
          </pre>
          <button
            onClick={copyCode}
            className="mt-3 bg-pasiyaGreen text-white px-4 py-2 rounded-lg"
          >
            Copy Code
          </button>
        </div>
      )}
    </div>
  );
}
