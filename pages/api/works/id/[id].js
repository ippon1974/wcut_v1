export default async function handler(req, res) {
    const { id } = req.query
    const resworks = await fetch(`http://23.111.202.203:7000/works?id=${req.query.id}`);
    const data = await resworks.json();
    res.json(data);
  }