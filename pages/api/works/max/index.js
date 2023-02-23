export default async function handler(req, res) {
    const max = await fetch('http://23.105.246.179:7000/works/max');
    const data = await max.json();
    res.json(data);
  }