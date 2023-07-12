export default function handler(req, res) {
  const { email, name, message } = req.body;
  console.log(email);
}
