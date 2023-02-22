export default async function handler(req, res) {
    const next = await fetch(`http://23.105.246.179:7000/works/next?id=${req.query.id}`);
    const data = await next.json();
    res.json(data);
}