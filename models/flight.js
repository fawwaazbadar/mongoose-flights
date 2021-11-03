import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number, min: 0},
})



const flightSchema = new Schema ({
  airline: String,
  destinations: [{
    type: Schema.Types.ObjectId, 
    ref: "Destination"
  }],
  flightNo: {type: Number, required: true},
  departs: {type: Date, default: function(){
    const date = new Date()
    const addOne = date.getFullYear()+1
    date.setFullYear(addOne)
    return date
  }, },
  ticket: [ticketSchema]
})

// compile the schema into a model and export it
// using flightSchema to make the Flight model
const Flight = mongoose.model('Flight', flightSchema)



export{
  Flight,
}