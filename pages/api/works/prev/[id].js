export default async function handler(req, res) {
    const prev = await fetch(`http://90.156.202.71:7000/works/prev?id=${req.query.id}`);
    const data = await prev.json();
    res.json(data);
}