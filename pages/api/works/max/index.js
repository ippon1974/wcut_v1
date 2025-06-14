export default async function handler(req, res) {
    const max = await fetch('http://23.111.202.203:7000/works/max');
    const data = await max.json();
    res.json(data);
  }