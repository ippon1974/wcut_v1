export default async function handler(req, res) {
    const max = await fetch('http://90.156.202.71:7000/works/max');
    const data = await max.json();
    res.json(data);
  }