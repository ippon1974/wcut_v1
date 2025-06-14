export default async function handler(req, res) {
    const min = await fetch('http://23.111.202.203:7000/works/min');
    const data = await min.json();
    res.json(data);
  }