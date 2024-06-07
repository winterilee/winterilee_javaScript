const mongoose = require("mongoose");

const BdayTrackerSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: [true, "First name is required."]},
        lastName: {type: String, required: [true, "Last name is required."]},
        bdayMonth: {type: Number, required: [true, "Birth month is required."]},
        bdayDay: {type: Number, required: [true, "Birth day is required."]},
        isGifted: {type: Boolean},
        giftIdeas: {type: String, maxLength: [1000, "This section cannot be over 1000 characters."]}
    },
    {timestamps: true}
);

module.exports = mongoose.model("BdayTracker", BdayTrackerSchema);