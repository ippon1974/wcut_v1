export default async function handler(req, res) {
    const resworks = await fetch('http://90.156.202.71:7000/news/main');
    const data = await resworks.json();
    res.json(data);
  }