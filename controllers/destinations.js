import { Destination } from '../models/destination.js'

function newDestination(req, res) {
  Destination.find({}, function(err, destinations) {
    res.render('destinations/new', {
      title: 'Add Destination', 
      destinations
    })
  })
}

function create(req, res) {
 
  Destination.create(req.body, function(err, destination) {
    res.redirect('/destinations/')
  })
}

export {
  newDestination as new,
  create
}