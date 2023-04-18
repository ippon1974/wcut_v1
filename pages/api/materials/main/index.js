export default async function handler(req, res) {
    const resmaterialsmain = await fetch('http://23.105.246.179:7000/materials/main');
    const data = await resmaterialsmain.json();
    res.json(data);
  }