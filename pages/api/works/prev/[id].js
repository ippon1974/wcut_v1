export default async function handler(req, res) {
    const prev = await fetch(`http://23.105.246.179:7000/works/prev?id=${req.query.id}`);
    const data = await prev.json();
    res.json(data);
}