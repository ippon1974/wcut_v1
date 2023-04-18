export default async function handler(req, res) {
    const resnews = await fetch('http://23.105.246.179:7000/news/all');
    const data = await resnews.json();
    res.json(data);
  }
