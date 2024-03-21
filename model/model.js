const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema(
  {
    Temp: {
      required: true,
      type: Number,
    },
    pH: {
      required: true,
      type: Number,
    },

    LampTime: {
      required: true,
      type: Number,
    },
    FanTime: {
      required: true,
      type: Number,
    },
    CO2Time: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);
const controlSchema = new mongoose.Schema(
  {
    automatic: {
      required: true,
      type: Number,
    },
    CO2Stat: {
      required: true,
      type: Number,
    },

    LampStat: {
      required: true,
      type: Number,
    },
    FanStat: {
      required: true,
      type: Number,
    },
    TimeStart: {
      required: true,
      type: Number,
    },
    TimeEnd: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

const deviceModel = mongoose.model("DeviceAquascape", deviceSchema);
const controlModel = mongoose.model("controlAquascape", controlSchema);

module.exports = {
  deviceModel,
  controlModel,
};
