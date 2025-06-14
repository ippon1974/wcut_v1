export default async function handler(req, res) {
    const resworks = await fetch('http://23.111.202.203:7000/works/main');
    const data = await resworks.json();
    res.json(data);
  }