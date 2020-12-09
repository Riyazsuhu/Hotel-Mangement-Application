const request = require('supertest')
const app = require('../src/app')
const { CarRental, Room, LiveEvent, MeetingRoom, Dinning } = require('../src/models/guest')
const Service = require('../src/models/staff/service')
const { demoService, demoService1, demoService2, demoService3, demoService4, demoDinnig, demoCarrental, demoLiveevent, demoMeetingroom, demoRoom } = require('./fixtures/db')
beforeEach(async() => {
    await Service.deleteMany()
    await Dinning.deleteMany()
    await MeetingRoom.deleteMany()
    await LiveEvent.deleteMany()
    await Room.deleteMany()
    await CarRental.deleteMany()
})
//testing Dinnig booking
test('should book for dinnig and verify the service ID', async() => {
    request(app).post('/api/book/dinning')
    .set('service_id', demoService._id)
    .send(demoDinnig).expect(200)
})
test('should not book for dinnig with invalid service ID', async() => {
    request(app).post('/api/book/dinning')
    .set('service_id', 'jhsdajksd')
    .send(demoDinnig).expect(404)
})  
//testing  Car rental
test('should book for car rental and verify the service ID', async() => {
    request(app).post('/api/book/carrental')
    .set('service_id', demoService._id)
    .send(demoCarrental).expect(200)
})
test('should not book for car renatl with invalid service ID', async() => {
    request(app).post('/api/book/carrental')
    .set('service_id', 'jhsdajksd')
    .send(demoCarrental).expect(404)
})
//testing Live event
test('should book for live event and verify the service ID', async() => {
    request(app).post('/api/book/liveevent')
    .set('service_id', demoService._id)
    .send(demoLiveevent).expect(200)
})
test('should not book for live event with invalid service ID', async() => {
    request(app).post('/api/book/liveevent')
    .set('service_id', 'jhsdajksd')
    .send(demoLiveevent).expect(404)
})
//testing Meeting room
test('should book for meeting room and verify the service ID', async() => {
    request(app).post('/api/book/meetingroom')
    .set('service_id', demoService._id)
    .send(demoMeetingroom).expect(200)
})
test('should not book for meeting room with invalid service ID', async() => {
    request(app).post('/api/book/meetingroom')
    .set('service_id', 'jhsdajksd')
    .send(demoMeetingroom).expect(404)
})
//testing Room
test('should book for room and verify the service ID', async() => {
    request(app).post('/api/book/room')
    .set('service_id', demoService._id)
    .send(demoRoom).expect(200)
})
test('should not book for room with invalid service ID', async() => {
    request(app).post('/api/book/room')
    .set('service_id', 'jhsdajksd')
    .send(demoRoom).expect(404)
})