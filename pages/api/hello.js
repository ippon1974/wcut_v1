export default async function handler(req, res) {
  const resworks = await fetch('http://23.105.246.179:7000/works/main');
  const data = await resworks.json();
  res.json(data);
}
