export default async function handler(req, res) {
    const min = await fetch('http://90.156.202.71:7000/works/min');
    const data = await min.json();
    res.json(data);
  }