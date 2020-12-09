const request = require('supertest')
const app = require('../src/app')
const { CarRental, Room, LiveEvent, MeetingRoom, Dinning } = require('../src/models/guest')
const { demoService, demoDinnig, demoCarrental, demoLiveevent, demoMeetingroom, demoRoom } = require('./fixtures/db')
const Service = require('../src/models/staff/service')
beforeEach(async() => {
    await Dinning.deleteMany()
    await MeetingRoom.deleteMany()
    await LiveEvent.deleteMany()
    await Room.deleteMany()
    await CarRental.deleteMany()
    await new CarRental(demoCarrental).save()
    await new Room(demoRoom).save()
    await new LiveEvent(demoLiveevent).save()
    await new MeetingRoom(demoMeetingroom).save()
    await new Dinning(demoDinnig).save()
})
//testing Dinnig booking
test('should booked for dinnig and verify the service ID', async() => {
    request(app).get('/api/booked/dinning')
    .set('service_id', demoService._id)
    .send().expect(200)
})
test('should not booked for dinnig with invalid service ID', async() => {
    request(app).get('/api/booked/dinning')
    .set('service_id', 'jhsdajksd')
    .send().expect(404)
})  
//testing  Car rental
test('should get booked for car rental and verify the service ID', async() => {
    request(app).get('/api/booked/carrental')
    .set('service_id', demoService._id)
    .send().expect(200)
})
test('should not booked for car rental with invalid service ID', async() => {
    request(app).get('/api/booked/carrental')
    .set('service_id', 'jhsdajksd')
    .send().expect(404)
})
//testing Live event
test('should booked for live event and verify the service ID', async() => {
    request(app).get('/api/booked/liveevent')
    .set('service_id', demoService._id)
    .send().expect(200)
})
test('should not booked for live event with invalid service ID', async() => {
    request(app).get('/api/booked/liveevent')
    .set('service_id', 'jhsdajksd')
    .send().expect(404)
})
//testing Meeting room
test('should booked for meeting room and verify the service ID', async() => {
    request(app).get('/api/booked/meetingroom')
    .set('service_id', demoService._id)
    .send().expect(200)
})
test('should not booked for meeting room with invalid service ID', async() => {
    request(app).get('/api/booked/meetingroom')
    .set('service_id', 'jhsdajksd')
    .send().expect(404)
})
//testing Room
test('should booked for room and verify the service ID', async() => {
    request(app).get('/api/booked/room')
    .set('service_id', demoService._id)
    .send().expect(200)
})
test('should not booked for room with invalid service ID', async() => {
    request(app).get('/api/booked/room')
    .set('service_id', 'jhsdajksd')
    .send().expect(404)
})