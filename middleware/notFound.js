const notFound = (req, res) => res.status(404).send("Route doesn't found");
module.exports = notFound;
