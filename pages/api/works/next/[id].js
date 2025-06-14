export default async function handler(req, res) {
    const next = await fetch(`http://23.111.202.203:7000/works/next?id=${req.query.id}`);
    const data = await next.json();
    res.json(data);
}