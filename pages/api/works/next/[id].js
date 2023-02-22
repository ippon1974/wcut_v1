export default async function handler(req, res) {
    const { id } = req.query
    const resworks = await fetch(`http://23.105.246.179:7000/works/next?id=${id}`);
    const data = await resworks.json();
    res.json(data);
  }