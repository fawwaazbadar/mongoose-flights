import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

/* GET flight listing. */

// localhost:3000/flights/new  GET /flights/new
router.get('/new', flightsCtrl.new)

// GET /flights
router.get('/', flightsCtrl.index)

// GET /flights/:id
router.get('/:id', flightsCtrl.show)


// POST /flights
router.post('/', flightsCtrl.create)

// POST /flight/:id
router.post('/:id/ticket', flightsCtrl.createTicket)

router.post('/:id/destinations', flightsCtrl.addToFlight)

// DELETE /flights/:id
router.delete('/:id', flightsCtrl.delete)



export {
  router
}
