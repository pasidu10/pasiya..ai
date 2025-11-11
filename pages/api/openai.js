import axios from "axios";

export default async function handler(req, res) {
  try {
    const key = process.env.OPENAI_API_KEY;
    const { endpoint, payload } = req.body;

    if (endpoint === "chat") {
      const r = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        payload,
        { headers: { Authorization: `Bearer ${key}` } }
      );
      return res.status(200).json(r.data);
    }

    if (endpoint === "images") {
      const r = await axios.post(
        "https://api.openai.com/v1/images/generations",
        payload,
        { headers: { Authorization: `Bearer ${key}` } }
      );
      return res.status(200).json(r.data);
    }

    res.status(400).json({ error: "Unknown endpoint" });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "OpenAI call failed" });
  }
}
