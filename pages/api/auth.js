// placeholder: Firebase handles this in client
export default function handler(req, res) {
  return res.status(200).json({ msg: "Auth handled via Firebase Google Sign-in" });
}
