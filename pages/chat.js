import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  async function send() {
    const userMsg = { role: "user", content: text };
    setMessages([...messages, userMsg]);
    setText("");
    const res = await fetch("/api/openai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        endpoint: "chat",
        payload: {
          model: "gpt-4o-mini",
          messages: [...messages, userMsg]
        }
      })
    });
    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content || "No response";
    setMessages(m => [...m, { role: "assistant", content: reply }]);
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4 text-pasiyaBlue">AI Chat</h1>
      <div className="border p-4 rounded-xl h-[60vh] overflow-y-auto bg-white mb-3">
        {messages.map((m, i) => (
          <p key={i} className={m.role === "user" ? "text-right" : "text-left"}>
            <span className={m.role === "user" ? "text-blue-600" : "text-green-600"}>
              {m.content}
            </span>
          </p>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          className="flex-1 border p-2 rounded-lg"
          placeholder="Type your message..."
        />
        <button onClick={send} className="px-4 py-2 bg-pasiyaBlue text-white rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}
