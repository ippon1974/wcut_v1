export default async function handler(req, res) {
    const resnews = await fetch('http://90.156.202.71:7000/news/all');
    const data = await resnews.json();
    res.json(data);
  }
