export default async function handler(req, res) {
    const resmaterialsmain = await fetch('http://90.156.202.71:7000/materials/main');
    const data = await resmaterialsmain.json();
    res.json(data);
  }