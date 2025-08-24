export default async function handler(req, res) {
    const next = await fetch(`http://90.156.202.71:7000/works/next?id=${req.query.id}`);
    const data = await next.json();
    res.json(data);
}