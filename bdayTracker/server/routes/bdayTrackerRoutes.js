const BdayTrackerController = require("../controllers/bdayTrackerController");

module.exports = (app) => {
    app.get("/api/bdays", BdayTrackerController.findAllBdays);
    app.get("/api/bdays/:id", BdayTrackerController.findOneBday);
    app.post("/api/bdays", BdayTrackerController.createBday);
    app.patch("/api/bdays/:id", BdayTrackerController.updateBday);
    app.delete("/api/bdays/:id", BdayTrackerController.deleteBday);
};