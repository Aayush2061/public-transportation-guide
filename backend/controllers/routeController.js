const Route = require('../models/Route');

exports.createRoute = async (req, res) => {
    const { start, destination, fare, transportation, stops } = req.body;
    try {
        const newRoute = new Route({ start, destination, fare, transportation, stops })
        await newRoute.save();
        res.status(201).json(newRoute);
    } catch (e) {
        res.status(500).json({ error: error.message });
    }

}

exports.getRoutes = async (req, res) => {
    try {
        const routes = await Route.find();
        res.status(200).json(routes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};