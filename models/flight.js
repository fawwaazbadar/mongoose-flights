import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  seat: { type: String, match: /[A-F][1-9]\d?/ },
  price: { type: Number, min: 0 },
});

const flightSchema = new Schema({
  airline: { type: String, enum: ["American", "Southwest", "United"] },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN",
  },
  flightNo: { type: Number, min: 10, max: 9999, required: true },
  departs: {
    type: Date,
    default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  },
  tickets: [ticketSchema],
  destinations:[{type: Schema.Types.ObjectId, ref: 'Destination'}]
});

flightSchema.pre('save', function(next) {
  let flight = this;
  if (!flight.departs){
    flight.departs = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
  }
  next();
})



const Flight = mongoose.model("Flight", flightSchema);

export { Flight };