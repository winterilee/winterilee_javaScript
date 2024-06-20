const BdayTracker = require("../models/bdayTrackerModel");

module.exports = {
    findAllBdays: (req, res) => {
        BdayTracker.find()
            .then((allBdays) => res.json(allBdays))
            .catch((err) => res.json(err));
    },
    
    findOneBday: (req, res) => {
        BdayTracker.findById(req.params.id)
            .then((oneBday) => res.json(oneBday))
            .catch((err) => res.json(err));
    },

    createBday: (req, res) => {
        BdayTracker.create(req.body)
            .then((newBday) => res.json(newBday))
            .catch((err) => res.json(err));
    },

    updateBday: (req, res) => {
        BdayTracker.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then((updatedBday) => res.json(updatedBday))
            .catch((err) => res.json(err));
    },

    deleteBday: (req, res) => {
        BdayTracker.findByIdAndDelete(req.params.id)
            .then((deletedBday) => res.json(deletedBday))
            .catch((err) => res.json(err));
    }
};