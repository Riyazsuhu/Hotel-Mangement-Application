const { CarRental } = require('./car-rental')
const { Dinning } = require('./dining')
const { LiveEvent } = require('./live-events')
const { MeetingRoom } = require('./meeting-room')
const { Room } = require('./room')
//exporting Every model in single object
module.exports = {
    CarRental,
    Dinning,
    LiveEvent,
    MeetingRoom,
    Room
}