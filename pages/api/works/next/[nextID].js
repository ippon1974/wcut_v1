export default async function handler(req, res) {
    const query = req.query;
    const { nextID } = query;
    const resworks = await fetch(`http://23.105.246.179:7000/works/next?id=${nextID}`);
    const data = await resworks.json();
    res.json(data);
  }